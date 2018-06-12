import React from 'react';
import Card from './Card';

function Articles (props){
    return(
        <div>
            <h2>What we're reading</h2>
            <div className='article-grid-container'>
                <Card
                    cardType='big-card'
                />
                <Card
                    cardType='big-card'
                />
                <Card
                    cardType='big-card'
                />
                <Card
                    cardType='small-card'
                />
                <Card
                    cardType='small-card'
                />
                <Card
                    cardType='small-card'
                />
            </div>
        </div>
    )
}
export default Articles;