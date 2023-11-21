import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Index from "./Components/Index";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactGA.initialize("UA-162840601-2", { debug: true });
ReactGA.set({ page: window.location.pathname + window.location.hash }); // Update the user's current page
ReactGA.pageview(window.location.pathname + window.location.hash);

history.listen((location) => {
  ReactGA.set({ page: location.pathname + location.hash }); // Update the user's current page
  ReactGA.pageview(location.pathname + location.hash); // Record a pageview for the given page
});

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
