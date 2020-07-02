import React, { Component } from "react";
import "../styles/global.sass";
import loadable from "@loadable/component";
import battle from "../assets/battle1.png";
import Typist from "react-typist";
import ReactGA from "react-ga";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStackOverflow,
  faNpm,
  faGithub,
  faGitlab,
  faLinkedin,
} from "@fortawesome/fontawesome-free-brands";
import "./index.sass";
import { faLink } from "@fortawesome/free-solid-svg-icons";

class ProfileLinks extends Component {
  render() {
    return (
      <div>
        <br />
        <label style={{ fontSize: 42, marginTop: 50 }}>
          <Typist cursor={{ show: false }}>Mitesh Tagadiya</Typist>
        </label>
        <br />
        <label style={{ fontSize: 18, marginTop: 50 }}>
          Skilled in Full Stack Software Development, ReactJs, PHP, JAVA, Redux,
          MySQL
        </label>
        <br />
        <div
          className="profile-links"
          style={{ height: 105, marginBottom: 20, position: "relative" }}
        >
          <label style={{ fontSize: 28, marginLeft: 10, marginRight: 10 }}>
            <a
              href="https://github.com/miteshtagadiya"
              style={{ textDecoration: "none", color: "#7ef0ff" }}
              target="_blank"
              aria-label="Github"
              rel="noopener noreferrer"
              onClick={() => {
                ReactGA.event({
                  category: "Social",
                  action: "Github Clicked",
                  label: "Github",
                });
              }}
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#7ef0ff", marginBottom: -8 }}
              />
            </a>
          </label>
          <label style={{ fontSize: 28, marginLeft: 10, marginRight: 10 }}>
            <a
              href="https://gitlab.com/miteshtagadiya"
              style={{ textDecoration: "none", color: "#7ef0ff" }}
              target="_blank"
              aria-label="Gitlab"
              rel="noopener noreferrer"
              onClick={() => {
                ReactGA.event({
                  category: "Social",
                  action: "Gitlab Clicked",
                  label: "Gitlab",
                });
              }}
            >
              <FontAwesomeIcon
                icon={faGitlab}
                style={{ color: "#7ef0ff", marginBottom: -8 }}
              />
            </a>
          </label>
          <label style={{ fontSize: 28, marginLeft: 10, marginRight: 10 }}>
            <a
              href="https://www.linkedin.com/in/mitesh-tagadiya-140420108/"
              style={{ textDecoration: "none", color: "#7ef0ff" }}
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
              onClick={() => {
                ReactGA.event({
                  category: "Social",
                  action: "LinkedIn Clicked",
                  label: "LinkedIn",
                });
              }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#7ef0ff", marginBottom: -8 }}
              />
            </a>
          </label>
          <label style={{ fontSize: 28, marginLeft: 10, marginRight: 10 }}>
            <a
              href="https://drive.google.com/file/d/1qFXjZqTDow29I2qrH1PfacNd77W9GcXa/view?usp=sharing"
              style={{ textDecoration: "none", color: "#7ef0ff" }}
              target="_blank"
              aria-label="Resume"
              rel="noopener noreferrer"
              onClick={() => {
                ReactGA.event({
                  category: "Social",
                  action: "Resume Clicked",
                  label: "Resume",
                });
              }}
            >
              <FontAwesomeIcon
                icon={faLink}
                style={{ color: "#7ef0ff", marginBottom: -8 }}
              />
            </a>
          </label>
          <label style={{ fontSize: 28, marginLeft: 10, marginRight: 10 }}>
            <a
              href="https://stackoverflow.com/users/6880229/mitesh7172"
              style={{ textDecoration: "none", color: "#7ef0ff" }}
              target="_blank"
              aria-label="StackOverflow"
              rel="noopener noreferrer"
              onClick={() => {
                ReactGA.event({
                  category: "Social",
                  action: "StackOverflow Clicked",
                  label: "StackOverflow",
                });
              }}
            >
              <FontAwesomeIcon
                icon={faStackOverflow}
                style={{ color: "#7ef0ff", marginBottom: -8 }}
              />
            </a>
          </label>

          <label style={{ fontSize: 28, marginLeft: 10, marginRight: 10 }}>
            <a
              href="https://www.npmjs.com/~miteshtagadiya"
              style={{ textDecoration: "none", color: "#7ef0ff" }}
              target="_blank"
              aria-label="NPM"
              rel="noopener noreferrer"
              onClick={() => {
                ReactGA.event({
                  category: "Social",
                  action: "Npm Clicked",
                  label: "NPM",
                });
              }}
            >
              <FontAwesomeIcon
                icon={faNpm}
                style={{ color: "#7ef0ff", marginBottom: -8 }}
              />
            </a>
          </label>

          <label style={{ fontSize: 28, marginLeft: 10, marginRight: 10 }}>
            <a
              href="https://cssbattle.dev/player/miteshtagadiya"
              style={{ textDecoration: "none", color: "#7ef0ff" }}
              target="_blank"
              aria-label="CSSBattle"
              rel="noopener noreferrer"
              onClick={() => {
                ReactGA.event({
                  category: "Social",
                  action: "CSSBattle Clicked",
                  label: "CSSBattle",
                });
              }}
            >
              <img
                src={battle}
                height="30"
                style={{ color: "#7ef0ff", marginBottom: -8 }}
                alt="CSSBattle"
              />
            </a>
          </label>
          <div
            style={
              this.props.windowWidth > 1200
                ? {
                    display: "auto",
                  }
                : { display: "none" }
            }
          >
            <a
              href="http://voiceless-jewel.surge.sh/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Github"
              onClick={() =>
                ReactGA.event({
                  category: "GameKit View",
                  action: "GameKit View Clicked",
                  label: "GameKit View",
                })
              }
            >
              <label
                className="link-label-home"
                style={{ marginBottom: 10, marginTop: 50 }}
              >
                GameKit View
                <sup style={{ padding: 15 }}>New</sup>
              </label>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileLinks;
