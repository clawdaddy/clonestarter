import React, { Component } from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Splash from './Components/Splash/Splash';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Splash}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
