import React, { Component } from 'react';
import Link from 'react-router-dom';
import './../Splash/Splash.css';

class Nav extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){

        return(
            <div className='nav'>
                <div className='left-nav'>
                    <p>
                        Explore
                    </p>
                    <p>
                        Start a project
                    </p>
                </div>
                <h1 className='logo'>KICKSTARTER</h1>
                <div className='right-nav'>
                    <p>
                        Search
                    </p>
                    <p>
                        Sign in
                    </p>
                </div>
            </div>
        )
    }
}

export default Nav;