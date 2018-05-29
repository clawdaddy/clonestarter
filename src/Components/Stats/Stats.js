import React, { Component } from 'react';

function Stats(props){

    return(
        <div className='stats'>
            <div className='stats-grid-container'>
                <div className='stats-content'>
                    <p>May 29, 2018</p>
                    <p>Bringing creative projects to life.</p>    
                </div>
                <div className='stats-content'>
                    <p>TOTAL BACKERS</p>
                    <p>A big ol' number</p>    
                </div>
                <div className='stats-content'>
                    <p>FUNDED PROJECTS</p>
                    <p>Another Big Number</p>    
                </div>
                <div className='stats-content'>
                    <p>LIVE PROJECTS</p>
                    <p>A number that is large but not so large as the others </p>    
                </div>
            </div>
        </div>
    )
}
export default Stats;