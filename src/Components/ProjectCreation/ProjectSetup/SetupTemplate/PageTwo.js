import React, { Component } from 'react';
import CharacterLimitInput from './../../ProjectAttribute/CharacterLimitInput';
import { connect } from 'react-redux';
import { setBlurb } from '../../../../dux/projectCreationReducer';
import { Link } from 'react-router-dom';

function mapStateToProps( state ){
    return{
        shortBlurb:state.projectCreationReducer.shortBlurb,
    };
}
const actions = {
    setBlurb
}

class PageTwo extends Component {
    
    render() {
        return (
            <div>
                <CharacterLimitInput
                    callbackFn = {this.props.setBlurb}
                    value={this.props.shortBlurb}
                    characters='135'
                    onInside={false}
                />
                <Link to='/projectCreate/setup/1'>
                    Category
                </Link>
                {/* <Link to='/projectCreate/setup/3'> */}
                <button 
                    disabled={!this.props.shortBlurb}
                    onClick={()=>this.props.history.push('/projectCreate/setup/3')}
                >
                    Next: Location

                </button>
                {/* </Link> */}
            </div>
        );
    }
}

export default connect(mapStateToProps, actions)(PageTwo);