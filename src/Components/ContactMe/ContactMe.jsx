import React, { Component } from "react";
import "./ContactMe.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/fontawesome-free-brands";
import loadable from "@loadable/component";
const ParticleComponent = loadable(() => import("../ParticleComponent"));

class ContactMe extends Component {
  render() {
    return (
      <div className="container-fluid contactme">
        <ParticleComponent />
        <div
          className="row"
          style={{ margin: "auto", marginTop: 50, marginBottom: 50 }}
        >
          <div className="col-sm-12 col-xl-3 col-lg-3 col-md-12" />
          <div
            className="col-sm-12 col-xl-6 col-lg-6 col-md-12"
            style={{ margin: "auto" }}
          >
            <div style={{ textAlign: "center" }}>
              <label style={{ fontSize: 24, marginBottom: 30 }}>
                Write to me
              </label>
            </div>
            <form
              action="https://formspree.io/miteshtagadiya@gmail.com"
              method="POST"
            >
              <div className="form-group">
                <label>Your name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>
              <div className="form-group">
                <label>Your email</label>
                <input
                  type="text"
                  name="_replyto"
                  className="form-control"
                  id="formGroupExampleInput2"
                />
              </div>
              <div className="form-group">
                <label>Your message</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              </div>
              <div style={{ textAlign: "center", marginTop: 50 }}>
                <button
                  type="submit"
                  style={{ fontSize: 20, color: "#7ef0ff" }}
                  className="btn btn-outline-primary"
                >
                  Send
                  <FontAwesomeIcon
                    icon={faTelegramPlane}
                    style={{
                      color: "#7ef0ff",
                      marginBottom: -1,
                      marginLeft: 10,
                    }}
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-xl-3 col-lg-3 col-md-12" />
        </div>
      </div>
    );
  }
}

export default ContactMe;
