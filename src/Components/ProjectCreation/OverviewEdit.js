//The overview edit page is a wrapper for the EditField components. This page holds all the information and functionality that won't change  as different categories are selected.
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Basics from "./OverviewEdit/Basics";
import Rewards from "./OverviewEdit/Rewards";
import Story from "./OverviewEdit/Story";
import Profile from "./OverviewEdit/Profile";
import Account from "./OverviewEdit/Account";
import EditNav from "./OverviewEdit/EditNav";
import Preview from "./OverviewEdit/Preview";
import SaveProject from "./OverviewEdit/SaveProject";
import axios from "axios"; 
import { connect } from "react-redux";
import { setProjectFromDB } from "../../dux/projectCreationReducer";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./OverviewEdit.css";

function mapStateToProps(state) {
  const {
    category,
    subcategory,
    country,
    projectImage,
    projectTitle,
    shortBlurb,
    projectLocation,
    fundingDuration,
    fundingEndDate,
    fundingGoal,
    projectId,
    rewards,
    projectDescription,
    risksAndChallenges
  } = state;
  return {
    category,
    subcategory,
    country,
    projectImage,
    projectTitle,
    shortBlurb,
    projectLocation,
    fundingDuration,
    fundingEndDate,
    fundingGoal,
    projectId,
    rewards,
    projectDescription,
    risksAndChallenges
  };
}
const actions = {
  setProjectFromDB
};

class OverviewEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSave: false
    };
  }
  // componentDidMount(){
  //   if(!this.props.projectId){
  //     axios.get('/api/getCurrentProject').then( response => {
  //       this.props.setProjectFromDB(response.data[0])
  //     })
  //   }
  // }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.category !== this.props.category ||
      prevProps.subcategory !== this.props.subcategory ||
      prevProps.country !== this.props.country ||
      prevProps.projectImage !== this.props.projectImage ||
      prevProps.projectTitle !== this.props.projectTitle ||
      prevProps.shortBlurb !== this.props.shortBlurb ||
      prevProps.projectLocation !== this.props.projectLocation ||
      prevProps.fundingDuration !== this.props.fundingDuration ||
      prevProps.fundingEndDate !== this.props.fundingEndDate ||
      prevProps.fundingGoal !== this.props.fundingGoal ||
      prevProps.projectId !== this.props.projectId ||
      prevProps.rewards !== this.props.rewards ||
      prevProps.projectDescription !== this.props.projectDescription ||
      prevProps.projectVideo !== this.props.projectVideo ||
      prevProps.risksAndChallenges !== this.props.risksAndChallenges
    ) {
      this.setState({
        toggleSave: true
      });
    }
  }
  handleSave = () => {
    const {
      category,
      subcategory,
      country,
      projectImage,
      projectTitle,
      shortBlurb,
      projectLocation,
      fundingDuration,
      fundingEndDate,
      fundingGoal,
      projectId,
      rewards,
      projectDescription,
      projectVideo,
      risksAndChallenges
    } = this.props;
    console.log('id to server', projectId)
    axios
      .put(`/api/saveProject/${projectId}`, {
        category,
        subcategory,
        country,
        projectImage,
        projectTitle,
        shortBlurb,
        projectLocation,
        fundingDuration,
        fundingEndDate: fundingEndDate === 'Invalid date' ? null : fundingEndDate,
        fundingGoal,
        rewards,
        projectDescription,
        projectVideo,
        risksAndChallenges
      })
      .then(response => {
        console.log('response from db ', response)
          this.props.setProjectFromDB(response.data[0])
          this.setState({
              toggleSave:false
          })
      });
  };
  handleCancel = () => {
    const { projectId } = this.props;
    axios.get(`/api/getProject/${projectId}`).then(result => {
      console.log(result.data)
        this.props.setProjectFromDB(result.data[0]);
      this.setState({
        toggleSave: false
      });
    });
  };
  
  render() {
    return (
      <div className="overview_edit">
        <EditNav currentSection={this.props.match.url} />
        <Switch>
          <Route path="/projectCreate/edit/basics" component={Basics} />
          <Route path="/projectCreate/edit/rewards" component={Rewards} />
          <Route path="/projectCreate/edit/story" component={Story} />
          <Route path="/projectCreate/edit/profile" component={Profile} />
          <Route path="/projectCreate/edit/account" component={Account} />
          <Route path="/projectCreate/edit/preview" component={Preview} />
        </Switch>
        <SaveProject
          toggleSave={this.state.toggleSave}
          handleCancel={this.handleCancel}
          handleSave={this.handleSave}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(OverviewEdit);
