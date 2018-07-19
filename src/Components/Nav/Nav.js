import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <a>
                        Explore
                    </a>
                    <Link to='/projectCreate/setup/1'>
                        Start <span className='nav-hide'>a project</span>
                    </Link>
                </div>
                <h1 className='logo'>CLONESTARTER</h1>
                <div className='filler-mid'></div>
                <div className='right-nav'>
                    <a className='nav-hide'>
                        Search   <FaSearch/>
                    </a>
                   <a className='nav-hide-2'> <FaSearch/></a>
                    <a>
                        Sign in
                    </a>
                </div>
                <div className='filler-right'></div>
            </div>
        )
    }
}

export default Nav;