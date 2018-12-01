import React, {Component} from 'react'
import {Header, SearchBar, Content, Books} from '../../components'


import './Home.css'

import {getTopBookList} from '../../services/bookService'

class Home extends Component{
    constructor(){
        super();
        this.state = {
            bookList: []
        }
    }
    render(){
        //取出书籍列表数据
        let {bookList} = this.state;
        
        return (
            <div id="home" className="page">
                <Header>
                    书店
                </Header>
                <Content>
                    <SearchBar/>
                    {/* 显示书籍列表的dom */}
                    <Books data={bookList} type="home"/>
                </Content>
            </div>
        )
    }
    //组件加载完成
    componentDidMount(){
        //请求书籍列表
        getTopBookList('推荐').then(result=>{
            this.setState({bookList: result});
        })
    }

    
}

export default Home;