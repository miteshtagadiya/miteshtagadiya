import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    return this.props.windowWidth > 900 ? (
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
            <FontAwesomeIcon
              icon={["fas", "user"]}
              style={{ marginRight: 15 }}
            />
            About Me
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
            <FontAwesomeIcon
              icon={["fas", "code"]}
              style={{ marginRight: 15 }}
            />
            Skills
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
            <FontAwesomeIcon
              icon={["fas", "building"]}
              style={{ marginRight: 15 }}
            />
            Work Experience
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
            <FontAwesomeIcon
              icon={["fas", "laptop-code"]}
              style={{ marginRight: 15 }}
            />
            Projects
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
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              style={{ marginRight: 15 }}
            />
            Contact Me
          </label>
        </div>
      </nav>
    ) : (
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
            <FontAwesomeIcon icon={["fas", "user"]} />
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
            <FontAwesomeIcon icon={["fas", "code"]} />
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
            <FontAwesomeIcon icon={["fas", "building"]} />
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
            <FontAwesomeIcon icon={["fas", "laptop-code"]} />
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
            <FontAwesomeIcon icon={["fas", "envelope"]} />
          </label>
        </div>
      </nav>
    );
  }
}

export default windowSize(withRouter(Navbar));
