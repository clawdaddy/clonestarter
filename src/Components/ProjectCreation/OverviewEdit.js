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
import './OverviewEdit.css';

class OverviewEdit extends Component {
    
    render() {
        return (
            <div className='overview_edit'>
                <EditNav currentSection = {this.props.match.url}/>
                <Switch>
                    <Route path='/projectCreate/edit/basics' component={Basics}/>
                    <Route path='/projectCreate/edit/rewards'
                    component={Rewards}/>
                    <Route path='/projectCreate/edit/story'
                    component={Story}/>
                    <Route path='/projectCreate/edit/profile'
                    component={Profile}/>
                    <Route path='/projectCreate/edit/account'
                    component={Account}/>
                    <Route path='/projectCreate/edit/preview'
                    component={Preview}/>
                </Switch>
               
            </div>
        );
    }
}

export default OverviewEdit;