import React, { Component } from "react";
import DropdownSelector from "./../ProjectAttribute/DropdownSelector";
import LocationSelector from "./../ProjectAttribute/LocationSelector";
import CharacterLimitInput from "./../ProjectAttribute/CharacterLimitInput";
import Dropzone from "./../ProjectAttribute/Dropzone";
import DollarInput from "./../ProjectAttribute/DollarInput";
import EditSection from "./EditSection";
import RegularInput from "./../ProjectAttribute/RegularInput";
import { connect } from "react-redux";
import DateAndTimeSelector from './../ProjectAttribute/DateAndTimeSelector';
import {
  setTitle,
  selectCategory,
  setBlurb,
  selectSubcategory,
  setGoal,
  setEndDate,
  setLocation,
  setImage
} from "./../../../dux/projectCreationReducer";
import "../OverviewEdit.css";
import axios from 'axios'
import { Image, Transformation } from 'cloudinary-react';


function mapStateToProps(state) {
  const {
    category,
    subcategory,
    projectLocation,
    fundingDuration,
    fundingEndDate,
    fundingGoal,
    shortBlurb,
    projectTitle,
    projectImage,
    projectId
  } = state.projectCreationReducer;
  return {
    category,
    subcategory,
    projectLocation,
    fundingDuration,
    fundingEndDate,
    fundingGoal,
    shortBlurb,
    projectTitle,
    projectImage,
    projectId
  };
}
const actions = {
  setTitle,
  selectCategory,
  setBlurb,
  selectSubcategory,
  setGoal,
  setEndDate,
  setLocation,
  setImage
};

