import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCode,
  faBuilding,
  faLaptopCode,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";
import windowSize from "react-window-size";
import "./Navbar.sass";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { ui: this.props.location.pathname };
  }

  render() {
    let uiClass = "nav-item nav-link";
    return (
      <nav>
        <div className="nav nav-tabs nav-fill">
          <label
            className={this.state.ui === "/" ? uiClass + " active" : uiClass}
            onClick={() => {
              this.setState({ ui: "/" });
              this.props.history.push("/");
            }}
          >
            {/* <Link to="/"> */}
            <FontAwesomeIcon icon={faUser} style={{ marginRight: 15 }} />
            {this.props.windowWidth > 900 && "About Me"}
            {/* </Link> */}
          </label>
          <label
            className={
              this.state.ui === "/skills" ? uiClass + " active" : uiClass
            }
            onClick={() => {
              this.setState({ ui: "/skills" });
              this.props.history.push("/skills");
            }}
          >
            <FontAwesomeIcon icon={faCode} style={{ marginRight: 15 }} />
            {this.props.windowWidth > 900 && "Skills"}
          </label>
          <label
            className={
              this.state.ui === "/workexperience"
                ? uiClass + " active"
                : uiClass
            }
            onClick={() => {
              this.setState({ ui: "/workexperience" });
              this.props.history.push("/workexperience");
            }}
          >
            <FontAwesomeIcon icon={faBuilding} style={{ marginRight: 15 }} />
            {this.props.windowWidth > 900 && "Work Experience"}
          </label>
          <label
            className={
              this.state.ui === "/projects" ? uiClass + " active" : uiClass
            }
            onClick={() => {
              this.setState({ ui: "/projects" });
              this.props.history.push("/projects");
            }}
          >
            <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: 15 }} />
            {this.props.windowWidth > 900 && "Projects"}
          </label>
          <label
            className={this.state.ui === "/fun" ? uiClass + " active" : uiClass}
            onClick={() => {
              this.setState({ ui: "/fun" });
              this.props.history.push("/fun");
            }}
          >
            <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: 15 }} />
            {this.props.windowWidth > 900 && "Fun"}
            {this.props.windowWidth > 900 && (
              <sup style={{ padding: 10 }}>New</sup>
            )}
          </label>
          <label
            className={
              this.state.ui === "/contactme" ? uiClass + " active" : uiClass
            }
            onClick={() => {
              this.setState({ ui: "/contactme" });
              this.props.history.push("/contactme");
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 15 }} />
            {this.props.windowWidth > 900 && "Contact Me"}
          </label>
        </div>
      </nav>
    );
  }
}

export default windowSize(withRouter(Navbar));
