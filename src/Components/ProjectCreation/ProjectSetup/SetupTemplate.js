import React, { Component } from 'react';

class SetupTemplate extends Component {
    render() {
        return (
            <div>
                <h2>{current.header}</h2>
                <p>{current.subheader}</p>
                
                <p>{current.backText}</p>
                <button>{current.nextText}</button>
            </div>
        );
    }
}

export default SetupTemplate;