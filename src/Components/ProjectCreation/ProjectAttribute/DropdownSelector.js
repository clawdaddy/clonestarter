import React, { Component } from 'react';
import DropdownOption from './DropdownSelector/DropdownOption';
import OnClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import './DropdownSelector.css';

class DropdownSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selecting:false
        }
    }
    handleClickOutside = (event) => {
        this.setState({
            selecting:false
        })
    }
    handleClick = () => {
        this.setState( (prevState, props) => {
            return {selecting:!prevState.selecting}
        })
    }
    handleChoice = ( choice ) => {
        this.setState( (prevState, props) => {
            return {selecting:!prevState.selecting}
        })
        this.props.callbackFn( choice )
    }
    render() {
        return (
            <div>
                <div 
                    className='dropdown_container'
                    onClick = {this.handleClick}
                >
                    {
                        this.props.selected
                        ? <p>{this.props.selected}</p>
                        :<p className='placeholder_text'>{this.props.placeholder}</p>
                    }
                    <div className='arrow'></div>
                </div>
                {
                    this.state.selecting && 
                        <div className='dropdown_options'>
                            {
                                this.props.options.map(option => {
                                        return (
                                            // <p onClick={() =>this.handleChoice(option)}
                                            //     style={styles.optionStyle}
                                            //     onMouseEnter
                                            // >
                                            //     {option}
                                            // </p>
                                            <DropdownOption
                                                handleChoice={this.handleChoice}
                                                option={option}
                                                key={option}
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                }
            </div>
        );
    }
}
DropdownSelector.propTypes = {
    options: PropTypes.array.isRequired,
    selected: PropTypes.string,
    placeholder: PropTypes.string,
    callbackFn: PropTypes.func.isRequired
}

export default OnClickOutside(DropdownSelector);