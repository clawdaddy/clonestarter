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
                    path={this.props.match.url+'/setup/:page'}
                    component={ProjectSetup}
                />
                <Route
                    path={this.props.match.url+'/overview/:id'}
                    component={OverviewPage}
                />
                <Route
                    path={this.props.match.url+'/edit/'}
                    component={OverviewEdit}
                />
            </Switch>
        );
    }
}

export default ProjectCreation;