class Basics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategoryOptions: [""]
    };
    // this.fileInput = React.createRef()
  }
  componentDidMount() {
    if(!this.props.subcategory){
        this.getSubcategories();
    }
  }
  getSubcategories() {
    let subcategoryOptions;
    switch (this.props.category) {
      case "Art":
        subcategoryOptions = [
          "Ceramics",
          "Conceptual Art",
          "Digital Art",
          "Illustration",
          "Mixed Media",
          "Painting",
          "Performance Art",
          "Public Art"
        ];
        break;
      case "Comics":
        subcategoryOptions = [
          "Anthologies",
          "Comic Books",
          "Events",
          "Graphic Novels",
          "Webcomics"
        ];
        break;
      case "Crafts":
        subcategoryOptions = [
          "Candles",
          "Crochet",
          "DIY",
          "Embroidery",
          "Glass",
          "Knitting",
          "Pottery",
          "Printing",
          "Quilts",
          "Stationery",
          "Taxidermy",
          "Weaving"
        ];
        break;
      case "Dance":
        subcategoryOptions = [
          "Performances",
          "Residencies",
          "Spaces",
          "Workshops"
        ];
        break;
      case "Design":
        subcategoryOptions = [
          "Architecture",
          "Civic Design",
          "Graphic Design",
          "Interactive Design",
          "Product Design",
          "Typography"
        ];
        break;
      case "Fashion":
        subcategoryOptions = [
          "Accessories",
          "Apparel",
          "Childrenswear",
          "Couture",
          "Footware",
          "Jewelry",
          "Pet Fashion",
          "Ready-to-wear"
        ];
        break;
      case "Film & Video":
        subcategoryOptions = [
          "Action",
          "Animation",
          "Comedy",
          "Documentary",
          "Drama",
          "Experimental",
          "Family",
          "Fantasy",
          "Festivals",
          "Horror",
          "Movie Theaters",
          "Music Videos",
          "Narrative Film",
          "Romance",
          "Science Fiction",
          "Shorts",
          "Television",
          "Thrillers",
          "Webseries"
        ];
        break;
      case "Food":
        subcategoryOptions = [
          "Bacon",
          "Community Gardens",
          "Cookbooks",
          "Drinks",
          "Events",
          "Farmer's Markets",
          "Farms",
          "Food Trucks",
          "Restaurants",
          "Small Batch",
          "Spaces",
          "Vegan"
        ];
        break;
      case "Games":
        subcategoryOptions = [
          "Gaming Hardware",
          "Live Games",
          "Mobile Games",
          "Playing Cards",
          "Puzzles",
          "Tabletop Games",
          "Video Games"
        ];
        break;
      case "Journalism":
        subcategoryOptions = ["Audio", "Photo", "Print", "Video", "Web"];
        break;
      case "Music":
        subcategoryOptions = [
          "Blues",
          "Chiptune",
          "Classical Music",
          "Comedy",
          "Country & Folk",
          "Electronic Music",
          "Faith",
          "Hip-Hop",
          "Indie Rock",
          "Jazz",
          "Kids",
          "Latin",
          "Metal",
          "Pop",
          "Punk",
          "R&B",
          "Rock",
          "World Music"
        ];
        break;
      case "Photography":
        subcategoryOptions = [
          "Animals",
          "Fine Art",
          "Nature",
          "People",
          "Photobooks",
          "Places"
        ];
        break;
      case "Publishing":
        subcategoryOptions = [
          "Academic",
          "Anthologies",
          "Art Books",
          "Calendars",
          "Children's Books",
          "Comedy",
          "Fiction",
          "Letterpress",
          "Literary Journals",
          "Literary Spaces",
          "Nonfiction",
          "Periodicals",
          "Poetry",
          "Radio & Podcasts",
          "Translations",
          "Young Adult",
          "Zines"
        ];
        break;
      case "Technology":
        subcategoryOptions = [
          "3d Printing",
          "Apps",
          "Camera Equipment",
          "DIY Electronics",
          "Fabrication Tools",
          "Flight",
          "Gadgets",
          "Hardware",
          "Makerspaces",
          "Robots",
          "Software",
          "Sound",
          "Space Exploration",
          "Wearables",
          "Web"
        ];
        break;
      case "Theater":
        subcategoryOptions = [
          "Comedy",
          "Experimental",
          "Festivals",
          "Immersive",
          "Musical",
          "Plays",
          "Spaces"
        ];
      default:
        subcategoryOptions = [""];
    }
    this.props.selectSubcategory("");
    this.setState({
      subcategoryOptions
    });
  }
  //the uploadWidget is provided by cloudinary and can upload unsigned documents. I'm keeping it here in case I want to use it in the future, because I know it works. However, I want to try and set up an upload for signed documents.
  // uploadWidget = () => {
  //   window.cloudinary.openUploadWidget({
  //     cloud_name:process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  //     upload_preset:'fj44xkkb',
  //     tags:['test']
  //   },(err, result) => console.log(result))
  // }
  handleFileDrop = (e) => {
    e.preventDefault();
    console.log('file event: ', e)
    console.log('data transfer: ', e.dataTransfer)
    // let data = e.dataTransfer.getData('Proxy')
    // console.log('data from drop', data)
    
  };
  // saveImage = ( image ) => {
  //   this.props.setImage( image )
  // }
  handleFileInput = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('file input event: ', e)
  }
  handleFile = file => {
    let reader = new FileReader();
    reader.onload = e => {
      console.log(e.target.result)
      let payload = {payload:e.target.result, id:this.props.projectId}
      axios.post(`/api/savePicture`, payload).then( response => {
          console.log(response)
          this.props.setImage(response.data.image)
      })
  }
  reader.readAsDataURL(file)
  }
  handleDrag =(e) => {
    console.log('dragover data', e)
    e.preventDefault();
    e.stopPropagation();
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.category !== this.props.category) {
      this.getSubcategories();
    }
  }

  render() {
    return (
      <div className="overview_edit_container">
        <h1>Let's get started.</h1>
        <h2>
          Make a great first impression with your project’s title and image, and
          set your funding goal, campaign duration, and project category.
        </h2>
        <div className="overview_edit_section">
          <div className="overview_section_inputs">
            <EditSection
              title="Project image"
              inputs={[
                // <button onClick={this.uploadWidget}>Upload photo</button>,
                <Dropzone
                  key='dropfile'
                  handleDrop = {this.handleFileDrop}
                  handleDrag = {this.handleDrag}
                  handleFileInput = {this.handleFileInput}
                  handleFileFn = {this.handleFile}
                  projectId = {this.props.projectId}
                  preview = {this.props.projectImage}
                  saveImage={this.saveImage}
                  
                >
                  <Image publicId={this.props.projectImage}> 
                    <Transformation height='500' width='500' crop="fill"/>
                  </Image>
                </Dropzone>
              ]}
              key="project-image"
            />
            <EditSection
              title="Project title"
              inputs={[
                <CharacterLimitInput
                  characters="60"
                  value={this.props.projectTitle}
                  callbackFn={this.props.setTitle}
                  key="project-title"
                  setup="inside"
                />,
                <p key="project-title-explain">
                  Our search looks through words from your project title and
                  blurb, so make them clear and descriptive of what you’re
                  making. Your profile name will be searchable, too.
                </p>,
                <p key="project-title-explain-2">
                  These words will help people find your project, so choose them
                  wisely! Your name will be searchable too.
                </p>
              ]}
              key="project-title"
            />
            <EditSection
              title="Short blurb"
              inputs={[
                <CharacterLimitInput
                  characters="135"
                  value={this.props.shortBlurb}
                  callbackFn={this.props.setBlurb}
                  key="short-blurb"
                  setup="inside"
                />,
                <p key="short-blurb-explain">
                  Give people a sense of what you’re doing. Skip “Help me” and
                  focus on what you’re making.
                </p>
              ]}
            />
            <EditSection
              title="Category"
              inputs={[
                <DropdownSelector
                  options={[
                    "Art",
                    "Comics",
                    "Crafts",
                    "Dance",
                    "Design",
                    "Fashion",
                    "Film & Video",
                    "Food",
                    "Games",
                    "Journalism",
                    "Music",
                    "Photography",
                    "Publishing",
                    "Technology",
                    "Theater"
                  ]}
                  selected={this.props.category}
                  placeholder="Select a category"
                  callbackFn={this.props.selectCategory}
                  key="select-category"
                />,
                <DropdownSelector
                  options={this.state.subcategoryOptions}
                  selected={this.props.subcategory}
                  placeholder="Subcategory (optional)"
                  callbackFn={this.props.selectSubcategory}
                  key="select-subcategory"
                />
              ]}
            />
            <EditSection
              title="Project location"
              inputs={[
                  <RegularInput
                    value={this.props.projectLocation}
                    callbackFn={this.props.setLocation}
                    key='location'
                  />
              ]}
            />
            <EditSection
              title="Funding duration"
              inputs={[
                <DateAndTimeSelector
                    value={this.props.fundingEndDate}
                    callbackFn={this.props.setEndDate}
                    key='dateAndTime'
                />,

              ]}
            />
            <EditSection
              title="Funding goal"
              inputs={[
                <RegularInput
                  value={this.props.fundingGoal}
                  callbackFn={this.props.setGoal}
                  key="funding-goal-input"
                />
              ]}
            />
          </div>
          <div className="overview_section_tips">tips</div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(Basics);
