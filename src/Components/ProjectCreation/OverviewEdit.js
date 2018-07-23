//The overview edit page is a wrapper for the EditField components. This page holds all the information and functionality that won't change  as different categories are selected. 
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Basics from './OverviewEdit/Basics';
import Rewards from './OverviewEdit/Rewards';
import Story from './OverviewEdit/Story';
import Profile from './OverviewEdit/Profile';
import Account from './OverviewEdit/Account';
import EditNav from './OverviewEdit/EditNav';
import Preview from './OverviewEdit/Preview';

class OverviewEdit extends Component {
    render() {
        return (
            <div>
                <EditNav/>
                <Switch>
                    <Route path={this.props.match.url+'/basics'} component={Basics}/>
                    <Route path={this.props.match.url+'/rewards'}
                    component={Rewards}/>
                    <Route path={this.props.match.url+'/story'}
                    component={Story}/>
                    <Route path={this.props.match.url+'/profile'}
                    component={Profile}/>
                    <Route path={this.props.match.url+'/account'}
                    component={Account}/>
                    <Route path={this.props.match.url+'/preview'}
                    component={Preview}/>
                </Switch>
               
            </div>
        );
    }
}

export default OverviewEdit;