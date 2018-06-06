import React, { Component } from 'react';
import Link from 'react-router-dom';
import FaSearch from 'react-icons/lib/fa/search';
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
                <div className='filler-left'></div>
                <div className='left-nav'>
                    <p>
                        Explore
                    </p>
                    <p>
                        Start <span className='nav-hide'>a project</span>
                    </p>
                </div>
                <h1 className='logo'>CLONESTARTER</h1>
                <div className='filler-mid'></div>
                <div className='right-nav'>
                    <p className='nav-hide'>
                        Search  
                    </p>
                    <FaSearch/>
                    <p>
                        Sign in
                    </p>
                </div>
                <div className='filler-right'></div>
            </div>
        )
    }
}

export default Nav;