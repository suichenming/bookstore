import React, {Component} from 'react'
import Image from './Image.jsx'
import Star from './Star.jsx'
import PropTypes from 'prop-types'
import './Books.css'
import {Link} from 'react-router-dom'
import store from '../store'

export default class Books extends Component{
    constructor(){
        super();
        this.state = {
            count: null
        };
    }
    render(){
        let {data, type} = this.props;
        let path = '';
        if(type === 'home'){
            path = '/home/detail/';
        }else if(type === 'category'){
            path = '/category/booklist/detail/';
        }
        return (
            <ul className="book-list">
                {
                    data.map(book=>{
                        let count = this.getCountByBookId(book.id);
                        let badge = count && <i className="badge">{count}</i>;
                        return (
                            <Link key={book.id} className="book-item"
                                to={path+book.id}>
                                <div className="book-logo">
                                    <Image src={book.image}/>
                                </div>
                                <div className="book-content">
                                    <h4>{book.title}--{book.id}</h4>
                                    <Star rate={book.rating}/>
                                    <p>价格：{book.price}</p>
                                    <p>作者：{book.author}</p>
                                    <span className="buy">
                                        ☑
                                        {badge}
                                    </span>
                                    {/* <span className="buy" onClick={this.addBookToCart.bind(this, book)}>☑</span> */}
                                </div>
                            </Link>
                        )
                    })
                }
            </ul>
        )
    }

    //添加到购物车的点击事件
    addBookToCart(book, ev){
        ev.stopPropagation();

        console.log(book);
    }

    //获得购物车中的数量
    getCountByBookId(id){
        // 取得所有购物车数据
        let cartList = store.getState().cartList;
        //取出购物车中的这个商品，有可能不存在
        let obj = cartList.find(item=>{
            return item.id == id
        })
        if(obj){
            return obj.count;
        }else{
            return;
        }
    }
}


Books.propTypes = {
    data: PropTypes.array,
    type: PropTypes.string
    //首页进入：home，分类进入：category
}
