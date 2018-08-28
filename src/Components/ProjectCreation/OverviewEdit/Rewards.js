import React, { Component } from "react";
import RewardInputs from "./Rewards/RewardInputs";
import EditSection from "./EditSection";
import "./../OverviewEdit.css";

class Rewards extends Component {
  render() {
    return (
      <div className="overview_edit_container">
        <h1>Set your rewards and shipping costs.</h1>
        <h2>
            Invite backers to be a part of the creative experience by offering rewards like a copy of what you’re making, a special experience, or a behind-the-scenes look into your process.
        </h2>
        <div className="overview_edit_section">
            <div className="overview_section_inputs">
                <EditSection title="Reward #" inputs={[<RewardInputs />]} key="Reward"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Rewards;
