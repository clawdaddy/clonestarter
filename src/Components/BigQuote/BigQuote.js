import React from 'react';

function BigQuote(props){
    const {quote, name, title, link} = props.bigQuote;
    return(
        <div>
            <a href={link}><p>{quote}</p></a>
            <p>{title} {name} IN <a href='https://thecreativeindependent.com/?ref=ksr_home'>THE CREATIVE INDEPENDENT</a>, A KICKSTARTER-PUBLISHED RESOURCE FOR CREATIVE PEOPLE</p>
        </div>
    )
}

export default BigQuote;