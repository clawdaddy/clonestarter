import React, { Component } from 'react';

class DropDownOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shaded:false,
            notHovering:{
                backgroundColor:'white',
                transition:'background-color 0.2s',

            },
            hovering:{
                backgroundColor:'lightgrey',
                transition:'background-color 0.2s'
            }
        }
    }
    
    render() {
        const { option, handleChoice } = this.props;
        return (
            <div 
                onClick={ () => handleChoice(option)}
                onMouseEnter={()=>{ this.setState({ shaded:true }) } }
                onMouseLeave={ ()=>{ this.setState({shaded:false}) } }
                style={this.state.shaded ? this.state.hovering : this.state.notHovering}
            >
                {option}
            </div>
        );
    }
}

export default DropDownOption