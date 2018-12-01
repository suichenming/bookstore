import React, {Component} from 'react'
import Header from '../../components/Header.jsx'
import Content from '../../components/Content.jsx'
import Books from '../../components/Books.jsx'
import {getTopBookList} from '../../services/bookService'
import './BookList.css'

export default class BookList extends Component{
    constructor({location, history}){
        super();
        this.history = history;
        this.state = {
            query: location.state.query,
            list: []
        }
    }
    render(){
        let {list} = this.state;
        return (
            <div className="page subpage" id="book-list">
                <Header showBack back={this.handleBack.bind(this)}>
                    图书列表
                </Header>
                <Content>
                    <Books data={list} type="category"/>
                </Content>
            </div>
        )
    }

    componentDidMount(){
        getTopBookList(this.state.query).then(result=>{
            // console.log('请求数据成功');
            // console.log(result);
            this.setState({list: result});
        })
    }

    //处理头部的返回事件
    handleBack(){
        this.history.goBack();
    }

}