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
                <div className='snippet-image-container'>
                    <img src={img} alt={title} className='snippet-image'/>
                </div>
                <div className='snippet-text'>
                    <p className='snippet-title'>{title}</p>
                    <p className='snippet-funded'>{funded}</p>
                </div>
            </div>
            <div >
                <FaHeartO style={heartStyle}/>
            </div>
        </div>
    )
}
export default CategorySnippet;