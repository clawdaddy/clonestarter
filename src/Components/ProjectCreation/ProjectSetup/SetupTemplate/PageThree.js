import React, { Component } from 'react';
import DropdownSelector from '../../ProjectAttribute/DropdownSelector';
import Checkmark from '../../ProjectAttribute/Checkmark';
import { selectCountry, toggleAgeEighteen, toggleVerifyId, toggleDebitCredit, saveSetup } from '../../../../dux/projectCreationReducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

function mapStateToProps( state ){
    const { 
        country, 
        atLeastEighteen, 
        canVerifyBankAndId, 
        hasDebitOrCreditCard,
        shortBlurb,
        category,
        projectId } = state;
    return {
        country, 
        atLeastEighteen, 
        canVerifyBankAndId, 
        hasDebitOrCreditCard,
        shortBlurb,
        category,
        projectId
    };
}
const actions = {
    selectCountry, toggleAgeEighteen, toggleVerifyId, toggleDebitCredit, saveSetup
}

class PageThree extends Component {
    saveInitialProject = () => {
        const { category, shortBlurb, country } = this.props;
        // this commented out function saves the project setup to the database using Redux and Redux promise middleware. I wanted to see if I could get it to work, because I've never used redux promise middleware before. Now that I've got it working, I'm realizing that it would be easier to make a regular axios call, save the info on redux, then redirect the user to the next section.
        // this.props.saveSetup(category, shortBlurb, country)
        axios.post('/api/addProject', {category, shortBlurb, country}).then( response => {
             this.props.saveSetup(response.data[0].id)
        });
    }
    render() {
        if (this.props.projectId){
            this.props.history.push(`/projectCreate/overview/${this.props.projectId}`)
        }
        return (
            <div>
                <DropdownSelector
                    callbackFn={this.props.selectCountry}
                    placeholder='Select your country'
                    selected={this.props.country}
                    options={['murica','Mehicho']}
                />
                <Checkmark
                    callbackFn={this.props.toggleAgeEighteen}
                    condition='I am at least 18 years old.'
                    checked={this.props.atLeastEighteen}
                />
                <Checkmark
                    callbackFn={this.props.toggleVerifyId}
                    condition='I can verify a bank account and government-issued ID.'
                    checked={this.props.canVerifyBankAndId}
                />
                <Checkmark
                    callbackFn={this.props.toggleDebitCredit}
                    condition='I have a debit and/or credit card.'
                    checked={this.props.hasDebitOrCreditCard}
                />
                <Link to='/projectCreate/setup/2'>
                    Project idea
                </Link>
                {/* <Link to='/projectCreate/setup/4'> */}
                <button disabled={
                    !this.props.country ||
                    !this.props.atLeastEighteen ||
                    !this.props.canVerifyBankAndId ||
                    !this.props.hasDebitOrCreditCard
                    }
                    onClick={() => this.saveInitialProject()}
                >
                    Continue

                </button>
                {/* </Link> */}
            </div>
        );
    }
}

export default connect(mapStateToProps, actions)(PageThree);