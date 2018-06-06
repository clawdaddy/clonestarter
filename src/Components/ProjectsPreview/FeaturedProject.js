import React from 'react';
import './../Splash/Splash.css';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import ImageBox from './../ImageBox';

function FeaturedProject(props){
    const { featured } = props;
    const heartStyle = {
        height:'13px',
        width:'13px',
        marginBottom:'5px'
    }
    return(
        <div className='featured-image-container'>
            <p>FEATURED PROJECT</p>
            <div>
                <ImageBox
                    featured = {featured}
                />
                <div className='featured-text'>
                    <p>{featured.title}</p>
                    <p>BY {featured.creator.toUpperCase()}</p>
                    <p>{featured.funded.toUpperCase()}</p>
                </div>
            </div>
            
        </div>
    )
}
export default FeaturedProject;