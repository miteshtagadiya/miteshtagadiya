import React, { Component } from "react";
import "./ContactMe.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ContactMe extends Component {
  render() {
    return (
      <div className="container contactme">
        <div className="d-flex" style={{ height: "70vh", margin: "auto" }}>
          <div className="col-sm-3" />
          <div className="col-sm-6" style={{ margin: "auto" }}>
            <div style={{ textAlign: "center" }}>
              <label style={{ fontSize: 24, marginBottom: 30 }}>
                Write to me
              </label>
            </div>
            <form>
              <div className="form-group">
                <label for="formGroupExampleInput">Your name</label>
                <input
                  type="text"
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
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              </div>
              <div style={{ textAlign: "center", marginTop: 50 }}>
                <button
                  type="button"
                  style={{ fontSize: 20, color: "#7ef0ff" }}
                  class="btn btn-outline-primary"
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
          <div className="col-sm-3" />
        </div>
      </div>
    );
  }
}

export default ContactMe;
