import React, {Component} from 'react';
import Stats from './../Stats/Stats';
import ProjectsPreview from './../ProjectsPreview/ProjectsPreview';
import ProjectsWeLove from './../ProjectsWeLove/ProjectsWeLove';
import BigQuote from './../BigQuote/BigQuote';
import BannerLinks from '../BannerLinks/BannerLinks';
import Articles from '../Articles/Articles';
import Footer from './../Footer/Footer';
import Subscribe from './../Subscribe/Subscribe';
import loremIpsum from 'lorem-ipsum';

class Splash extends Component {
    constructor(){
        super();
        this.state = {
            projectsWeLove:
            {
                // projects:
                // [
                //     {
                //         img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                //         title:'Sneakers for Horses',
                //         creator:'Richard Ansdell',
                //         funded:'25% funded',
                //         description:'No one thought it could be done, but then this guy decided to make shoes for horses'
                //     },
                //     {
                //         img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                //         title:'Weaving things to hold stuff',
                //         creator:'Jeremy Kemp',
                //         funded:'400% funded',
                //         description:'These nifty contraptions help you carry your stuff. I know! I want one too!'
                //     },
                //     {
                //         img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                //         title:'A tree made of dead trees',
                //         creator:'John Morgan',
                //         funded:'10,000% funded',
                //         description:'This is a tree made out of dead trees residing in a small tree. Sounds a little morbid when you put it like that, eh?'
                //     },
                //     {
                //         img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                //         title:'Lightweight Aerospace Vehicle',
                //         creator:'ABF',
                //         funded:'34% funded',
                //         description:'Ever wanted to launch a lego astronaut across the room but lacked an aerodynamic vehicle to carry him? Well I\'ve got exciting news for you. '
                //     }
                // ],
                // name:'NEW & NOTEWORTHY'
                projects:[
                    {
                        img:'http://via.placeholder.com/352x198',
                        title:loremIpsum({
                            count:1,
                            units:'sentences',
                            sentenceLowerBound:8,
                            sentenceUpperBound:15
                        }),
                        creator:loremIpsum({
                            count:3,
                            units:'words'
                        }),
                        funded:`${Math.floor(100*Math.random())}% funded`,
                        description:loremIpsum({
                            count:1,
                            units:'sentences',
                            sentenceLowerBound:15,
                            sentenceUpperBound:25
                        })
                    },
                    {
                        img:'http://via.placeholder.com/352x198',
                        title:loremIpsum({
                            count:1,
                            units:'sentences',
                            sentenceLowerBound:8,
                            sentenceUpperBound:15
                        }),
                        creator:loremIpsum({
                            count:3,
                            units:'words'
                        }),
                        funded:`${Math.floor(100*Math.random())}% funded`,
                        description:loremIpsum({
                            count:1,
                            units:'sentences',
                            sentenceLowerBound:15,
                            sentenceUpperBound:25
                        })
                    },
                    {
                        img:'http://via.placeholder.com/352x198',
                        title:loremIpsum({
                            count:1,
                            units:'sentences',
                            sentenceLowerBound:8,
                            sentenceUpperBound:15
                        }),
                        creator:loremIpsum({
                            count:3,
                            units:'words'
                        }),
                        funded:`${Math.floor(100*Math.random())}% funded`,
                        description:loremIpsum({
                            count:1,
                            units:'sentences',
                            sentenceLowerBound:15,
                            sentenceUpperBound:25
                        })
                    },
                    {
                        img:'http://via.placeholder.com/352x198',
                        title:loremIpsum({
                            count:1,
                            units:'sentences',
                            sentenceLowerBound:8,
                            sentenceUpperBound:15
                        }),
                        creator:loremIpsum({
                            count:3,
                            units:'words'
                        }),
                        funded:`${Math.floor(100*Math.random())}% funded`,
                        description:loremIpsum({
                            count:1,
                            units:'sentences',
                            sentenceLowerBound:15,
                            sentenceUpperBound:25
                        })
                    },
                ]
            },
            bigQuote:{
                quote:'"Projects have a life of their own. You make something, but it\'ll tell you what it is."',
                title:'PHOTOGRAPHER & DIRECTOR',
                name:'OLIVIA BEE',
                link:'https://thecreativeindependent.com/people/olivia-bee-on-finding-the-right-balance/?ref=ksr_home'
            }
        }
    }


    render(){
        const {projects} = this.state.projectsWeLove;
        const {bigQuote} = this.state;
        return(
            <div>
                <Stats/>
                <ProjectsPreview/>
                <ProjectsWeLove 
                    projects = {projects}
                />
                <BigQuote
                    bigQuote = {bigQuote}
                />
                <BannerLinks/>
                <Articles/>
                <Subscribe/>
                <Footer/>
            </div>

        )
    }
}

export default Splash;