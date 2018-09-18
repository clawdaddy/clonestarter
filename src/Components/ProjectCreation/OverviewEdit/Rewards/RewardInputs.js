import React, { Component } from "react";
import RegularInput from "./../../ProjectAttribute/RegularInput";
import DropdownSelector from "./../../ProjectAttribute/DropdownSelector";
import moment from "moment";
import RewardItem from "./RewardInputs/RewardItem";
import "./RewardInputs.css";
import axios from 'axios';
import RewardDisplay from './RewardDisplay';
import SaveProject from './../SaveProject';
import { connect } from 'react-redux';

class RewardInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthSelected: moment().format("MMMM"),
      yearSelected: moment().format("YYYY"),
      shippingDetails: "",
      title: '',
      pledgeAmount: '',
      description:'',
      editMode:false,
      toggleSave:false
    };
  
  }
  componentDidMount(){
    this.getRewardFromDB()
  }
  getRewardFromDB = () => {
    if(this.props.id){
      axios.get(`/api/reward/getOneReward/${this.props.id}`)
      .then( response => {
        console.log('reward response: ', response)
        const { backer_limit:backerLimit, shipping_details:shippingDetails, title, pledge_amount:pledgeAmount, description,  reward_limit_enabled :rewardLimitEnabled,
        estimated_delivery:estimatedDelivery } = response.data;
        this.setState({
          backerLimit,
          shippingDetails,
          title,
          pledgeAmount,
          description,
          rewardLimitEnabled,
          monthSelected:moment(estimatedDelivery).format("MMMM"),
          yearSelected:moment(estimatedDelivery).format("YYYY"),
          estimatedDelivery
        })
      })
    }
    else{
      this.setState({
        editMode:true
      })
    }
    
  }
  resetRewardFromDB = () => {
    this.getRewardFromDB()
    this.setState({
      toggleSave:false
    })
  }
  //I was using this to determine when the save button should appear, but it would update even when I reset the reward from the database, and I couldn't think of a better workaround than to delegate this responsibility to the event handlers individually. 
  // componentDidUpdate(prevProps, prevState, snapshot){
  //   if(
  //     prevState.backerLimit !== this.state.backerLimit 
  //     || prevState.shippingDetails !== this.state.shippingDetails 
  //     || prevState.title !== this.state.title
  //     || prevState.pledgeAmount !== this.state.pledgeAmount
  //     || prevState.description !== this.state.description
  //     || prevState.rewardLimitEnabled !== this.state.rewardLimitEnabled
  //     || prevState.monthSelected !== this.state.monthSelected
  //     || prevState.yearSelected !== this.state.yearSelected
  //     || prevState.estimatedDelivery !== this.state.estimatedDelivery
  //   ){
  //     this.setState({
  //       toggleSave:true
  //     })
  //   }
  // }
  updateRewardOnDB = () => {
    const { id } = this.props;
    const { backerLimit, shippingDetails, title, pledgeAmount, description, rewardLimitEnabled, monthSelected, yearSelected }= this.state;
    let formattedDate = moment(`${monthSelected} ${yearSelected}`, `MMMM YYYY`).format('YYYY-MM-DD')
    const payload = {
      reward_id:id,
      backer_Limit:backerLimit,
      shipping_details:shippingDetails,
      title,
      pledge_amount:pledgeAmount,
      description,
      reward_limit_enabled:rewardLimitEnabled,
      month_selected:monthSelected,
      year_selected:yearSelected,
      estimated_delivery:formattedDate,
      project_id:this.props.projectId
    }
    
    console.log('rewardId before put: ', id)
    if(id){
      axios.put(`/api/reward/editReward`, payload).then( response => {
        console.log('update reward on db response: ', response)
        this.setState({
          toggleSave:false,
          toggleEdit:false
        })
      })
    }
    else {
      axios.post(`/api/reward/newReward`, payload).then( response => {
        //need to update the id in parent component Rewards
        console.log(`new reward on db response: `, response)
        const payload2 = {
          id:response.data.reward_id,
          backerLimit,
          shippingDetails,
          title,
          pledgeAmount,
          description,
          rewardLimitEnabled,
          estimatedDelivery:formattedDate,
        }
        this.props.addNewRewardToArrayFn(this.props.reward, payload2)
        // this.setState({
        //   toggleSave:false,
        //   toggleEdit:false
        // })
      })
    }
  }
  handleMonth = month => {
    this.setState({
      monthSelected: month,
      toggleSave:true
    });
  };
  handleYear = year => {
    this.setState({
      yearSelected: year,
      toggleSave:true
    });
  };
  handleShippingDetails = shippingDetails => {
    this.setState({
      shippingDetails,
      toggleSave:true
    });
  };
  handleChange = (value, name) => {
      this.setState({
          [name]:value,
          toggleSave:true
      })
  }
  handleEditModeToggle = () => {
    this.setState( prevState => ({
      editMode:!prevState.editMode,
      toggleSave:false
    }))
  }
  deleteReward = () => {
    if(this.props.id){
      axios.delete(`/api/reward/deleteReward/${this.props.id}`).then( response => {
        this.props.removeRewardFn(this.props.reward)
      })
      .catch( err => console.log('delete reward from db error: ', err))
    }
    else {
      this.props.removeRewardFn(this.props.reward)
    }
  }
  render() {
    return  this.state.editMode
      ?<div>
        
        <div className="input_set">
          <p>Title</p>
          <RegularInput 
            callbackFn={this.handleChange}
            value={this.state.title}
            name="title"
          />
        </div>
        <div className="input_set">
          <p>Pledge amount</p>
          <RegularInput 
            callbackFn={this.handleChange}
            value={this.state.pledgeAmount}
            name={"pledgeAmount"}
          />
        </div>
        <div className="input_set">
          <p>Description</p>
          <div>
            <RegularInput 
                callbackFn={this.handleChange}
                value={this.state.description}
                name={"description"}
            />
            <button>Add an item</button>
          </div>
        </div>
        <div className="input_set">
          <p>Estimated delivery</p>
          <DropdownSelector
            options={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ]}
            selected={this.state.monthSelected}
            callbackFn={this.handleMonth}
          />
          <DropdownSelector
            options={[
              moment().format("YYYY"),
              moment()
                .add(1, "y")
                .format("YYYY"),
              moment()
                .add(2, "y")
                .format("YYYY"),
              moment()
                .add(3, "y")
                .format("YYYY"),
              moment()
                .add(4, "y")
                .format("YYYY"),
              moment()
                .add(5, "y")
                .format("YYYY")
            ]}
            selected={this.state.yearSelected}
            callbackFn={this.handleYear}
          />
        </div>
        <div className="input_set">
          <p>Shipping details</p>
          <DropdownSelector
            options={[
              "No shipping involved",
              "Only ships to certain countries",
              "Ships anywhere in the world"
            ]}
            selected={this.state.shippingDetails}
            callbackFn={this.handleShippingDetails}
            placeholder={"Select an option"}
          />
        </div>
        <div className="input_set">
          {/* I want to add this feature later--the ability to limit the availability of a reward. In the meantime, I'd rather not display the option if I can't implement it yet.
          <p>Limit availability</p>
          <div>
            <input 
              type="checkbox" 
              id="toggle_reward_limit"
              checked={this.state.rewardLimitEnabled} 
              onChange={ (e) =>this.handleChange(e.target.checked, e.target.name)}
              name='rewardLimitEnabled'
            />
            <label htmlFor="toggle_reward_limit">Enable reward limit</label>
          </div> */}
          
        </div>
        <button onClick={this.deleteReward}>X Delete</button>
        <SaveProject
          toggleSave={this.state.toggleSave}
          handleCancel={this.resetRewardFromDB}
          handleSave={this.updateRewardOnDB}
        />
      </div>
      : (
        <RewardDisplay
          pledgeAmount={+this.props.pledgeAmount}
          title={this.props.title}
          description={this.props.description}
          estimatedDelivery={this.props.estimatedDelivery}
          shippingDetails={this.props.shippingDetails}
          rewardLimitEnabled={this.props.rewardLimitEnabled}
          backerLimit={this.props.backerLimit}
          rewardLimitEndDate={this.props.rewardLimitEndDate}
          rewardLimitStartDate={this.props.rewardLimitStartDate}
          toggleEdit={this.handleEditModeToggle}
        />
      )
    ;
  }
}
function mapStateToProps( state ){
  const { projectId } = state.projectCreationReducer;
  return {
    projectId
  }
}

export default connect(mapStateToProps,null)(RewardInputs);
