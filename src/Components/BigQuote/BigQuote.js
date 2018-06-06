import React from 'react';
import FaLongArrowRight from 'react-icons/lib/fa/long-arrow-right';

function BigQuote(props){
    const {quote, name, title, link} = props.bigQuote;
    return(
        <div className='big-quote'>
            <a  className = 'big-quote-pic' href={link}>
                <img className = 'big-quote-pic'src='https://d3mlfyygrfdi2i.cloudfront.net/tci-swirl.png'/>
            </a>
            <a className='big-quote-quote' href={link}>
                <h1 className='big-quote-quote'>{quote}</h1>
            </a>
            <p className = 'big-quote-signature'>{title} {name} IN <a href='https://thecreativeindependent.com/?ref=ksr_home'>THE CREATIVE INDEPENDENT</a>, A KICKSTARTER-PUBLISHED RESOURCE FOR CREATIVE PEOPLE</p>
            <a href={link} className='big-quote-read'><p>READ MORE</p> <FaLongArrowRight/></a>
        </div>
    )
}

export default BigQuote;