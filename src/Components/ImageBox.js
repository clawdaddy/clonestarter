import React from 'react'
import FaHeartO from 'react-icons/lib/fa/heart-o'
import './Splash/Splash.css'

function ImageBox(props){
    const {featured} = props;
    const heartStyle = {
        height:'13px',
        width:'13px',
        marginBottom:'5px'
    }
    return(
        <div className={`featured-image-box`}>
            <img className='featured-image' src={featured.img} alt={featured.title}/>
            <div className='featured-image-heart'>
                <button className='featured-heart'><FaHeartO style={heartStyle}/></button>
            </div>
        </div>
    )
}
export default ImageBox;