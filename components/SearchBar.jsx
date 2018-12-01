import React, {Component} from 'react'
import './SearchBar.css'

export default class Header extends Component{
    render(){
        return (
            <div className="search-bar">
                <p className="text">
                    <span>☞</span>
                    请输入搜索内容
                </p>
            </div>
        )
    }
}
