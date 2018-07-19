import React, { Component } from 'react';
import DropdownOption from './DropdownSelector/DropdownOption';
import OnClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';

const styles = {
    placeholderStyle:{
        color:'#656969'
    },
    arrowStyle:{
        height:0,
        width:0,
        borderTop:'5px solid black',
        borderLeft:'5px solid transparent',
        borderRight:'5px solid transparent'
    },
    containerStyle:{
        display:'flex',
        justifyContent:'space-between',
        margin:'5px',
        alignItems:'center',
        boxShadow:'1px 2px 5px',
        padding:'10px',
        boxSizing:'border-box'
    },
    optionsContainerStyle:{
        border:'1px solid black',
        padding:'10px',
        margin:'5px',
        boxShadow:'1px 2px 5px',
        overflow:'auto',
        maxHeight:'12em',
        cursor:'pointer',
        position:'absolute',
        background:'white',
        boxSizing:'border-box',
        display:'flex',
        flexDirection:'column',
    },
}

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
                    style={styles.containerStyle} 
                    onClick = {this.handleClick}
                >
                    {
                        this.props.selected
                        ? <p>{this.props.selected}</p>
                        :<p style={styles.placeholderStyle}>{this.props.placeholder}</p>
                    }
                    <div style={styles.arrowStyle}></div>
                </div>
                {
                    this.state.selecting && 
                        <div style={styles.optionsContainerStyle}>
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