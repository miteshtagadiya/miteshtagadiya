import React, { Component } from "react";
import "./ContactMe.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ContactMe extends Component {
  render() {
    return (
      <div className="container contactme">
        <div className="d-flex" style={{ height: "70vh", margin: "auto" }}>
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
            <form action="mailto:miteshtagadiya@gmail.com" target="_blank" method="GET">
              <div className="form-group">
                <label for="formGroupExampleInput">Your name</label>
                <input
                  type="text"
                  name="Subject"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">Your email</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">Your message</label>
                <textarea
                  name="body"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              </div>
              <div style={{ textAlign: "center", marginTop: 50 }}>
                <button
                  type="submit"
                  style={{ fontSize: 20, color: "#7ef0ff" }}
                  class="btn btn-outline-primary"
                  onClick={() => setTimeout(() => {
                    window.location.href = "https://miteshtagadiya.js.org"
                  }, 2000)}
                >
                  Send
                  <FontAwesomeIcon
                    icon={["fab", "telegram-plane"]}
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
