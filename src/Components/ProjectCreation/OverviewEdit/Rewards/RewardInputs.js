import React, { Component } from "react";
import RegularInput from "./../../ProjectAttribute/RegularInput";
import DropdownSelector from "./../../ProjectAttribute/DropdownSelector";
import moment from "moment";
import RewardItem from "./RewardInputs/RewardItem";
import "./RewardInputs.css";
import axios from 'axios';
import RewardDisplay from './RewardDisplay';
import SaveProject from './../SaveProject';

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
    axios.get(`/api/reward/getOneReward/${this.props.id}`).then( response => {
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
  componentDidUpdate(prevProps, prevState, snapshot){
    if(
      prevState.backerLimit !== this.state.backerLimit 
      || prevState.shippingDetails !== this.state.shippingDetails 
      || prevState.title !== this.state.title
      || prevState.pledgeAmount !== this.state.pledgeAmount
      || prevState.description !== this.state.description
      || prevState.rewardLimitEnabled !== this.state.rewardLimitEnabled
      || prevState.monthSelected !== this.state.monthSelected
      || prevState.yearSelected !== this.state.yearSelected
      || prevState.estimatedDelivery !== this.state.estimatedDelivery
    ){
      this.setState({
        toggleSave:true
      })
    }
  }
  handleMonth = month => {
    this.setState({
      monthSelected: month
    });
  };
  handleYear = year => {
    this.setState({
      yearSelected: year
    });
  };
  handleShippingDetails = shippingDetails => {
    this.setState({
      shippingDetails
    });
  };
  handleChange = (value, name) => {
      this.setState({
          [name]:value
      })
  }
  handleEditModeToggle = () => {
    this.setState( prevState => ({
      editMode:!prevState.editMode,
      toggleSave:false
    }))
  }

  render() {
    // console.log('edit mode: ', this.state.editMode)
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
          </div>
        </div>
        <SaveProject
          toggleSave={this.state.toggleSave}
          handleCancel
          handleSave
        />
      </div>
      : (
        <RewardDisplay
          pledgeAmount={this.props.pledgeAmount}
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

export default RewardInputs;
