import React, { Component } from "react";
import { connect } from "react-redux";
import "./../OverviewEdit.css";
import EditSection from "./EditSection";
import axios from "axios";
import RegularInput from "./../ProjectAttribute/RegularInput";
import Dropzone from "./../ProjectAttribute/Dropzone";
import {
  setProfileName,
  setBiography,
  setProfileLocation,
  setProfilePhoto,
  setUser
} from "./../../../dux/projectCreationReducer";
import SaveProject from "./SaveProject";
import { Image, Transformation } from 'cloudinary-react';

function mapStateToProps(state) {
  
  const { name, biography, your_location, profile_photo, id } = state.projectCreationReducer.user
  const { user } = state.projectCreationReducer
  return {
    name,
    biography,
    your_location,
    user,
    profile_photo,
    id
  };
}

const actions = {
  setProfileName,
  setBiography,
  setProfileLocation,
  setProfilePhoto,
  setUser
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        toggleSave:false
    };
  }
//   componentDidUpdate(prevProps, prevState, snapshot){
//     if(
//         prevProps.name !== this.props.name ||
//         prevProps.biography !== this.props.biography ||
//         prevProps.your_location !== this.props.your_location ||
//         prevProps.profile_photo !== this.props.profile_photo
//     ){
//         this.setState({
//             toggleSave:true
//         })
//     }
//   }
  handleBiography = biography => {
    this.props.setBiography( biography )
    this.setState({
        toggleSave:true
    })
  }
  handleLocation = location => {
    this.props.setProfileLocation( location )
    this.setState({
        toggleSave:true
    })
  }
  handleName = name => {
      this.props.setProfileName( name )
      this.setState({
          toggleSave:true
      })
  }

  handleCancel = () => {
    axios.get(`/auth/me`).then( response => {
        this.props.setUser(response.data)
        this.setState({
            toggleSave:false
        })
        
    })
  }
  handleSave = () => {
    let payload = {
        id:this.props.id,
        profile_photo:this.props.profile_photo,
        your_location:this.props.your_location,
        biography:this.props.biography,
        name:this.props.name
    }
    axios.put(`/api/updateUser`, payload).then( response => {
        this.setState({
            toggleSave:false
        })
    })
  }
  handleProfilePhoto = file => {
    let reader = new FileReader();
    reader.onload = e => {
        console.log('uploading file',e.target.result)
        let payload = {payload:e.target.result, id:this.props.projectId}
        axios.post(`/api/saveProfilePhoto`, payload).then( response => {
            console.log(response)
            this.props.setProfilePhoto(response.data.video)
            this.setState({
                toggleSave:true
            })
        })
    }
    reader.readAsDataURL(file)
  }

  render() {
      console.log("profile user: ", this.props.user)
    return (
      <div className="overview_edit_container">
        <h1>Tell us more about yourself.</h1>
        <h2>
          {" "}
          Add a bio and links to your website and social media profiles. Think
          of it as your creative resume.
        </h2>
        <div className="overview_edit_section">
          <div className="overview_section_inputs">
            <EditSection
              title="Profile photo"
              inputs={[
              <Dropzone key="profile_dropzone" 
                preview={this.props.profile_photo} 
                
              >
                {/* <img 
                    src={this.props.profile_photo} 
                    placeholder='Profile Photo'
                /> */}
                <Image publicId={this.props.profile_photo}>
                    <Transformation width='150' height='150' crop='pad'/>
                </Image>
              </Dropzone>]}
            />
            <EditSection
              title="Name"
              inputs={[
                <RegularInput
                  key="name_input"
                  value={this.props.name}
                  callbackFn={this.handleName}
                />
              ]}
            />
            <EditSection
              title="Biography"
              inputs={[
                <textarea
                  key="biography_input"
                  value={this.props.biography || ''}
                  onChange={e => this.handleBiography(e.target.value)}
                />
              ]}
            />
            <EditSection
              title="Your location"
              inputs={[
                <RegularInput
                  key="location_input"
                  value={this.props.your_location || ''}
                  callbackFn={this.handleLocation}
                />
              ]}
            />
            {/* implement websites later, when I have more time */}
            {/* <EditSection
                title="Websites"
                inputs={[
                    <RegularInput
                        key="website_input"
                    />

                ]}
            /> */}
          </div>
        </div>
        <SaveProject 
            toggleSave={this.state.toggleSave}
            handleCancel={this.handleCancel} 
            handleSave={this.handleSave}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(Profile);
