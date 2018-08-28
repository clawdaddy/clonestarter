import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavMenuProjectLink extends Component {
    render() {
        console.log('project id', this.props.id)
        return (
            <div onClick={() => this.props.onClick()}>
                <img alt='projectPhoto'src={this.props.projectPhoto}/>
                <Link to={`/projectCreate/overview/${this.props.id}`}>{this.props.title || 'no title yet'}</Link>
            </div>
        );
    }
}

export default NavMenuProjectLink;