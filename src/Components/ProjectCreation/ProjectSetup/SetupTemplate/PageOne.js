import React, { Component } from 'react';
import DropdownSelector from './../../ProjectAttribute/DropdownSelector';
import { selectCategory } from './../../../../dux/projectCreationReducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function mapStateToProps(state) {
    return {
        category:state.category
    };
}

class PageOne extends Component {
    render() {
        return (
            <div>
                <DropdownSelector 
                    placeholder='Select your category'
                    selected={this.props.category}
                    options={['an option','a second option','a third','a fourth','a fifth','a sixth','a seventh','an eighth','a ninth', 'a tenth','an eleventh','a twelfth']}
                    callbackFn={this.props.selectCategory}
                />
                <p>Welcome.</p>
                <button 
                    disabled={!this.props.category}
                    onClick={()=>this.props.history.push('/projectCreate/setup/2')}
                >
                    Next: Project idea
                </button>
            </div>
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