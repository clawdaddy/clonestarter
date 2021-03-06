import React, { Component } from "react";
import { Link } from "react-router-dom";
import FaSearch from "react-icons/lib/fa/search";
import "./../Splash/Splash.css";
import NavMenu from "./NavMenu";
import { connect } from "react-redux";
import axios from "../../../node_modules/axios";
import { setUser } from "../../dux/projectCreationReducer";

function mapStateToProps(state) {
  const { user } = state.projectCreationReducer;
  return { user };
}
const actions = {
  setUser
};
class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    axios.get("/auth/me").then(response => {
      if (response.data === "redirect") {
        console.log("response received, no user on session");
      } else {
        this.props.setUser(response.data);
      }
    });
  }
  login = () => {
    let redirecturi = encodeURIComponent(
      `${window.location.origin}/auth/callback`
    );
    console.log(redirecturi);
    window.location = `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/authorize?client_id=${
      process.env.REACT_APP_AUTH0_CLIENT_ID
    }&scope=openid%20profile%20email&redirect_uri=${redirecturi}&response_type=code`;
  };
  render() {
    console.log("project array", this.props.user.projectsArray);
    return (
      <div className="nav">
        <div className="filler-left" />
        <div className="left-nav">
          <a>Explore</a>
          <Link to="/projectCreate/setup/1">
            Start <span className="nav-hide">a project</span>
          </Link>
        </div>
        <Link to='/' className='logo-link'><h1 className="logo">CLONESTARTER</h1></Link>
        <div className="filler-mid" />
        <div className="right-nav">
          <a className="nav-hide">
            Search <FaSearch />
          </a>
          <a className="nav-hide-2">
            {" "}
            <FaSearch />
          </a>
          {!this.props.user.projectsArray ? (
            <a onClick={this.login}>Sign in</a>
          ) : (
            <NavMenu />
          )}
        </div>
        <div className="filler-right" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(Nav);
