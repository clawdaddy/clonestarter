import React, { Component } from "react";
import { connect } from "react-redux";
import "./../OverviewEdit.css";
import EditSection from "./EditSection";
import axios from "axios";
import RegularInput from "./../ProjectAttribute/RegularInput";
import Dropzone from "./../ProjectAttribute/Dropzone";

class Profile extends Component {
  render() {
    return (
      <div className="overview_edit_container">
        <h1>Tell us more about yourself.</h1>
        <h2>
          {" "}
          Add a bio and links to your website and social media profiles. Think
          of it as your creative resume.
        </h2>
        <div className="overview_edit_section">
          <div className="overview_section_inputs" >
            <EditSection
                title="Profile photo"
                inputs={[
                    <Dropzone
                        key="profile_dropzone"
                        preview=""
                    />
                ]}
            />
            <EditSection
                title="Name"
                inputs={[
                    <RegularInput
                        key="name_input"
                    />
                ]}
            />
            <EditSection
                title="Biography"
                inputs={[
                    <textarea
                        key="biography_input"
                    />
                ]}
            />
            <EditSection
                title="Your location"
                inputs={[
                    <RegularInput
                        key="location_input"
                    />
                ]}
            />
            <EditSection
                title="Websites"
                inputs={[
                    <RegularInput
                        key="website_input"
                    />

                ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
