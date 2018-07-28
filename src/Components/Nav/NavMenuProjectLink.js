import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavMenuProjectLink extends Component {
    render() {
        return (
            <div>
                <img alt='projectPhoto'src={this.props.projectPhoto}/>
                <Link to={`/projectCreate/overview/${this.props.projectID}`}>{this.props.projectTitle}</Link>

            </div>
        );
    }
}

export default NavMenuProjectLink;