//The overview page is just a portal to summarize how much of a project has been submitted, and provides links to edit each section of a project. 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setProjectFromDB } from './../../dux/projectCreationReducer';
import OverviewTracker from './ProjectSetup/OverviewPage/OverviewTracker';

function mapStateToProps( state ) {
    const { category, country, projectId, shortBlurb, subcategory, projectImage, projectTitle, projectLocation, fundingDuration, fundingEndDate, fundingGoal, rewards} = state;
    return { category, country, projectId, shortBlurb, subcategory, projectImage, projectTitle, projectLocation, fundingDuration, fundingEndDate, fundingGoal, rewards }
}

const actions = {
    setProjectFromDB
}

class OverviewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            basicsText:'Done'
        }
    }
    
    componentDidMount(){
        if( !this.props.projectId || this.props.projectId !== this.props.match.params){
            axios.get(`/api/getProject/${this.props.match.params.id}`).then( result => {
                this.props.setProjectFromDB(result.data[0])
            })
        } else {
            this.makeOverviewTracker()
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        const { category, country, projectId, shortBlurb, subcategory, projectImage, projectTitle, projectLocation, fundingDuration, fundingEndDate, fundingGoal } = this.props;
        if( (prevProps.category !== category) ||
            (prevProps.country !== country) ||
            (prevProps.projectId !== projectId) ||
            (prevProps.shortBlurb !== shortBlurb) ||
            (prevProps.subcategory !== subcategory) ||
            (prevProps.projectImage !== projectImage) ||
            (prevProps.projectTitle !== projectTitle) ||
            (prevProps.projectLocation !== projectLocation) ||
            (prevProps.fundingDuration !== fundingDuration) ||
            (prevProps.fundingEndDate !== fundingEndDate) ||
            (prevProps.fundingGoal !==fundingGoal) &&
            (prevState.basicsText !== this.state.basicsText)
        ){

            this.makeOverviewTracker()
            // console.log((prevProps.category !== category) )
            console.log(prevProps.category, category)
            
        }
        
    }
    makeOverviewTracker = () => {
        const { category, country, projectId, shortBlurb, subcategory, projectImage, projectTitle, projectLocation, fundingDuration, fundingEndDate, fundingGoal, rewards } = this.props;
        let basicsArr = [
            {   value:projectImage, name:'image' }, 
            {   value:projectTitle, name:'title' },
            {   value:shortBlurb, name:'short blurb' },
            {   value:category,  name:'category' },
            {   value:projectLocation, name:'location' },
            {   value:fundingDuration, name:'funding duration' },
            {   value:fundingGoal, name: 'funding goal'}
        ];
        // let basicsText = this.makeOverviewTracker(basicsArr)
        let basicsText = basicsArr.filter( task => !task.value).map( (task,i,arr) => `Add a ${task.name}, `).reduce( (accumulator, current) => {return accumulator + current },'')
        // console.log(basicsText)
        if (basicsText){
            this.setState({
                basicsText
            })
        }
    }
    goToEditSection = ( url ) => {
        this.props.history.push(url)
    }
    render() {
        return (
            <div>
                {/* {this.props.category} */}
                <OverviewTracker 
                    title='Basics'
                    tasks={this.state.basicsText}
                    editSectionURL = '/projectCreate/edit/basics'
                    goToEditSection = {this.goToEditSection}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, actions)(OverviewPage);