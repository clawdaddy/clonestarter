import React, { Component } from 'react';
import DropdownSelector from './../../ProjectAttribute/DropdownSelector';
import { selectCategory } from './../../../../dux/projectCreationReducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
function mapStateToProps(state) {
    return {
        category:state.projectCreationReducer.category
    };
}

class PageOne extends Component {
    render() {
        return (
            <div>
                <DropdownSelector 
                    placeholder='Select your category'
                    selected={this.props.category}
                    options={[
                        'Art',
                        'Comics',
                        'Crafts',
                        'Dance',
                        'Design',
                        'Fashion',
                        'Film & Video',
                        'Food',
                        'Games',
                        'Journalism',
                        'Music',
                        'Photography',
                        'Publishing',
                        'Technology',
                        'Theater'
                    ]}
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