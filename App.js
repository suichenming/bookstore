import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import './App.css';

// 引入tabs
import {Tabs} from './components'

//引入指引页
import Guider from './pages/guider/Guider.jsx'

//引入每一个页面
import Home from './pages/home/Home.jsx'
import Category from './pages/category/Category.jsx'
import BookList from './pages/category/BookList.jsx'
import BookDetail from './pages/common/BookDetail.jsx'
import Cart from './pages/cart/Cart.jsx'
import Mine from './pages/mine/Mine.jsx'
import More from './pages/more/More.jsx'


class App extends Component {
  constructor(){
    super();
    this.state = {
      //判断是否加载过指引页，再设置isload的值
      isload: localStorage.getItem('load')?true:false
    }
  }
  render() {
    let appDOM = null;
    if(this.state.isload){
      appDOM = (
        <Router>
          <div className="App">
  
            {/* /重定向 */}
            <Route exact path="/" render={()=>{
              return <Redirect to="/home"/>
            }}/>
            {/* 五个tab根页面 */}
            <Route component={Home} path="/home"/>
            <Route component={BookDetail} path="/home/detail/:id"/>
            
            <Route component={Category} path="/category"/>
            <Route component={BookList} path="/category/booklist"/>
            <Route component={BookDetail} path="/category/booklist/detail/:id"/>
            

            

            <Route component={Cart} path="/cart"/>
            <Route component={Mine} path="/mine"/>
            <Route component={More} path="/more"/>
            
            {/* tabs导航 */}
            <Tabs/>
            
          </div>
        </Router>
      );
    }else{
      appDOM = <Guider onEnter={this.handleAppEnter.bind(this)}/>;
    }
    return appDOM;
  }

  //处理指引页的进入事件
  handleAppEnter(){
    //修改isload，展示app界面
    this.setState({isload: true});
    // 记录已经加载过app的指引页
    localStorage.setItem('load', true);
  }
}

export default App;
