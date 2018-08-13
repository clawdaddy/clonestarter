import React, { Component } from 'react';
import './Dropzone.css';

class Dropzone extends Component {
    render() {
        return (
            <div onDrop={(e) => {
                console.log('hit div')
                this.props.callbackFn(e)}
                }
                onDragEnter={e => this.props.handleDrag(e)}
                onDragOver={e => this.props.handleDrag(e)}
                className='dropzone'
                >Drop file here!
                {/* <input type='file' onChange={(e) => this.props.callbackFn(e.target.value)}/> */}
            </div>
        );
    }
}

export default Dropzone;