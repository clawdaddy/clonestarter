import React, { Component } from 'react';
import EditNavSection from './EditNav/EditNavSection';
import './../OverviewEdit.css';
import { connect } from 'react-redux';

function mapStateToProps( state ){
    const { projectId } = state;
    return {
        projectId
    }
}

class EditNav extends Component {
    constructor(props) {
        super(props);
        this.baseUrl = '/projectCreate/edit'
    }
    
    render() {
        console.log(this.props.currentSection)
        return (
            <div className='edit_nav'>
                <EditNavSection
                    sectionName='Exit editor'
                    url={`/projectCreate/overview/${this.props.projectId}`}
                    extraStyleName='exit_editor'
                />
                <div className='edit_nav_middle'>
                    <EditNavSection
                        sectionName='Basics'
                        url={`${this.baseUrl}/basics`}
                        extraStyleName={
                            `${this.baseUrl}/basics` === this.props.currentSection
                                ? `edit_nav_left edit_nav_box_current`
                                : 'edit_nav_left'
                        }
                        currentURL= {this.props.currentURL}
                    />
                    <EditNavSection
                        sectionName='Rewards'
                        url={`${this.baseUrl}/rewards`}
                        extraStyleName={
                            `${this.baseUrl}/rewards` === this.props.currentSection
                                ? `edit_nav_box_current`
                                : null
                        }
                        currentURL= {this.props.currentURL}
                    />
                    <EditNavSection
                        sectionName='Story'
                        url={`${this.baseUrl}/story`}
                        currentURL= {this.props.currentURL}
                        extraStyleName={
                            `${this.baseUrl}/story` === this.props.currentSection
                                ? `edit_nav_box_current`
                                : null
                        }
                    />
                    <EditNavSection
                        sectionName='About you'
                        url={`${this.baseUrl}/profile`}
                        currentURL= {this.props.currentURL}
                        extraStyleName={
                            `${this.baseUrl}/profile` === this.props.currentSection
                                ? `edit_nav_box_current`
                                : null
                        }
                    />
                    <EditNavSection
                        sectionName='Account'
                        url={`${this.baseUrl}/account`}
                        extraStyleName='edit_nav_right'
                        currentURL= {this.props.currentURL}
                        extraStyleName={
                            `${this.baseUrl}/account` === this.props.currentSection
                                ? `edit_nav_box_current`
                                : null
                        }
                    />
                </div>
                <EditNavSection
                    sectionName='Preview'
                    url={`${this.baseUrl}/preview`}
                    extraStyleName={
                        `${this.baseUrl}/preview` === this.props.currentSection
                            ? `edit_nav_box_current`
                            : null
                    }
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, null)( EditNav );