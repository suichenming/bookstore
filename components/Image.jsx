import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ImageCom extends Component{
    constructor(){
        super();
        this.state = {
            url: 'https://place-hold.it/150x200'
        }
    }
    render(){
        return (
            <img src={this.state.url} alt=""/>
        )
    }
    componentDidMount(){
        var imageObj = new Image();
        imageObj.src = this.props.src;
        imageObj.onload = ()=>{
            this.setState({url: this.props.src});
        }
    }
}

ImageCom.propTypes = {
    src: PropTypes.string
}