import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
const Skills = loadable(() => import("./Skills/Skills"));
const Fun = loadable(() => import("./Fun/Fun"));
const ContactMe = loadable(() => import("./ContactMe/ContactMe"));
const Projects = loadable(() => import("./Projects/Projects"));
const WorkExperience = loadable(() =>
  import("./WorkExperience/WorkExperience")
);
const Navbar = loadable(() => import("./Navbar/Navbar"));
const Home = loadable(() => import("./Home/Home"));

class Header extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fun" component={Fun} />
          <Route path="/skills" component={Skills} />
          <Route path="/workexperience" component={WorkExperience} />
          <Route path="/projects" component={Projects} />
          <Route path="/contactme" component={ContactMe} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Header;
