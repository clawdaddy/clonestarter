import React, { Component } from 'react';
import DropdownSelector from '../../ProjectAttribute/DropdownSelector';
import Checkmark from '../../ProjectAttribute/Checkmark';
import { selectCountry, toggleAgeEighteen, toggleVerifyId, toggleDebitCredit } from '../../../../dux/projectCreationReducer';
import { connect } from 'react-redux';

function mapStateToProps( state ){
    const { 
        country, 
        atLeastEighteen, 
        canVerifyBankAndId, 
        hasDebitOrCreditCard } = state;
    return {
        country, 
        atLeastEighteen, 
        canVerifyBankAndId, 
        hasDebitOrCreditCard
    };
}
const actions = {
    selectCountry, toggleAgeEighteen, toggleVerifyId, toggleDebitCredit
}

class PageThree extends Component {
    render() {
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
            </div>
        );
    }
}

export default connect(mapStateToProps, actions)(PageThree);