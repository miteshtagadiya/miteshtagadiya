import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ParticleComponent from "../ParticleComponent";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <ParticleComponent />
        <div className="row">
          <div
            className="col-sm-12 col-md-12 col-xl-5 col-lg-5"
            style={{ margin: "auto" }}
          >
            <label style={{ fontSize: 18, marginTop: 20 }}>
              I specialize in front development using React, Redux, CSS
              Frameworks. I always look for optimizing the code and enhancing
              the performance of the application. I am self motivated, good team
              player and a quick learner. If you are looking for a tech geek who
              is goal oriented, willing to learn new technologies, and who likes
              to get things done in time, then I am the man for the job.
            </label>
          </div>

          <div className="col-sm-12 col-xl-7 col-lg-7 col-md-12">
            <div className="row" style={{ justifyContent: "center" }}>
              <div
                className="card"
                style={{
                  background: "transparent",
                  border: "1px solid #7ef0ff",
                  padding: 25,
                  borderRadius: 15,
                  marginBottom: 25,
                  marginTop: 25,
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <label style={{ fontSize: 28 }}>DAIICT</label>
                </div>
                <label style={{ fontSize: 18 }}>
                  <FontAwesomeIcon
                    icon={["fas", "graduation-cap"]}
                    style={{ color: "#7ef0ff", marginRight: 15 }}
                  />
                  Master of Science in Information Technology
                </label>
                <label style={{ fontSize: 18 }}>
                  <FontAwesomeIcon
                    icon={["fas", "calendar-alt"]}
                    style={{ color: "#7ef0ff", marginRight: 25 }}
                  />
                  2016 - 2018
                </label>
                <label style={{ fontSize: 18 }}>
                  <FontAwesomeIcon
                    icon={["fas", "trophy"]}
                    style={{ color: "#7ef0ff", marginRight: 20 }}
                  />
                  6.79 / 10
                </label>
              </div>
            </div>

            <div className="row" style={{ justifyContent: "center" }}>
              <div
                className="card"
                style={{
                  background: "transparent",
                  border: "1px solid #7ef0ff",
                  padding: 25,
                  borderRadius: 15,
                  marginBottom: 25,
                  marginTop: 25,
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <label style={{ fontSize: 28 }}>VNSGU</label>
                </div>
                <label style={{ fontSize: 18 }}>
                  <FontAwesomeIcon
                    icon={["fas", "graduation-cap"]}
                    style={{ color: "#7ef0ff", marginRight: 15 }}
                  />
                  Bachelor of Science in Information Technology
                </label>
                <label style={{ fontSize: 18 }}>
                  <FontAwesomeIcon
                    icon={["fas", "calendar-alt"]}
                    style={{ color: "#7ef0ff", marginRight: 25 }}
                  />
                  2013 - 2016
                </label>
                <label style={{ fontSize: 18 }}>
                  <FontAwesomeIcon
                    icon={["fas", "trophy"]}
                    style={{ color: "#7ef0ff", marginRight: 20 }}
                  />
                  7.02 / 10
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
