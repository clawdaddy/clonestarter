import React, { Component } from 'react';

class CharacterLimitInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charactersLeft:+props.characters
        }
    }
    handleInput = (value) => {
        this.setState( (prevState) => {
            return { charactersLeft:(+this.props.characters - value.length)}
        })
        this.props.callbackFn(value)
    }
    render() {
        return (
            <div>
                <input 
                    value={this.props.value}
                    onChange={(e) => this.handleInput(e.target.value)}
                />
                <div>{this.state.charactersLeft}/{this.props.characters}</div>
            </div>
        );
    }
}

export default CharacterLimitInput;