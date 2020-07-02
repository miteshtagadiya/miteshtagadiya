import React from "react";
import "../styles/global.sass";
import loadable from "@loadable/component";
import windowSize from "react-window-size";
import "./index.sass";
const Profile = loadable(() => import("./Profile"));
const Header = loadable(() => import("./Header"));

const Index = (props) => (
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
          <Profile />
        </div>

        <div
          className="col-sm-12 col-lg-12 col-md-12 col-xl-9"
          style={{ background: "#00003f" }}
        >
          <header className="App-header">
            <Header />
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
