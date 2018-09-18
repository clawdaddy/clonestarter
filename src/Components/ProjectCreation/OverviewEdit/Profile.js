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
  setProfilePhoto
} from "./../../../dux/projectCreationReducer";
import SaveProject from "./SaveProject";

function mapStateToProps(state) {
  
  const { name, biography, your_location, profile_photo } = state.projectCreationReducer.user
  const { user } = state.projectCreationReducer
  return {
    name,
    biography,
    your_location,
    user,
    profile_photo
  };
}

const actions = {
  setProfileName,
  setBiography,
  setProfileLocation,
  setProfilePhoto
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        toggleSave:false
    };
  }
  componentDidMount(){
      if(this.props){

      }
  }
  handleCancel = () => {

  }

  handleSave = () => {

  }
  handleProfilePhoto = file => {
    let reader = new FileReader();
    reader.onload = e => {
        console.log('uploading file',e.target.result)
        let payload = {payload:e.target.result, id:this.props.projectId}
        axios.post(`/api/saveProfilePhoto`, payload).then( response => {
            console.log(response)
            this.props.setProfilePhoto(response.data.video)
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
                <img 
                    src={this.props.profile_photo} 
                    placeholder='Profile Photo'
                />
              </Dropzone>]}
            />
            <EditSection
              title="Name"
              inputs={[
                <RegularInput
                  key="name_input"
                  value={this.props.name}
                  callbackFn={this.props.setProfileName}
                />
              ]}
            />
            <EditSection
              title="Biography"
              inputs={[
                <textarea
                  key="biography_input"
                  value={this.props.biography}
                  onChange={e => this.props.setBiography(e.target.value)}
                />
              ]}
            />
            <EditSection
              title="Your location"
              inputs={[
                <RegularInput
                  key="location_input"
                  value={this.props.your_location}
                  callbackFn={this.props.setProfileLocation}
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
        <SaveProject toggleSave handleCancel handleSave />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(Profile);
