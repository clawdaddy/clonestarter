import React, { Component } from 'react';
import EditNavSection from './EditNav/EditNavSection';

const baseUrl='/projectCreate/edit';
class EditNav extends Component {
    render() {
        return (
            <div>
                <EditNavSection
                    sectionName='Basics'
                    url={`${baseUrl}/basics`}
                />
                <EditNavSection
                    sectionName='Rewards'
                    url={`${baseUrl}/rewards`}
                />
                <EditNavSection
                    sectionName='Story'
                    url={`${baseUrl}/story`}
                />
                <EditNavSection
                    sectionName='About you'
                    url={`${baseUrl}/profile`}
                />
                <EditNavSection
                    sectionName='Account'
                    url={`${baseUrl}/account`}
                />
                <EditNavSection
                    sectionName='Preview'
                    url={`${baseUrl}/preview`}
                />
            </div>
        );
    }
}

export default EditNav;