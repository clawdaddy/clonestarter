import React from 'react';
import './../Splash/Splash.css';

function Categories(props){
    let {categories, callbackFn, currentCategory} = props;
    return(
        <div>
            {
                categories.map( (category, i, arr) => {
                    let buttonStyle = category === currentCategory
                        ?'categoryButtonSelected'
                        :'categoryButton'
                    return(
                        <button className={buttonStyle}key={category} onClick={() =>callbackFn(category)}>{category}</button>
                    )
                })
            }
        </div>
    )
}
export default Categories;