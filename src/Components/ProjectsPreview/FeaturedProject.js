import React from 'react';
import './../Splash/Splash.css';

function FeaturedProject(props){
    const { featured } = props;
    return(
        <div className='featured-image-container'>
            <p>FEATURED PROJECT</p>
            <div >
                <img className='featured-image' src={featured.img} alt={featured.title}/>
                <p>{featured.title}</p>
                <p>BY {featured.creator.toUpperCase()}</p>
                <p>{featured.funded.toUpperCase()}</p>
            </div>
            
        </div>
    )
}
export default FeaturedProject;