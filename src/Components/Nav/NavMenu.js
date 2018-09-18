import React, { Component } from "react";
import NavMenuSection from "./NavMenuSection";
import NavMenuProjectLink from "./NavMenuProjectLink";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios';
import './Nav.css';
import { setUser } from '../../dux/projectCreationReducer';
import onClickOutside from 'react-onclickoutside';

  /* the image below will be whatever picture the user has uploaded as their picture. For now, I'll try and use the one that the auth gets off of Google. When the user clicks on the picture, it will open up the NavMenu. The NavMenu contains the name of the user, 3 menu sections (my stuff, settings, and my projects), and a log out button. I'll need information from the database about the projects, so I'll make sure to grab that when the user logs in. I don't know how much of each section I'll do, but this is a good start. */

function mapStateToProps(state) {
    const { user } = state.projectCreationReducer
  return { user }
}
const actions = {
    setUser
}
class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen:false
        }
    }
    componentDidMount(){
      axios.get("/api/myProjects").then( response => {
        this.props.setUser(response.data)
      })
    }
    // componentDidUpdate(prevProps, prevState, snapshot){
    //   if(prevProps.user.id)
    // }
    toggleMenu = () => {
      if(!this.state.menuOpen){
        axios.get("/api/myProjects").then( response => {
          this.props.setUser(response.data)
          this.setState((prevState) =>{
            return {
                menuOpen:!prevState.menuOpen
            }
          })
        })
      }
      else {
        this.setState((prevState) =>{
          return {
              menuOpen:!prevState.menuOpen
          }
      })
      }
        
    }
    logout = () => {
        axios.get('/auth/logout').then( response => {
            this.props.setUser({});
            
        })
    }

    handleClickOutside = ( event ) => {
      this.setState((prevState) =>{
        return {
            menuOpen:false
        }
    })
    }
  render() {
    return (
      <div className='nav_menu_container'>
        {/* picture of user */}
        {/* <div > */}
            <img className='nav_user_photo' src={this.props.user.profile_photo}
            onClick={this.toggleMenu}/>
        {/* </div> */}
        {/* Menu that opens when picture is clicked */}
        <div className={this.state.menuOpen ? 'nav_menu nav_menu_open' : 'nav_menu'}>
          {/* name */}
          <h5>{this.props.user.name}</h5>
          {/* menus */}
          <div>
            {/* my stuff */}
            {/* <div>

                        </div> */}
            {/* settings */}
            <NavMenuSection
              title="SETTINGS"
              links={[
                <Link key="account" to='/'>Account</Link>,
                <Link key="Edit profile" to='/'>Edit profile</Link>
              ]}
            />
            {/* my projects */}
            <NavMenuSection
              title="PROJECTS"
              links={this.props.user.projectsArray.map(project => {
                return (
                  <NavMenuProjectLink
                    title={project.projectTitle}
                    id={project.projectId}
                    key={project.projectId}
                    projectPhoto={project.projectImage}
                    onClick={this.toggleMenu}
                  />
                );
              })}
            />
          </div>
          <hr />
          {/* logout button */}
          <a onClick={this.logout}>Log out</a>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(onClickOutside(NavMenu));
