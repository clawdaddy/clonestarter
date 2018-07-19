import React, { Component } from 'react';
import CharacterLimitInput from './../../ProjectAttribute/CharacterLimitInput';
import { connect } from 'react-redux';
import { setBlurb } from '../../../../dux/projectCreationReducer';

function mapStateToProps( state ){
    return{
        shortBlurb:state.shortBlurb
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
            </div>
        );
    }
}

export default connect(mapStateToProps, actions)(PageTwo);