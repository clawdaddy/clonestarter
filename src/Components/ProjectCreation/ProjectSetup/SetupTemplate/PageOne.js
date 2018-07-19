import React, { Component } from 'react';
import DropdownSelector from './../../ProjectAttribute/DropdownSelector';
import { selectCategory } from './../../../../dux/projectCreationReducer';
import { connect } from 'react-redux';
function mapStateToProps(state) {
    return {
        category:state.category
    };
}

class PageOne extends Component {
    render() {
        return (
            <DropdownSelector 
                placeholder='Select your category'
                selected={this.props.category}
                options={['an option','a second option','a third','a fourth','a fifth','a sixth','a seventh','an eighth','a ninth', 'a tenth','an eleventh','a twelfth']}
                callbackFn={this.props.selectCategory}
            />
        );
    }
}

const actions = {
    selectCategory
}

export default connect(
    mapStateToProps,
    actions
)(PageOne);