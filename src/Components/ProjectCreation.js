import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectSetup from './ProjectCreation/ProjectSetup';
import OverviewPage from './ProjectCreation/OverviewPage';
import OverviewEdit from './ProjectCreation/OverviewEdit';

class ProjectCreation extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path={this.props.match.url+'/setup'}
                    component={ProjectSetup}
                />
                <Route
                    path={this.props.match.url+'/overview/:projectid'}
                    component={OverviewPage}
                />
                <Route
                    path={this.props.match.url+'/edit/:projectid'}
                    component={OverviewEdit}
                />
            </Switch>
        );
    }
}

export default ProjectCreation;