import React, { Component } from 'react';

const styles = {
    section:{
        display:'flex',
        justifyContent:'space-between',
        padding:'5px',
        backgroundColor:'#f8f9fd',
        marginBottom:'18px'
    },
    inputs:{
        display:'flex',
        flexDirection:'column'
    }
}
class EditSection extends Component {
    render() {
        return (
            <div style={styles.section}>
                <p>{this.props.title}</p>
                <div style={styles.inputs}>
                    {this.props.inputs.map( domElement => domElement)}
                </div>
                
            </div>
        );
    }
}

export default EditSection;