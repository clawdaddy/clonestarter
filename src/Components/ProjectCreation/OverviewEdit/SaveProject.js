import React, { Component } from "react";
import "./SaveProject.css";

class SaveProject extends Component {
  render() {
    return (
      // this div conditionally renders. It will render once something on the reducer has changed.
      <div
        className={
          this.props.toggleSave
            ? "save_project save_project_display"
            : "save_project"
        }
      >
        <div className="save_project_buttons">
          {/* discard changes will take whatever is on the database and set it to the reducer */}
          <button
            className={
              this.props.toggleSave
                ? "save_project_discard save_project_discard_display"
                : "save_project_discard"
            }
            onClick={() => this.props.handleCancel()}
          >
            Discard changes
          </button>
          {/* save will take whatever is on the reducer and save it to the database */}
          <button
            className={
              this.props.toggleSave
                ? "save_project_save save_project_save_display"
                : "save_project_save"
            }
            onClick={() => this.props.handleSave()}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default SaveProject;
