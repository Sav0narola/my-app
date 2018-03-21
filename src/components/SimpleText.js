import React, { Component } from "react";

class SimpleText extends Component {
    render(){
        return(<span
            className={'main'}
            mood = {'test'}>
            You are feeling: {this.props.mood} today</span>)
    }
}

export default SimpleText;