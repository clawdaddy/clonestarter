import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

class NavMenuProjectLink extends Component {
    render() {
        console.log('project id', this.props.id)
        return (
            <div onClick={() => this.props.onClick()}>
                <Image 
                    // alt='projectPhoto'
                    publicId={this.props.projectPhoto}
                >
                    <Transformation height="50" width="50" crop="fill"/>
                </Image>
                <Link to={`/projectCreate/overview/${this.props.id}`}>{this.props.title || 'no title yet'}</Link>
            </div>
        );
    }
}

export default NavMenuProjectLink;