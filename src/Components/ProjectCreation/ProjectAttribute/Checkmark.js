import React, { Component } from 'react';

const style = {
    display:'flex',
    alignItems:'center'
}
class Checkmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked:props.checked
        }
    }
    
    render() {
        return (
            <div style={style}>
                <input 
                    type='checkbox' 
                    checked={this.props.checked}
                    value={this.props.checked}
                    onChange={(e) => this.props.callbackFn(!this.props.checked)}
                />
                <p>{this.props.condition}</p>
            </div>
        );
    }
    
}
export default Checkmark