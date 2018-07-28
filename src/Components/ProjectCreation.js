import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ProjectSetup from "./ProjectCreation/ProjectSetup";
import OverviewPage from "./ProjectCreation/OverviewPage";
import OverviewEdit from "./ProjectCreation/OverviewEdit";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "./../dux/projectCreationReducer";

const actions = { setUser };

class ProjectCreation extends Component {
  componentDidMount() {
    axios.get("/auth/me").then(response => {
      console.log("creation response", response);
      if (response.data === "redirect") {
        console.log("401!!!");
        this.props.history.push("/login");
      } else {
        this.props.setUser(response.data);
      }
    });
  }
  render() {
    return (
      <Switch>
        <Route
          path={this.props.match.url + "/setup/:page"}
          component={ProjectSetup}
        />
        <Route
          path={this.props.match.url + "/overview/:id"}
          component={OverviewPage}
        />
        <Route
          path={this.props.match.url + "/edit/:section"}
          component={OverviewEdit}
        />
      </Switch>
    );
  }
}

export default connect(
  null,
  actions
)(ProjectCreation);
