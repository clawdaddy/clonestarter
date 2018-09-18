import React, { Component } from "react";
import RewardInputs from "./Rewards/RewardInputs";
import EditSection from "./EditSection";
import "./../OverviewEdit.css";
import { connect } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';



class Rewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rewards:[]
    }
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    const { projectId } = this.props;
    axios.get(`/api/reward/${projectId}`).then( response => {
      console.log(response)
      let newRewards = _.slice(response.data.rewards).map( reward => {
        return {
          pledgeAmount:reward.pledge_amount,
          title:reward.title,
          description:reward.description,
          estimatedDelivery:reward.estimated_delivery,
          shippingDetails:reward.shipping_details,
          rewardLimitEnabled:reward.reward_limit_enabled,
          backerLimit:reward.backer_limit,
          rewardLimitEndDate:reward.reward_limit_end_date,
          rewardLimitStartDate:reward.reward_limit_start_date,
          id:reward.reward_id
        }
      })

      this.setState({
        rewards:newRewards
      })
    })
  }
  addNewRewardToArray = ( reward ) => {
    const { rewards } = this.state;
    let newRewards = _.slice(rewards)
    newRewards.push(reward)
    this.setState({
      rewards:newRewards
    })
  }
  addIdFromDBToReward = ( oldReward, newReward ) => {
    const { rewards } = this.state;
    // let newRewardWithId = Object.assign({}, newReward, {id:newId})
    let rewardIndex = rewards.findIndex( reward => reward === oldReward)
    console.log('reward index: ', rewardIndex)
    let newRewards = _.slice(rewards)
    newRewards.splice(rewardIndex,1,newReward)
    this.setState({
      rewards:newRewards
    })

  }
  removeRewardFromArray = ( oldReward ) => {
    const { rewards } = this.state;
    let rewardIndex = rewards.findIndex( reward => reward === oldReward)
    let newRewards = _.slice(rewards)
    newRewards.splice(rewardIndex,1)
    this.setState({
      rewards:newRewards
    })
  }
  //I was going to try and use this to update values on state for each reward, but decided it would be easier to have each reward manage its own state.
  // handleChange = (name, value, index) => {
  //   let newRewards = _.slice(this.state.rewards)
  //   newRewards[index][name] = value;
  //   this.setState({
  //     rewards:newRewards
  //   })
  // }
  
  createNewRewardTemplate = () => {
    
    const newReward = {
      id:null,
      pledgeAmount:0,
      title:'',
      rewardLimitEnabled:false
    }
    // axios.post(`/api/reward/newReward`, newReward).then( response => {

    // })
    this.addNewRewardToArray(newReward)
  }
  render() {
    return (
      <div className="overview_edit_container">
        <h1>Set your rewards and shipping costs.</h1>
        <h2>
            Invite backers to be a part of the creative experience by offering rewards like a copy of what you’re making, a special experience, or a behind-the-scenes look into your process.
        </h2>
        <div className="overview_edit_section">
            <div className="overview_section_inputs">
            {
              this.state.rewards.map( (reward, i) => (
                <EditSection
                  title={`Reward # ${i+1}`}
                  inputs={[
                    <RewardInputs
                      // handleChangeFn={this.handleChange}
                      title={reward.title}
                      pledgeAmount={reward.pledgeAmount}
                      description={reward.description}
                      estimatedDelivery={reward.estimatedDelivery}
                      shippingDetails={reward.shippingDetails}
                      rewardLimitEnabled={reward.rewardLimitEnabled}
                      backerLimit={reward.backerLimit}
                      rewardLimitEndDate={reward.rewardLimitEndDate}
                      rewardLimitStartDate={reward.rewardLimitStartDate}
                      key={reward.id}
                      id={reward.id}
                      currentIndex={i}
                      addNewRewardToArrayFn={this.addIdFromDBToReward}
                      reward={reward}
                      removeRewardFn={this.removeRewardFromArray}
                    />
                  
                  ]}
                  key={`Reward_${reward.id}`}
                />
              ))
            }
            <button onClick={this.createNewRewardTemplate}>+ Add a new reward</button>
                {/* <EditSection title="Reward #" inputs={[<RewardInputs />]} key="Reward"/> */}
            </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps( state ){
  const { projectId } = state.projectCreationReducer;
  return { projectId }
}

export default connect( mapStateToProps, null )(Rewards)
