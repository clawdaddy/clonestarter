import React, {Component} from 'react';
import Stats from './../Stats/Stats';
import ProjectsPreview from './../ProjectsPreview/ProjectsPreview';
import ProjectsWeLove from './../ProjectsWeLove/ProjectsWeLove';
import FeaturedProject from './../FeaturedProject/FeaturedProject';
import BannerLinks from '../BannerLinks/BannerLinks';
import Articles from '../Articles/Articles';
import Footer from './../Footer/Footer';
import Subscribe from './../Subscribe/Subscribe';

class Splash extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }


    render(){

        return(
            <div>splash
                <Stats/>
                <ProjectsPreview/>
                <ProjectsWeLove/>
                <FeaturedProject/>
                <BannerLinks/>
                <Articles/>
                <Subscribe/>
                <Footer/>
            </div>

        )
    }
}

export default Splash;