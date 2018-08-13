import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../../OverviewEdit.css';

class EditNavSection extends Component {
    render() {
        return (
           <Link to={this.props.url} 
                className={ 
                    this.props.extraStyleName 
                    ? `overview_edit_nav_box ${this.props.extraStyleName}` 
                    : 'overview_edit_nav_box'
                }

           >
                {this.props.sectionName}
           </Link>
        );
    }
}

export default EditNavSection;