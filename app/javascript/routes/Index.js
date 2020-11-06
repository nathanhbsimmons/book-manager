import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Bookpage from '../components/Bookpage';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/bookpage" exact component={Bookpage} />
    </Switch>
  </Router>
);
