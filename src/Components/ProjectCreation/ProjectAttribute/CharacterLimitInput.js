import React, { Component } from 'react';
import './CharacterLimitInput.css'

class CharacterLimitInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charactersLeft:+props.characters - props.value.length,
        }
    }
    handleInput = (value) => {
        this.setState( (prevState) => {
            return { charactersLeft:(+this.props.characters - value.length)}
        })
        this.props.callbackFn(value)
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.value !== this.props.value){
            this.setState({
                charactersLeft:+this.props.characters - this.props.value.length
            })
        }
    }
    render() {
        return (
            <div className='character_limit'>
                <input 
                    value={this.props.value}
                    onChange={(e) => this.handleInput(e.target.value)}
                    maxLength={+this.props.characters}
                    className='limit_input'
                />
                <span className='counter'>{this.state.charactersLeft}/{this.props.characters}</span>
            </div>
        );
    }
}

export default CharacterLimitInput;