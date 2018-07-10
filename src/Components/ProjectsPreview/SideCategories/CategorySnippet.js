import React from 'react';
import './../../Splash/Splash.css'
import FaHeartO from 'react-icons/lib/fa/heart-o'

const heartStyle = {
    height:'20px',
    width:'30px',
    color:'rgb(182, 185, 182)'
}

function CategorySnippet(props){
    const { img, title, funded } = props;
    return(
        <div className='snippet' >
            <div >
                <a className='snippet-image-container'>
                    <img src={img} alt={title} className='snippet-image'/>
                </a>
                <div className='snippet-text'>
                    <a className='snippet-title'>{title}</a>
                    <p className='snippet-funded'>{funded}</p>
                </div>
            </div>
            <div >
                <FaHeartO className='heart-icon'style={heartStyle}/>
            </div>
        </div>
    )
}
export default CategorySnippet;