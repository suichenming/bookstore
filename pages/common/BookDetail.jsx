import React, {Component} from 'react'
import Header from '../../components/Header.jsx'
import Content from '../../components/Content.jsx'
import './BookDetail.css'
import {getBookDetailByid} from '../../services/bookService'
import store from '../../store'

export default class BookList extends Component{
    constructor({match, history}){
        super();
        this.history = history;
        //取得书籍的id
        this.state = {
            id: match.params.id,
            dom: null,
            info: null
        }
    }
    render(){
        return (
            <div className="page subpage" id="book-detail">
                <Header showBack back={this.handleBack.bind(this)}>
                    书籍详情
                </Header>
                <Content>
                    {this.state.dom}

                    
                </Content>
                <span className="buy" onClick={this.addBookToCart.bind(this)}>
                    添加到购物车
                </span>
            </div>
        )
    }

    handleBack(){
        this.history.goBack();
    }

    //添加当前这本书籍到购物车
    addBookToCart(){
        store.dispatch({
            type: 'add-book',
            value: {
                id: this.state.id,
                price: this.state.info.price,
                title: this.state.info.title
            }
        })
    }

    componentDidMount(){
        //请求书籍的详情数据
        getBookDetailByid(this.state.id).then(result=>{

            this.state.info = result;
            console.log(result);

            let bookDetailDOM = (
                <div>
                    <h1>{result.title}</h1>
                    <p>{result.summary}</p>
                </div>
            )
            this.setState({dom: bookDetailDOM});
        })
    }


   


}