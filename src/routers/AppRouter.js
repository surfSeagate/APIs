import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Weather from "../components/Weather";
import Surf from "../components/Surf";
import Pictures from "../components/Pictures";
import About from "../components/About";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = props => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/weather" component={Weather} />
        <Route path="/surf" component={Surf} />
        <Route path="/pictures" component={Pictures} />
        <Route path="/about" component={About} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
