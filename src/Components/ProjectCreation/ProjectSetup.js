//ProjectSetup is the page that a user uses to setup the basics of a project--category, project idea, and eligibility. It will have a nested component inside of it that actually renders the information and inputs for a page. 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { selectCategory } from './../../dux/projectCreationReducer';
import DropdownSelector from './ProjectAttribute/DropdownSelector';
import PageOne from './ProjectSetup/SetupTemplate/PageOne';
import PageTwo from './ProjectSetup/SetupTemplate/PageTwo';
import PageThree from './ProjectSetup/SetupTemplate/PageThree';
import axios from 'axios';

function mapStateToProps(state) {
    return {
        category:state.category
    };
}

class ProjectSetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage:+props.match.params.page,
            pages:[
                {
                    number:1,
                    header:"First, let's get you set up.",
                    subheader:"Pick a project category to connect with a specific community. You can always update this later.",
                    backText:'Welcome.',
                    back:false,
                    nextText:'Next: Project idea',
                    nextUrl:props.match.url + '/2',
                    
                },
                {
                    number:2,
                    header:"Describe what you’ll be creating.",
                    subheader:"And don’t worry, you can edit this later, too.",
                    backText:'Category',
                    backUrl:props.match.url + '/1',
                    back:true,
                    nextText:"Next: Location",
                    nextUrl:props.match.url+'/3',
                    
                },
                {
                    number:3,
                    header:"Finally, let’s confirm your eligibility.",
                    subheader:"Tell us where you’re based and confirm a few other details before we proceed.",
                    backText:'Project idea',
                    backUrl:props.match.url + '/2',
                    back:true,
                    nextText:'Continue',
                    nextUrl:'/projectCreate/overview',

                }
            ]
        }
    }
    componentDidMount(){
        axios.get('/auth/me').then( response => {
            console.log('setup response', response.status)
            if (response.status === 401){
                this.props.history.push('/login')
            }
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.match.params.page !== this.props.match.params.page){
            this.setState({currentPage:this.props.match.params.page})
        }
    }
    handleNextPage = (num) => {
        this.setState( prevState => {return {currentPage:prevState.currentPage+num}})
    }
    render() {
        let current = this.state.pages[this.state.currentPage -1]
        return (
            <div>
                
                {/* this was an attempt to use an array to determine which components was displaying. Unfortunately, I couldn't figure out a way to make the DropdownSelector update when redux attaches new props to this component.
                <p>{current.number} of 3</p>
                <div>
                    <h2>{current.header}</h2>
                    <p>{current.subheader}</p>
                    {current.inputs}
                    <p>{current.backText}</p>
                    <button>{current.nextText}</button>
                </div> */}
                
                
                {/* this came from when I was experimenting with the dropdown selector to see if this version still worked even while the version in the array did not. This version worked well, but the other didn't.
                <DropdownSelector 
                            placeholder='Select your category'
                            selected={this.props.category}
                            options={['an option','a second option','a third','a fourth','a fifth','a sixth','a seventh','an eighth','a ninth', 'a tenth','an eleventh','a twelfth']}
                            callbackFn={this.props.selectCategory}
                        /> */}
                {/* <PageOne/> */}
                <h2>{current.header}</h2>
                <p>{current.subheader}</p>
                <Switch>
                    <Route path={'/projectCreate/setup/1'} component={PageOne}/>
                    <Route path={'/projectCreate/setup/2'} component={PageTwo}/>
                    <Route path={'/projectCreate/setup/3'} component={PageThree}/>
                    <Redirect from={'/projectCreate/setup/4'} to='/projectCreate/overview'/>
                </Switch>
                {/* 
                I commented out the code following this statement because I realized it would be easier to handle the page changes from inside each page component. I was trying to be clever before, but this way works much better.
                {
                    current.back
                    ?   <Link 
                            to={'/projectCreate/setup/'+( +this.state.currentPage-1)} 
                            // onClick={() => this.handleNextPage(-1)}
                        >
                        {current.backText}
                    </Link>
                    : <p>{current.backText}</p>
                } */}
                {/* <Link to={'/projectCreate/setup/'+ (+this.state.currentPage+1)}>
                    <button 
                        // onClick={() => this.handleNextPage(1)}
                    >
                        {current.nextText}
                    </button>
                </Link> */}
            </div>
        );
    }
}

const actions = {
    selectCategory
}

export default connect(
    mapStateToProps,
    actions
)(ProjectSetup);