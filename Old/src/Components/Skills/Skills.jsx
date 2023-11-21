import React, { Component } from "react";
import html5 from "../../assets/html5.png";
import css3 from "../../assets/css3.png";
import sass from "../../assets/sass.png";
import bootstrap from "../../assets/bootstrap.png";
import reactJs from "../../assets/react.png";
import javascript from "../../assets/javascript.png";
import es6 from "../../assets/es6.svg";
import npm from "../../assets/npm.png";
import ionic from "../../assets/ionic.png";
import java from "../../assets/java.svg";
import php from "../../assets/php.svg";
import mysql from "../../assets/mysql-icon.svg";
import postgresql from "../../assets/postgresql.svg";
import brackets from "../../assets/brackets.png";
import c from "../../assets/c.svg";
import cpp from "../../assets/cpp.svg";
import npp from "../../assets/npp.png";
// import datastructure from "../../assets/datastructure.svg";
import dbms from "../../assets/dbms.png";
import discord from "../../assets/discord.svg";
import postman from "../../assets/postman.svg";
// import github from "../../assets/github.png";
import gitlab from "../../assets/gitlab-icon.svg";
import reduxobservable from "../../assets/reduxobservable.png";
import linux from "../../assets/linux-icon.svg";
import slack from "../../assets/slack-icon.svg";
import visualstudio from "../../assets/visualstudio.svg";
import idea from "../../assets/intellij-idea.svg";
import ts from "../../assets/ts.png";
import nextjs from "../../assets/nextjs.png";
import Redux from "../../assets/redux.svg";
import loadable from "@loadable/component";
const ParticleComponent = loadable(() => import("../ParticleComponent"));
const SkillCard = loadable(() => import("./SkillCard/SkillCard"));
const SimplePieChart = loadable(() =>
  import("../Charts/SimplePieChart/SimplePieChart")
);

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: "Frontend",
    };
  }

  renderCards(data) {
    switch (data) {
      case "Frontend":
        return (
          <React.Fragment>
            <SkillCard img={html5} label={"HTML5"} />
            <SkillCard img={css3} label={"CSS3"} />
            <SkillCard img={sass} label={"SASS"} />
            <SkillCard img={bootstrap} label={"Bootstrap"} />
            <SkillCard img={javascript} label={"JavaScript"} />
            <SkillCard img={ts} label={"TypeScript"} />
            <SkillCard img={nextjs} label={"NextJS"} />
            <SkillCard img={es6} label={"ES6"} />
            <SkillCard img={reactJs} label={"ReactJs"} />
            <SkillCard img={Redux} label={"Redux"} />
            <SkillCard img={reduxobservable} label={"Redux Observable"} />
            <SkillCard img={npm} label={"NPM"} />
            <SkillCard img={ionic} label={"Ionic"} />
          </React.Fragment>
        );

      case "Backend":
        return (
          <React.Fragment>
            <SkillCard img={php} label={"PHP"} />
            <SkillCard img={java} label={"Java"} />
            <SkillCard img={mysql} label={"MySql"} />
            <SkillCard img={postgresql} label={"PostgreSQL"} />
          </React.Fragment>
        );

      case "Programming Langaages & Others":
        return (
          <React.Fragment>
            <SkillCard img={slack} label={"Slack"} />
            <SkillCard img={discord} label={"Discord"} />
            <SkillCard img={gitlab} label={"GitLab"} />
            <SkillCard img={c} label={"C"} />
            <SkillCard img={cpp} label={"C++"} />
            <SkillCard img={idea} label={"Intellij-Idea"} />
            <SkillCard img={dbms} label={"DMBS"} />
            <SkillCard img={linux} label={"Linux"} />
            <SkillCard img={postman} label={"Postman"} />
            <SkillCard img={visualstudio} label={"VSCode"} />
            <SkillCard img={brackets} label={"Brackets"} />
            <SkillCard img={npp} label={"Notepad++"} />
          </React.Fragment>
        );

      default:
        return (
          <React.Fragment>
            <SkillCard img={html5} label={"HTML5"} />
            <SkillCard img={css3} label={"CSS3"} />
            <SkillCard img={sass} label={"SASS"} />
            <SkillCard img={bootstrap} label={"Bootstrap"} />
            <SkillCard img={javascript} label={"JavaScript"} />
            <SkillCard img={ts} label={"TypeScript"} />
            <SkillCard img={nextjs} label={"NextJS"} />
            <SkillCard img={es6} label={"ES6"} />
            <SkillCard img={reactJs} label={"ReactJs"} />
            <SkillCard img={Redux} label={"Redux"} />
            <SkillCard img={reduxobservable} label={"Redux\nObservable"} />
            <SkillCard img={npm} label={"NPM"} />
            <SkillCard img={ionic} label={"Ionic"} />
          </React.Fragment>
        );
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <ParticleComponent />
        <div className="row">
          <div className="col-sm-5">
            <SimplePieChart
              onPlotClick={(data) => {
                this.setState({
                  chart: data,
                });
              }}
              onplot={true}
              style={{ marginTop: 50 }}
            />
          </div>
          <div className="col-sm-7">
            <div className="row">
              <div className="card" style={{ background: "transparent" }}>
                <div style={{ marginTop: 50 }}>
                  <div
                    className="row"
                    style={{ margin: "auto", justifyContent: "center" }}
                  >
                    {this.renderCards(this.state.chart)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
