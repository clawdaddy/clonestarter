import React, { Component } from 'react';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play';
import FooterDropdown from './FooterIconsEtc/FooterDropdown';
import DropdownSelector from './../ProjectCreation/ProjectAttribute/DropdownSelector';
import './../Splash/Splash.css';

class FooterIconsEtc extends Component{
    constructor(props) {
        super(props);
        this.state = {
            placeholder1selected:'',
            placeholder2selected:''
        }
    }
    
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
                <DropdownSelector
                    callbackFn={(selected) => this.setState({placeholder1selected:selected})}
                    placeholder='placeholder1'
                    options={['first option', 'second option']}
                    selected={this.state.placeholder1selected}
                />
                <DropdownSelector
                    callbackFn={(selected)=>this.setState({placeholder2selected:selected})}
                    placeholder='placeholder2'
                    options={['a first option', 'a second option']}
                    selected={this.state.placeholder2selected}
                />
                {/* <FooterDropdown/>
                <FooterDropdown/> */}
            </div>
        </div>
        )
    }
}
export default FooterIconsEtc;