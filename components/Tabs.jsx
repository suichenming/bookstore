import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Tabs.css'

class Tabs extends Component{
    constructor(){
        super();
        this.state = {
            tabsData: [
                {title: '首页', path: '/home'},
                {title: '分类', path: '/category'},
                {title: '购物车', path: '/cart'},
                {title: '我的', path: '/mine'},
                {title: '更多', path: '/more'}
            ]
        }
    }
    render(){
        //遍历tabs
        let tabsDom = this.state.tabsData.map((item, index)=>{
            return (
                <NavLink key={index} to={item.path} className="tab">
                    {item.title}
                </NavLink>
            )
        });

        // 返回dom结构
        return (
            <div className="tabs">
                {tabsDom}
            </div>
        )
    }
}

export default Tabs;