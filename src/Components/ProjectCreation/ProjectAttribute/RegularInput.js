import React, { Component } from 'react';

class RegularInput extends Component {
    render() {
        return (
            
                <input
                    type='text'
                    value={this.props.value}
                    onChange={e => this.props.callbackFn(e.target.value, e.target.name)}
                    name={this.props.name}
                />
            
        );
    }
}

export default RegularInput;