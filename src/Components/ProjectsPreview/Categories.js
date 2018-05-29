import React from 'react';
import './../Splash/Splash.css';

function Categories(props){
    let {categories, callbackFn, currentCategory} = props;
    return(
        <div className='main-categories'>
            {
                categories.map( (category, i, arr) => {
                    let buttonStyle = category === currentCategory
                        ?'selected'
                        :''
                    return(
                        <button id={buttonStyle} className='category-button' key={category} onClick={() =>callbackFn(category)}>{category}</button>
                    )
                })
            }
        </div>
    )
}
export default Categories;