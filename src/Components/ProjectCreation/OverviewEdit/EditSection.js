import React, { Component } from 'react';
import './EditSection.css';

class EditSection extends Component {
    render() {
        return (
            <div className='edit_section'>
                <p className='edit_section_title'>{this.props.title}</p>
                <div className='edit_section_inputs'>
                    {this.props.inputs.map( domElement => domElement)}
                </div>
                
            </div>
        );
    }
}

export default EditSection;