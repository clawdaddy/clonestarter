import React, { Component } from 'react';
import './Dropzone.css';
import axios from 'axios';

class Dropzone extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef()
    }
    handleFile = (e) => {
        e.preventDefault();
        console.log("file input: ",this.fileInput.current.files[0])
        let file = this.fileInput.current.files[0]
        let reader = new FileReader();
        reader.onload = e => {
            console.log(e.target.result)
            let payload = {payload:e.target.result}
            axios.post(`/api/savePicture`, payload).then( response => {
                console.log(response)
            })
        }
        reader.readAsDataURL(file)
    }
    render() {
        console.log('file input ref: ', this.fileInput)
        return (
            <input onDrop={(e) => {
                console.log('hit div')
                this.props.handleDrop(e)}
                }
                onDragEnter={e => this.props.handleDrag(e)}
                onDragOver={e => this.props.handleDrag(e)}
                className='dropzone'
                // onClick={}
                placeholder='Drop file here!'
                type='file'
                onChange={(e) => this.handleFile(e)}
                ref={this.fileInput}
                />
                // {/* <input type='file' onChange={(e) => this.props.callbackFn(e.target.value)}/> */}
            
        );
    }
}

export default Dropzone;