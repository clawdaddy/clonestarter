import React, {Component} from 'react';

class Subscribe extends Component {
    constructor(){
        super();
        this.state = {
            emailInput:''
        }
    }

    render(){
        return(
            <div className='subscribe'>
                <h3 className='subscribe-header'>Subscribe to our weekly newsletter</h3>
                <p className='subscribe-sentence'>Sign up for Projects We Love to receive a weekly mix of noteworthy projects, handpicked by our team.</p>
                <input placeholder='Enter email address' className='subscribe-input'/>
                <button className='subscribe-button'>Subscribe now</button>
            </div>
        )
    }
}

export default Subscribe;