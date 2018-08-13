import React from 'react';
import './../Splash/Splash.css';

function FooterCategories (props){
    const { list, classname, head, textclass, headID } = props;
    
    return(
        <div className={classname}>
            <p className='footer-head' id={headID}>{head}</p>
            {
                list.map( item=> <a href={item.link} 
                    key={`${classname}-${item.name}`}
                    className={textclass}
                    >
                        {item.name}
                    </a>)
            }
        </div>
    )
}
export default FooterCategories;