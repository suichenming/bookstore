import React, {Component} from 'react'
import {Header, Content, SearchBar} from '../../components'
import {getBookCategory} from '../../services/bookService'

import './Category.css'
class Category extends Component{
    constructor({history}){
        super();
        this.history = history;
        this.state = {
            categoryList: []
        }
    }
    render(){
        let {categoryList} = this.state;
        let categoryListDOM = categoryList.map((item, i)=>{
    return (
        <li  className="category-item" key={i}>
            {/* 大标题 */}
            <h5 className="category-title"  onClick={this.showItems.bind(this, i)}>
                {item.title}
            </h5>
            {
                item.isShow && (
                    <ul>
                        {
                            item.subitems.map((subitem, j)=>{
                                return (
                                        //小标题
                                        <li className="category-sub-title" key={j} onClick={this.goListPage.bind(this, item, subitem)}>
                                            {subitem.title}
                                        </li>
                                );
                            })
                        }
                    </ul>
                )
            }
        </li>
    )
});

        
        return (
            <div id="category" className="page">
                <Header showBack>
                    书店
                </Header>

                <Content ref="content">
                    <SearchBar/>
                    <ul className="category-menu">
                        {categoryListDOM}
                    </ul>
                </Content>
                
            </div>
        )
    }

    componentDidMount(){
        //请求分类数据
        getBookCategory().then(result=>{
            this.setState({categoryList: result});
        })
    }

    //分类菜单的点击事件
    showItems(index){
        let isShow = this.state.categoryList[index].isShow;
        //取反
        this.state.categoryList[index].isShow = !isShow;
        this.setState({categoryList: this.state.categoryList}, ()=>{
            console.log('更新dom完成');
            // 刷新滚动视图
            this.refs.content.refreshDOM();
        });
    }

    // 每一个分类的点击事件，进入图书列表
    goListPage(item, subitem){
        this.history.push({pathname: '/category/booklist', state: {query: item.title+subitem.title}});
    }
}

export default Category;