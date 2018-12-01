import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Header.css'

export default class Header extends Component{
    render(){
        //返回按钮
        let backbtn = this.props.showBack && <span className="header-btn header-btn-left" onClick={this.backAction.bind(this)}>←</span>;
        
        //右按钮
        let rightbtn = this.props.rightButton && (
            <span className="header-btn header-btn-right" onClick={this.props.rightButton.handler}>
                {this.props.rightButton.title}
            </span>
        );

        return (
            <header className="header">
                {backbtn}
                <h1 className="title">
                    {this.props.children}
                </h1>
                {rightbtn}
            </header>
        )
    }

    //返回的点击事件
    backAction(){
        //传值给父组件
        if(this.props.back){
            this.props.back();
        }
    }
}

//属性校验
Header.propTypes = {
    showBack: PropTypes.bool,
    back: PropTypes.func,
    rightButton: function(props, propsName, componentName){
        let {rightButton} = props;
        if(!rightButton){
            return null;
        }
        if(rightButton.title && rightButton.handler){
            if(typeof rightButton.title !== 'string'){
                return new Error('header组件的rightButton属性的title必须为string类型');
            }
            if(typeof rightButton.handler !== 'function'){
                return new Error('header组件的rightButton属性的handler必须为function类型');
            }
        }else{
            return new Error('header组件的rightButton属性必须有title和handler');
        }
    }
}