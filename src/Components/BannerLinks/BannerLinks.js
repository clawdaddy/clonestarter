import React from 'react';
import './../Splash/Splash.css';

function BannerLinks (props){
    return(
        <div className='banners'>
            <div className='go-green'>
                <span className='green-header'>Go Green</span>
                <span className='green-sentence'>Discover projects helping to build a more sustainable future.</span>
            </div>
            <div className='drip'>
                <div>
                    <svg className='drop-svg'xmlns='http://www.w3.org/2000/svg'/>
                </div>
            </div>
        </div>
    )
}
export default BannerLinks;