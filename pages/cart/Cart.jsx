import React, {Component} from 'react'
import {Header, Content} from '../../components'
import store from '../../store'

import './Cart.css'

class Cart extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         cartList: store.getState().cartList
    //     }
    // }
    render(){
        let {cartList} = store.getState();
        console.log(cartList);

        return (
            <div id="cart" className="page">
                <Header showBack rightButton={{
                    title: '去结算', 
                    handler: this.payAction.bind(this)
                }}>
                    购物车
                </Header>
                <Content>
                {
                    cartList.map(item=>{
                        return (
                            <div className="bookItem" key={item.id}>
                                <h4>{item.title}</h4>
                                <span onClick={this.reduceCount.bind(this,item)}>-</span>
                                <p>{item.count}</p>
                                <span onClick={this.addCount.bind(this,item)}>+</span>
                                <b onClick={this.deleteBook.bind(this,item)}>☒</b>
                            </div>
                        )
                    })
                }
                    
                </Content>
            </div>
        )
    }

    componentDidMount(){
        //监听全局数据的变化
        this.token = store.subscribe(()=>{
            //重新执行render方法
            this.forceUpdate();
        })
    }
    componentWillUnmount(){
        //组件销毁时，移除监听
        this.token();
    }


    payAction(){
        console.log('去结算');
    }

    //删减商品数量
    reduceCount(item){
        store.dispatch({
            type: 'reduce-count',
            id: item.id
        });
    }
    //增加商品数量
    addCount(item){
        store.dispatch({
            type: 'add-count',
            id: item.id
        });
    }
    // 删除商品
    deleteBook(item){
        store.dispatch({
            type: 'delete-book',
            id: item.id
        });
    }
}

export default Cart;