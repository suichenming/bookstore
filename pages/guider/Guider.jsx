import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Guider extends Component{
    render(){
        return (
            <div id="guider">
                <h1>指引页面</h1>
                <button onClick={this.enterAppAction.bind(this)}>进入</button>
            </div>
        )
    }
    enterAppAction(){
        //调用app组件的进入事件
        this.props.onEnter();
    }
}

Guider.propTypes = {
    onEnter: PropTypes.func
}

export default Guider;