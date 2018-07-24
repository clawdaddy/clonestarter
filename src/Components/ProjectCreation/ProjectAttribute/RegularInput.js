import React, { Component } from 'react';

class RegularInput extends Component {
    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.props.value}
                    onChange={e => this.props.callbackFn(e.target.value)}
                />
            </div>
        );
    }
}

export default RegularInput;