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
    login = () => {
        let redirecturi = encodeURIComponent(`${window.location.origin}/auth/callback`)
        console.log(redirecturi)
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirecturi}&response_type=code`
    }
    render(){

        return(
            <div className='nav'>
                <div className='filler-left'></div>
                <div className='left-nav'>
                    <a>
                        Explore
                    </a>
                    <Link 
                        to='/projectCreate/setup/1'
                    >
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
                    <a onClick={this.login}>
                        Sign in
                    </a>
                </div>
                <div className='filler-right'></div>
            </div>
        )
    }
}

export default Nav;