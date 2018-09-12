import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import RewardInputs from './RewardInputs';

class RewardDisplay extends Component {
    
    
    render() {
        return (
            <div>
                <div>
                    <h3>Pledge ${this.props.pledgeAmount} or more</h3>
                    <button onClick={this.props.toggleEdit}>Edit</button>
                </div>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
                <p>Includes:</p>
                <ul>
                    <li>Item1</li>
                    <li>Item2</li>
                </ul>
                <p>Estimated Delivery:</p>
                <p>{this.props.estimatedDelivery}</p>
                <p>Optional Limited reward thing</p>
                
            </div>
        );
    }
}

export default RewardDisplay;

RewardDisplay.propTypes = {
    pledgeAmount:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string,
    estimatedDelivery:PropTypes.string,
    shippingDetails:PropTypes.string,
    rewardLimitEnabled:PropTypes.bool.isRequired,
    backerLimit:PropTypes.number,
    rewardLimitEndDate:PropTypes.string,
    rewardLimitStartDate:PropTypes.string
}
//needs a title, pledge amount of more than $1, and either a description or items