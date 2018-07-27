import React, { Component } from "react";

class Login extends Component {
  componentDidMount() {
    console.log("hit login");
    let redirecturi = encodeURIComponent(
      `${window.location.origin}/auth/callback`
    );
    window.location = `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/authorize?client_id=${
      process.env.REACT_APP_AUTH0_CLIENT_ID
    }&scope=openid%20profile%20email&redirect_uri=${redirecturi}&response_type=code`;
  }
  render() {
    return <div />;
  }
}

export default Login;
