import React from 'react';



class Button extends React.Component {
    render() {
        return (<button
            className="btn"
            background-color={this.props.color}
            test=""
            onClick={this.props.handleClick}>{this.props.buttonName}</button>)
    }
}

//alert('gitTest');

export default Button;