import React from 'react';

var buttonStyle = {
    margin: '50px 50px 20px 0',
    backgroundColor: 'green',

};

class Button extends React.Component {
    render() {
        return (<button
            className="btn btn-default"
            style={buttonStyle}
            onClick={this.props.handleClick}>{this.props.buttonName}</button>)
    }
}

//alert('gitTest');

export default Button;