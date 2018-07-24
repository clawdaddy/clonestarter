import React, { Component } from 'react';
import DropdownSelector from './../ProjectAttribute/DropdownSelector';
import LocationSelector from './../ProjectAttribute/LocationSelector';
import CharacterLimitInput from './../ProjectAttribute/CharacterLimitInput';
import Dropzone from './../ProjectAttribute/Dropzone';
import DollarInput from './../ProjectAttribute/DollarInput';
import EditSection from './EditSection';
import RegularInput from './../ProjectAttribute/RegularInput';
import { connect } from 'react-redux';
import { setTitle, selectCategory, setBlurb, selectSubcategory, setGoal } from './../../../dux/projectCreationReducer';


function mapStateToProps( state ){
    const { category, subcategory, projectLocation, fundingDuration, fundingEndDate, fundingGoal, shortBlurb, projectTitle, projectImage } = state
    return { category, subcategory, projectLocation, fundingDuration, fundingEndDate, fundingGoal, shortBlurb, projectTitle, projectImage }
}
const actions = {
    setTitle,
    selectCategory,
    setBlurb,
    selectSubcategory,
    setGoal
}

class Basics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subcategoryOptions:['']
        }
        this.styles = {
            container:{
                display:'flex',
            },
            editContainers:{
                display:'flex',
                flexDirection:'column'
            },
            tips:{
                display:'flex',
                flexDirection:'column'
            }
        }
    }
    componentDidMount(){
        this.getSubcategories()
    }
    getSubcategories(){
        let subcategoryOptions;
            switch(this.props.category){
                case 'Art':
                    subcategoryOptions = [
                        'Ceramics',
                        'Conceptual Art',
                        'Digital Art',
                        'Illustration',
                        'Mixed Media',
                        'Painting',
                        'Performance Art',
                        'Public Art'
                    ];
                    break;
                case 'Comics':
                    subcategoryOptions = [
                        'Anthologies',
                        'Comic Books',
                        'Events',
                        'Graphic Novels',
                        'Webcomics'
                    ];
                    break;
                case 'Crafts':
                    subcategoryOptions = [
                        'Candles',
                        'Crochet',
                        'DIY',
                        'Embroidery',
                        'Glass',
                        'Knitting',
                        'Pottery',
                        'Printing',
                        'Quilts',
                        'Stationery',
                        'Taxidermy',
                        'Weaving'
                    ];
                    break;
                case 'Dance':
                    subcategoryOptions = [
                        'Performances',
                        'Residencies',
                        'Spaces',
                        'Workshops'
                    ];
                    break;
                case 'Design':
                    subcategoryOptions = [
                        'Architecture',
                        'Civic Design',
                        'Graphic Design',
                        'Interactive Design',
                        'Product Design',
                        'Typography'
                    ];
                    break;
                case 'Fashion':
                    subcategoryOptions = [
                        'Accessories',
                        'Apparel',
                        'Childrenswear',
                        'Couture',
                        'Footware',
                        'Jewelry',
                        'Pet Fashion',
                        'Ready-to-wear'
                    ];
                    break;
                case 'Film & Video': 
                    subcategoryOptions = [
                        'Action',
                        'Animation',
                        'Comedy',
                        'Documentary',
                        'Drama',
                        'Experimental',
                        'Family',
                        'Fantasy',
                        'Festivals',
                        'Horror',
                        'Movie Theaters',
                        'Music Videos',
                        'Narrative Film',
                        'Romance',
                        'Science Fiction',
                        'Shorts',
                        'Television',
                        'Thrillers',
                        'Webseries'
                    ];
                    break;
                case 'Food':
                    subcategoryOptions = [
                        'Bacon',
                        'Community Gardens',
                        'Cookbooks',
                        'Drinks',
                        'Events',
                        "Farmer's Markets",
                        'Farms',
                        'Food Trucks',
                        'Restaurants',
                        'Small Batch',
                        'Spaces',
                        'Vegan'
                    ];
                    break;
                case 'Games':
                    subcategoryOptions = [
                        'Gaming Hardware',
                        'Live Games',
                        'Mobile Games',
                        'Playing Cards',
                        'Puzzles',
                        'Tabletop Games',
                        'Video Games'
                    ];
                    break;
                case 'Journalism':
                    subcategoryOptions = [
                        'Audio',
                        'Photo',
                        'Print',
                        'Video',
                        'Web'
                    ];
                    break;
                case 'Music':
                    subcategoryOptions = [
                        'Blues',
                        'Chiptune',
                        'Classical Music',
                        'Comedy',
                        'Country & Folk',
                        'Electronic Music',
                        'Faith',
                        'Hip-Hop',
                        'Indie Rock',
                        'Jazz',
                        'Kids',
                        'Latin',
                        'Metal',
                        'Pop',
                        'Punk',
                        'R&B',
                        'Rock',
                        'World Music'
                    ];
                    break;
                case 'Photography':
                    subcategoryOptions = [
                        'Animals',
                        'Fine Art',
                        'Nature',
                        'People',
                        'Photobooks',
                        'Places'
                    ];
                    break;
                case 'Publishing':
                    subcategoryOptions = [
                        'Academic',
                        'Anthologies',
                        'Art Books',
                        'Calendars',
                        "Children's Books",
                        'Comedy',
                        'Fiction',
                        'Letterpress',
                        'Literary Journals',
                        'Literary Spaces',
                        'Nonfiction',
                        'Periodicals',
                        'Poetry',
                        'Radio & Podcasts',
                        'Translations',
                        'Young Adult',
                        'Zines'
                    ];
                    break;
                case 'Technology':
                    subcategoryOptions = [
                        '3d Printing',
                        'Apps',
                        'Camera Equipment',
                        'DIY Electronics',
                        'Fabrication Tools',
                        'Flight',
                        'Gadgets',
                        'Hardware',
                        'Makerspaces',
                        'Robots',
                        'Software',
                        'Sound',
                        'Space Exploration',
                        'Wearables',
                        'Web'
                    ];
                    break;
                case 'Theater':
                    subcategoryOptions = [
                        'Comedy',
                        'Experimental',
                        'Festivals',
                        'Immersive',
                        'Musical',
                        'Plays',
                        'Spaces'
                    ]
                default:
                    subcategoryOptions = ['']
            }
            this.props.selectSubcategory('')
            this.setState({
                subcategoryOptions
            })
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.category !== this.props.category){
            this.getSubcategories()
        }

    }
    
    render() {
        return (
            <div style={this.styles.container}>
                <div style={this.styles.editContainers}>
                    <EditSection
                        title='Project image'
                        inputs={
                            [
                                <p key='image'>dropbox goes here</p>
                            ]
                        }
                    
                    />
                    <EditSection
                        title='Project title'
                        inputs={
                            [
                                <CharacterLimitInput
                                    characters='60'
                                    value={this.props.projectTitle}
                                    callbackFn={this.props.setTitle}
                                    key='project-title'
                                />,
                                <p key='project-title-explain'>Our search looks through words from your project title and blurb, so make them clear and descriptive of what you’re making. Your profile name will be searchable, too.

                                These words will help people find your project, so choose them wisely! Your name will be searchable too.</p>
                            ]
                        }
                    />
                    <EditSection
                        title='Short blurb'
                        inputs={
                            [
                                <CharacterLimitInput
                                    characters='135'
                                    value={this.props.shortBlurb}
                                    callbackFn={this.props.setBlurb}
                                    key='short-blurb'
                                />,
                                <p key='short-blurb-explain'>Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making.</p>
                            ]
                        }
                    />
                    <EditSection
                        title='Category'
                        inputs={
                            [
                                <DropdownSelector
                                    options={[
                                        'Art',
                                        'Comics',
                                        'Crafts',
                                        'Dance',
                                        'Design',
                                        'Fashion',
                                        'Film & Video',
                                        'Food',
                                        'Games',
                                        'Journalism',
                                        'Music',
                                        'Photography',
                                        'Publishing',
                                        'Technology',
                                        'Theater'
                                    ]}
                                    selected={this.props.category}
                                    placeholder='Select a category'
                                    callbackFn={this.props.selectCategory}
                                    key='select-category'
                                />,
                                <DropdownSelector
                                    options={this.state.subcategoryOptions}
                                    selected={this.props.subcategory}
                                    placeholder='Subcategory (optional)'
                                    callbackFn={
                                        this.props.selectSubcategory
                                    }
                                    key='select-subcategory'
                                />
                            ]
                        }
                    
                    />
                    <EditSection
                        title='Project location'
                        inputs={
                            [
                                <p key='location'> project location input goes here</p>
                            ]
                        }
                    />
                    <EditSection
                        title='Funding duration'
                        inputs={
                            [
                                <p key='funding'> funding duration inputs go here</p>
                            ]
                        }
                    />
                    <EditSection
                        title='Funding goal'
                        inputs={
                            [
                                <RegularInput
                                    value={this.props.fundingGoal}
                                    callbackFn={this.props.setGoal}
                                />
                            ]
                        }
                    />
                </div>
                <div style={this.styles.tips}>
                    tips
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, actions)(Basics);