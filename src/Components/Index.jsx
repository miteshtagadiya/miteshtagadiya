import React from "react";
import "../styles/global.sass";
import { Icon } from "antd";
import Avatar from "../assets/profile.jpg";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import brands from "@fortawesome/fontawesome-free-brands";
import Skills from "./Skills/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WorkExperience from "./WorkExperience/WorkExperience";
import Projects from "./Projects/Projects";
import hackerrank from "../assets/hackerrank-brands.svg";
import battle from "../assets/battle1.png";
import windowSize from "react-window-size";
import ContactMe from "./ContactMe/ContactMe";
import Typist from "react-typist";
import ParticleComponent from "./ParticleComponent";
library.add(fas, brands);

const Index = props => (
  <div className="App">
    <div className="container-fluid overflow-particle">
      <div
        className="row"
        style={{ background: "#00003f", height: "100vh", overflow: "auto" }}
      >
        <div
          className="col-sm-12 col-md-12 col-lg-12 col-xl-3"
          style={
            props.windowWidth > 1200
              ? {
                  borderRight: "1px solid #7ef0ff",
                  background: "#00003f",
                  textAlign: "center",
                }
              : {
                  background: "#00003f",
                  textAlign: "center",
                }
          }
        >
          <div style={{ marginTop: 50 }}>
            <ParticleComponent />

            <img
              src={Avatar}
              className="img-thumbnail"
              style={{
                borderRadius: "50%",
                height: 250,
                width: 230,
              }}
              alt="Mitesh Tagadiya"
            />
          </div>

          <div>
            <label style={{ fontSize: 42, marginTop: 50 }}>
              <Typist cursor={{ show: false }}>Mitesh Tagadiya</Typist>
            </label>
            <label style={{ fontSize: 18, marginTop: 50 }}>
              Skilled in Full Stack Software Development, ReactJs, PHP, JAVA,
              Redux, MySQL
            </label>
            <div
              className="profile-links"
              style={{ position: "absolute", height: 105, marginLeft: -15 }}
            >
              <label style={{ fontSize: 32, marginLeft: 10, marginRight: 10 }}>
                <a
                  href="https://github.com/miteshtagadiya"
                  style={{ textDecoration: "none", color: "#7ef0ff" }}
                  target="_blank"
                  aria-label="Github"
                  rel="noopener noreferrer"
                >
                  <Icon type="github" />
                </a>
              </label>
              <label style={{ fontSize: 32, marginLeft: 10, marginRight: 10 }}>
                <a
                  href="https://gitlab.com/miteshtagadiya"
                  style={{ textDecoration: "none", color: "#7ef0ff" }}
                  target="_blank"
                  aria-label="Gitlab"
                  rel="noopener noreferrer"
                >
                  <Icon type="gitlab" />
                </a>
              </label>
              <label style={{ fontSize: 32, marginLeft: 10, marginRight: 10 }}>
                <a
                  href="https://www.linkedin.com/in/mitesh-tagadiya-140420108/"
                  style={{ textDecoration: "none", color: "#7ef0ff" }}
                  target="_blank"
                  aria-label="LinkedIn"
                  rel="noopener noreferrer"
                >
                  <Icon type="linkedin" />
                </a>
              </label>
              <label style={{ fontSize: 32, marginLeft: 10, marginRight: 10 }}>
                <a
                  href="https://drive.google.com/file/d/1qFXjZqTDow29I2qrH1PfacNd77W9GcXa/view?usp=sharing"
                  style={{ textDecoration: "none", color: "#7ef0ff" }}
                  target="_blank"
                  aria-label="Resume"
                  rel="noopener noreferrer"
                >
                  <Icon type="link" />
                </a>
              </label>
              <label style={{ fontSize: 32, marginLeft: 10, marginRight: 10 }}>
                <a
                  href="https://stackoverflow.com/users/6880229/mitesh7172"
                  style={{ textDecoration: "none", color: "#7ef0ff" }}
                  target="_blank"
                  aria-label="StackOverflow"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={["fab", "stack-overflow"]}
                    style={{ color: "#7ef0ff", marginBottom: -8 }}
                  />
                </a>
              </label>

              <label style={{ fontSize: 32, marginLeft: 10, marginRight: 10 }}>
                <a
                  href="https://www.hackerrank.com/Mitesh_Tagadiya"
                  style={{ textDecoration: "none", color: "#7ef0ff" }}
                  target="_blank"
                  aria-label="HackerRank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={hackerrank}
                    height="30"
                    style={{ color: "#7ef0ff", marginBottom: -8 }}
                    alt="HackerRank"
                  />
                </a>
              </label>

              <label style={{ fontSize: 32, marginLeft: 10, marginRight: 10 }}>
                <a
                  href="https://cssbattle.dev/player/miteshtagadiya"
                  style={{ textDecoration: "none", color: "#7ef0ff" }}
                  target="_blank"
                  aria-label="CSSBattle"
                  rel="noopener noreferrer"
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
          </div>
        </div>

        <div
          className="col-sm-12 col-lg-12 col-md-12 col-xl-9"
          style={{ background: "#00003f" }}
        >
          <header className="App-header">
            <HashRouter>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/skills" component={Skills} />
                <Route path="/workexperience" component={WorkExperience} />
                <Route path="/projects" component={Projects} />
                <Route path="/contactme" component={ContactMe} />
              </Switch>
            </HashRouter>
          </header>
        </div>
        <div
          style={
            props.windowWidth > 1200
              ? { position: "absolute", right: 15, marginTop: 10, bottom: 10 }
              : { display: "none" }
          }
        >
          <label>
            Designed and Developed by
            <span style={{ fontWeight: "bold" }}> Mitesh Tagadiya</span>
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default windowSize(Index);
