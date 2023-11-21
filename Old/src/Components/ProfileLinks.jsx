import React, { Component } from "react";
import "../styles/global.sass";
import battle from "../assets/battle1.png";
import Typist from "react-typist";
import ReactGA from "react-ga";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import windowSize from "react-window-size";
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
    let generateLinks = (link, name, icon) => {
      return (
        <label style={{ fontSize: 28, marginLeft: 10, marginRight: 10 }}>
          <a
            href={link}
            style={{ textDecoration: "none", color: "#7ef0ff" }}
            target="_blank"
            aria-label={name}
            rel="noopener noreferrer"
            onClick={() => {
              ReactGA.event({
                category: "Social",
                action: name + " Clicked",
                label: name,
              });
            }}
          >
            <FontAwesomeIcon
              icon={icon}
              style={{ color: "#7ef0ff", marginBottom: -8 }}
            />
          </a>
        </label>
      );
    };
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
          {generateLinks(
            "https://github.com/miteshtagadiya",
            "Github",
            faGithub
          )}
          {generateLinks(
            "https://gitlab.com/miteshtagadiya",
            "Gitlab",
            faGitlab
          )}
          {generateLinks(
            "https://www.linkedin.com/in/mitesh-tagadiya-140420108/",
            "LinkedIn",
            faLinkedin
          )}
          {generateLinks(
            "https://drive.google.com/file/d/1qFXjZqTDow29I2qrH1PfacNd77W9GcXa/view?usp=sharing",
            "Resume",
            faLink
          )}
          {generateLinks(
            "https://stackoverflow.com/users/6880229/mitesh7172",
            "StackOverflow",
            faStackOverflow
          )}
          {generateLinks("https://www.npmjs.com/~miteshtagadiya", "NPM", faNpm)}

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
        </div>
        <div
          style={
            this.props.windowWidth > 1200
              ? {
                  display: "auto",
                  position: "relative"
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
    );
  }
}

export default windowSize(ProfileLinks);
