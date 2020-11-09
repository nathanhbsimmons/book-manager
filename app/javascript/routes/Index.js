import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Book from '../components/Book';
import AddBook from '../components/AddBook';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/book" exact component={Book} />
      <Route path="/add_book" exact component={AddBook}/>
    </Switch>
  </Router>
);
