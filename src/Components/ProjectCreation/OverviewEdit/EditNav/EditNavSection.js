import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditNavSection extends Component {
    render() {
        return (
           <Link to={this.props.url}>
                {this.props.sectionName}
           </Link>
        );
    }
}

export default EditNavSection;