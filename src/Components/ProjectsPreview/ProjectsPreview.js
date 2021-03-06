import React, {Component} from 'react';
import Categories from './Categories';
import FeaturedProject from './FeaturedProject';
import SideCategories from './SideCategories';
import FaLongArrowRight from 'react-icons/lib/fa/long-arrow-right';
import loremIpsum from 'lorem-ipsum';

class ProjectsPreview extends Component {
    constructor(){
        super();
        this.state = {
            categories:
            [
                'Food & Craft', 
                'Comics & Illustration', 
                'Publishing', 
                'Games', 
                'Design & Tech', 
                'Music', 
                'Arts', 
                'Film'
            ],
            currentCategory:'Food & Craft',
            categoryData:
            [
                {
                    name:'Food & Craft',
                    featured:
                    // {
                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg/532px-Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg',
                    //     title:'Making metal with metal',
                    //     creator:'Francisco Goya',
                    //     funded:'1% funded'
                    // },
                    {
                        img:'http://via.placeholder.com/500x500',
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
                    subcategories:
                    [
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'NEW & NOTEWORTHY'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'POPULAR'
                        }
                    ]
                },
                {
                    name:'Design & Tech',
                    featured:
                    // {
                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg/532px-Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg',
                    //     title:'Making metal with metal',
                    //     creator:'Francisco Goya',
                    //     funded:'1% funded'
                    // },
                    {
                        img:'http://via.placeholder.com/500x500',
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
                    subcategories:
                    [
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'NEW & NOTEWORTHY'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'ALMOST THERE'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'POPULAR'
                        }
                    ]
                },
                {
                    name:'Publishing',
                    featured:
                    // {
                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg/532px-Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg',
                    //     title:'Making metal with metal',
                    //     creator:'Francisco Goya',
                    //     funded:'1% funded'
                    // },
                    {
                        img:'http://via.placeholder.com/500x500',
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
                    subcategories:
                    [
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'NEW & NOTEWORTHY'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'ALMOST THERE'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'POPULAR'
                        }
                    ]
                },
                {
                    name:'Arts',
                    featured:
                    // {
                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg/532px-Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg',
                    //     title:'Making metal with metal',
                    //     creator:'Francisco Goya',
                    //     funded:'1% funded'
                    // },
                    {
                        img:'http://via.placeholder.com/500x500',
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
                    subcategories:
                    [
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'NEW & NOTEWORTHY'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'ALMOST THERE'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'POPULAR'
                        }
                    ]
                },
                {
                    name:'Comics & Illustration',
                    featured:
                    // {
                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg/532px-Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg',
                    //     title:'Making metal with metal',
                    //     creator:'Francisco Goya',
                    //     funded:'1% funded'
                    // },
                    {
                        img:'http://via.placeholder.com/500x500',
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
                    subcategories:
                    [
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'NEW & NOTEWORTHY'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'ALMOST THERE'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'POPULAR'
                        }
                    ]
                },
                {
                    name:'Games',
                    featured:
                    // {
                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg/532px-Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg',
                    //     title:'Making metal with metal',
                    //     creator:'Francisco Goya',
                    //     funded:'1% funded'
                    // },
                    {
                        img:'http://via.placeholder.com/500x500',
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
                    subcategories:
                    [
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'NEW & NOTEWORTHY'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'ALMOST THERE'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'POPULAR'
                        }
                    ]
                },
                {
                    name:'Music',
                    featured:
                    // {
                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg/532px-Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg',
                    //     title:'Making metal with metal',
                    //     creator:'Francisco Goya',
                    //     funded:'1% funded'
                    // },
                    {
                        img:'http://via.placeholder.com/500x500',
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
                    subcategories:
                    [
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'NEW & NOTEWORTHY'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'ALMOST THERE'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'POPULAR'
                        }
                    ]
                },
                {
                    name:'Film',
                    featured:
                    // {
                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg/532px-Francisco_Goya_y_Lucientes%2C_de_-_La_fragua_-_Google_Art_Project.jpg',
                    //     title:'Making metal with metal',
                    //     creator:'Francisco Goya',
                    //     funded:'1% funded'
                    // },
                    {
                        img:'http://via.placeholder.com/500x500',
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
                    subcategories:
                    [
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'NEW & NOTEWORTHY'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'ALMOST THERE'
                        },
                        {
                            projects:
                                [
                                    {
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                        img:'http://via.placeholder.com/208x117',
                                        title:loremIpsum({
                                            count:1,
                                            units:'sentences',
                                            sentenceLowerBound:5,
                                            sentenceUpperBound:8
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
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ansdell_Richard_The_Blacksmiths_Shop.jpg',
                                    //     title:'Sneakers for Horses',
                                    //     creator:'Richard Ansdell',
                                    //     funded:'25% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Baskets_four_styles.jpg',
                                    //     title:'Weaving things to hold stuff',
                                    //     creator:'Jeremy Kemp',
                                    //     funded:'400% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Homemade_Christmas_Tree_%286536398863%29.jpg/1024px-Homemade_Christmas_Tree_%286536398863%29.jpg',
                                    //     title:'A tree made of dead trees',
                                    //     creator:'John Morgan',
                                    //     funded:'10,000% funded'
                                    // },
                                    // {
                                    //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Build_a_paper_Airplane_step_6.JPG/1024px-Build_a_paper_Airplane_step_6.JPG',
                                    //     title:'Lightweight Aerospace Vehicle',
                                    //     creator:'ABF',
                                    //     funded:'34% funded'
                                    // }
                                ],
                            name:'POPULAR'
                        }
                    ]
                }
            ]
        }
        this.selectCategory = this.selectCategory.bind(this);
    }
    componentDidMount(){

    }
    selectCategory (category) {
        this.setState({
            currentCategory:category
        })
    }
    render(){
        const {categories, currentCategory, categoryData} = this.state;
        return(
            <div className='projects-preview'>
                <Categories
                    categories = {categoryData.map( category => category.name)}
                    callbackFn = {this.selectCategory}
                    currentCategory = {currentCategory}
                    categoryClass = 'category-button'
                />
                <div className='current-category-set'>
                    <h2 className='current-category'>{currentCategory} </h2>
                    <div className='view-all-set'>
                        <button className='view-all'>VIEW ALL <FaLongArrowRight/> </button>
                    </div>
                </div>
                <FeaturedProject
                    featured = {categoryData.filter( category => category.name === currentCategory)[0].featured}
                />
                <SideCategories
                    categories = {categoryData.filter( category => category.name === currentCategory)[0].subcategories}
                    categoryName = {currentCategory}
                />
            </div>
        )
    }
}

export default ProjectsPreview;