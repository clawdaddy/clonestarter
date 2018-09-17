import React, { Component } from "react";
import "./../OverviewEdit.css";
import EditSection from "./EditSection";
import axios from "axios";
import Dropzone from "./../ProjectAttribute/Dropzone";
import { connect } from 'react-redux';
import { setVideo } from './../../../dux/projectCreationReducer';
import { Video, Transformation } from 'cloudinary-react';

function mapStateToProps( state ){
    const { projectVideo, projectId} = state
    return {
        projectVideo,
        projectId
    }
}
const actions = {
    setVideo
}

class Story extends Component {
    handleFile = file => {
        let reader = new FileReader();
        reader.onload = e => {
            console.log('uploading file',e.target.result)
            let payload = {payload:e.target.result, id:this.props.projectId}
            axios.post(`/api/saveVideo`, payload).then( response => {
                console.log(response)
                this.props.setVideo(response.data.video)
            })
        }
        reader.readAsDataURL(file)
    }
  render() {
    return (
      <div className="overview_edit_container">
        <h1>Tell us about your project. </h1>
        <h2>
          Use images, video, and a compelling description to describe what
          you’re making. Be sure to get specific about why people should be
          excited about your project.
        </h2>
        <div className="overview_edit_section">
          <div className="overview_section_inputs">
            <EditSection
              title="Project Video"
              inputs={[
                <Dropzone key="video_dropzone" 
                    handleFileFn={this.handleFile}
                    preview={this.props.projectVideo}
                >
                    <Video publicId={`${this.props.projectVideo}`} fallbackContent='oh no' resourceType="video">
                        <Transformation controls="true"/>
                        
                        <Transformation width='0.5' crop='scale' />
                    </Video>
                </Dropzone>,
                <p key="video_explanation">
                  Have fun -- add a video! Projects with a video have a much
                  higher chance of success.
                </p>
              ]}
            />
            <EditSection
              title="Project description"
              inputs={[
                <p key="description_explanation">
                  Use your project description to share more about what you're
                  raising funds to do and how you plan to pull it off. It's up
                  to you to make the case for your projectsw
                </p>
              ]}
            />
            <EditSection
              title="Risks and Challenges"
              inputs={[
                <p key="risk_and_challenge_explanation">
                  What are the risks and challenges that come with completing
                  your project, and how are you qualified to overcome them?
                  Every project comes with its own unique risks and challenges.
                  Let your backers know how you’re prepared to overcome these
                  challenges by setting proper expectations and communicating
                  anything that could cause delays or changes in your production
                  plan. Please mention if you’re still in the process of
                  completing any past projects or if your project requires
                  approval or premarket review from an outside company or agency
                  before you can distribute rewards. Being fully transparent and
                  addressing these potential challenges from the start will help
                  backers understand that your project is a work in progress,
                  and that you’ve thought through all of the possible outcomes.
                </p>
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(Story);
