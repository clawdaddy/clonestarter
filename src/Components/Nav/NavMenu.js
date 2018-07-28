import React, { Component } from "react";
import NavMenuSection from "./NavMenuSection";
import NavMenuProjectLink from "./NavMenuProjectLink";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
{
  /* the image below will be whatever picture the user has uploaded as their picture. For now, I'll try and use the one that the auth gets off of Google. When the user clicks on the picture, it will open up the NavMenu. The NavMenu contains the name of the user, 3 menu sections (my stuff, settings, and my projects), and a log out button. I'll need information from the database about the projects, so I'll make sure to grab that when the user logs in. I don't know how much of each section I'll do, but this is a good start. */
}
function mapStateToProps(state) {
  user: state.user;
}
class NavMenu extends Component {
  render() {
    return (
      <div>
        {/* picture of user */}
        <img />
        {/* Menu that opens when picture is clicked */}
        <div>
          {/* name */}
          <p />
          {/* menus */}
          <div>
            {/* my stuff */}
            {/* <div>

                        </div> */}
            {/* settings */}
            <NavMenuSection
              title="SETTINGS"
              links={[<Link>Account</Link>, <Link>Edit profile</Link>]}
            />
            {/* my projects */}
            <NavMenuSection
              title="PROJECTS"
              links={user.projectsArray.map(project => {
                return (
                  <NavMenuProjectLink
                    title={project.title}
                    id={project.id}
                    key={project.id}
                    projectPhoto={project.image}
                  />
                );
              })}
            />
          </div>
          <hr />
          {/* logout button */}
          <a>Log out</a>
        </div>
      </div>
    );
  }
}

export default NavMenu;
