import React, {Component} from 'react'
import './Content.css'

export default class Content extends Component{
    render(){
        return (
            <div className="content" ref="content">
                <div className="wrap">
                    {this.props.children}
                </div>
            </div>
        )
    }
    refreshDOM(){
        this.contentScroll.refresh();
    }
    componentDidMount(){
        //创建滚动视图
        this.contentScroll = new window.IScroll(this.refs.content, {

        });
        this.contentScroll.on('beforeScrollStart', ()=>{
            this.contentScroll.refresh();
        })
    }
}