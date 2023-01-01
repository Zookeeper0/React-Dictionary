import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from "./components/pages/Mainpage";
import IndexHeader from "./components/Header/IndexHeader";
import IndexFooter from "./components/Footer/IndexFooter";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route path="/header" component={IndexHeader} />
        <Route path="/footer" component={IndexFooter} />
      </Switch>
    </Router>
  );
}

export default App;
