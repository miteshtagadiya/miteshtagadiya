/* eslint-disable */
import React, { Component } from "react";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../Projects.sass";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLabel: false,
    };
  }

  onMouseEnter = () => {
    this.setState({
      showLabel: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      showLabel: false,
    });
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    return (
      <div
        className="col-sm-5 m-b-20 m-t-10 card Projects"
        style={{
          borderRadius: 0,
          margin: "auto",
          marginTop: 50,
          marginBottom: 50,
        }}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <img
          src={this.props.img}
          className="image"
          height="280"
          width="auto"
          alt="Myprofile"
        />
        {this.state.showLabel ? (
          <div
            style={{
              position: "absolute",
              height: 280,
              marginLeft: -15,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              background: "rgb(0,0,0,0.7)",
              alignItems: "center",
            }}
          >
            <label
              className="link-label"
              onClick={() => this.setModalVisible(true)}
            >
              Details
            </label>
          </div>
        ) : null}
        {this.state.showLabel ? (
          <div
            style={{
              position: "absolute",
              height: 280,
              width: "100%",
              padding: "15px",
              background: "transparent",
            }}
          >
            <label
              className="label-header"
              style={{ fontSize: 25, color: "white" }}
            >
              {this.props.header}
            </label>
          </div>
        ) : null}
        <Modal
          width="90%"
          footer={null}
          height="80%"
          title={this.props.header}
          centered
          style={{ background: "#00003f", overflow: "scroll" }}
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-12 col-xl-6 col-lg-6 col-md-12">
                  <Carousel>
                    {this.props.images.map((img, key) => {
                      return (
                        <div key={key}>
                          <img src={img} height="365" alt="" />
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
                <div className="col-sm-12 col-xl-6 col-lg-6 col-md-12">
                  <div>
                    <div style={{ display: "flex", marginTop: 20 }}>
                      <FontAwesomeIcon
                        icon={["fas", "calendar-alt"]}
                        style={{
                          fontSize: 20,
                          color: "#7ef0ff",
                          marginRight: 15,
                          marginTop: 3,
                        }}
                      />
                      <label>
                        {this.props.projectYear ? this.props.projectYear : null}
                      </label>
                    </div>
                    <div style={{ display: "flex", marginTop: 20 }}>
                      <FontAwesomeIcon
                        icon={["fas", "book"]}
                        style={{
                          fontSize: 20,
                          color: "#7ef0ff",
                          marginRight: 15,
                          marginTop: 3,
                        }}
                      />
                      <label>
                        {this.props.program ? this.props.program : null}
                      </label>
                    </div>
                    {this.props.members ? (
                      <div style={{ display: "flex", marginTop: 20 }}>
                        <FontAwesomeIcon
                          icon={["fas", "user-friends"]}
                          style={{
                            fontSize: 20,
                            color: "#7ef0ff",
                            marginRight: 15,
                            marginTop: 3,
                          }}
                        />
                        <label>
                          {this.props.members ? this.props.members : null}
                        </label>
                      </div>
                    ) : null}
                    <div style={{ display: "flex", marginTop: 20 }}>
                      <FontAwesomeIcon
                        icon={["fas", "code"]}
                        style={{
                          fontSize: 20,
                          color: "#7ef0ff",
                          marginRight: 15,
                          marginTop: 3,
                        }}
                      />

                      <label>{this.props.tech ? this.props.tech : null}</label>
                    </div>
                    <div style={{ marginTop: 30, marginBottom: 30 }}>
                      <div
                        style={{
                          bottom: 100,
                          width: "100%",
                          textAlign: "center",
                        }}
                      >
                        {this.props.isSocial ? (
                          <React.Fragment>
                            <a
                              href={this.props.github}
                              rel="noopener norefrerrer"
                              target="_blank"
                              aria-label="Github"
                            >
                              <label
                                className="link-label"
                                style={{ marginBottom: 10 }}
                              >
                                GitHub
                              </label>
                            </a>
                            <a
                              href={this.props.demo}
                              rel="noopener norefrerrer"
                              target="_blank"
                              aria-label="Demo"
                            >
                              <label
                                className="link-label"
                                style={{ marginTop: 10 }}
                              >
                                Demo
                              </label>
                            </a>
                          </React.Fragment>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>{this.props.projectDetails}</div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ProjectCard;
