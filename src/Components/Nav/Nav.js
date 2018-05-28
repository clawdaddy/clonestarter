import React, { Component } from 'react';
import Link from 'react-router-dom';
import './../Splash/Splash';

class Nav extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){

        return(
            <div>
                <p className='nav'>
                    Explore
                </p>
                <p>
                    Start a project
                </p>
            </div>
        )
    }
}

export default Nav;