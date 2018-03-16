import React from 'react';



class Button extends React.Component {
    render() {
        return (<button
            className="btn"
            style={{backgroundColor: this.props.btnColor}}
            onClick={this.props.handleClick}>{this.props.buttonName}</button>)
    }
}

//alert('gitTest');

export default Button;