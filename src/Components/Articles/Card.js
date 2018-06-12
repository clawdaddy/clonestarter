import React, {Component} from 'react';
import loremIpsum from 'lorem-ipsum';
import FaLongArrowRight from 'react-icons/lib/fa/long-arrow-right';

class BigCard extends Component{
    constructor(props){
        super(props);
        this.state={
            description:loremIpsum({
                count:1,
                units: 'sentences',
                sentenceLowerBound:10,
                sentenceUpperBound:16
            }),
            image:'http://via.placeholder.com/800x800',
            sourceName:'google',
            sourceUrl:'https://google.com'
        }
    }
    render(){
        const { description, image, sourceName, sourceUrl} = this.state;
        const { cardType } = this.props;
        return(
            <a className={`card ${cardType}`} href={sourceUrl}>
                <img className={`card-image ${cardType}-image`}src={image}/>
                <div>
                    <p>{description}</p>
                    <p>READ ON {sourceName.toUpperCase()} <FaLongArrowRight/></p>
                </div>
            </a>
        )
    }
}
export default BigCard;