import React, { Component } from "react";
import RegularInput from "./../../ProjectAttribute/RegularInput";
import DropdownSelector from "./../../ProjectAttribute/DropdownSelector";
import moment from "moment";
import RewardItem from "./RewardInputs/RewardItem";
import "./RewardInputs.css";

class RewardInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthSelected: moment().format("MMMM"),
      yearSelected: moment().format("YYYY"),
      shippingDetails: "",
      title:'',
      pledgeAmount:'',
      description:''
    };
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

  render() {
    return (
      <div>
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
            <input type="checkbox" id="toggle_reward_limit" />
            <label for="toggle_reward_limit">Enable reward limit</label>
          </div>
        </div>
      </div>
    );
  }
}

export default RewardInputs;
