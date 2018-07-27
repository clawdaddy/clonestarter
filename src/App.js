import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Splash from "./Components/Splash/Splash";
import Login from "./Components/Login";
import ProjectCreation from "./Components/ProjectCreation";
import { Provider } from "react-redux";
import store from "./dux/store";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <HashRouter>
            <div>
              <Route path="/" component={Nav} />
              <Switch>
                {/* <Route path='/' component={Nav}/> */}
                <Route exact path="/" component={Splash} />
                <Route path="/projectCreate" component={ProjectCreation} />
                <Route path="/login" component={Login} />
              </Switch>
            </div>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
