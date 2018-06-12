import React, { Component } from 'react';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play';
import FooterDropdown from './FooterIconsEtc/FooterDropdown';
import './../Splash/Splash.css';

class FooterIconsEtc extends Component{

    render(){
        return(
        <div className='footer-icons-etc'>
            <div className='footer-company'>
                <p className='footer-logo'>C</p>
                <p> Clonestarter</p>
            </div>
            <div className='footer-icons-dropdowns'>
                <FaFacebookOfficial/>
                <FaInstagram/>
                <FaTwitter/>
                <FaYoutubePlay/>
                <FooterDropdown/>
                <FooterDropdown/>
            </div>
        </div>
        )
    }
}
export default FooterIconsEtc;