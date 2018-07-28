import React, { Component } from 'react';
import './NavMenuSection.css';
// need to make sure that if photo or title change during editing that this component gets updated with current information. I think I'm going to do it by updating the user object on redux when the project gets saved.
class NavMenuSection extends Component {
    render() {
        return (
            <div>
                <h6>{this.props.title}</h6>
                <div>
                    {this.props.links}
                </div>
            </div>
        );
    }
}

export default NavMenuSection;