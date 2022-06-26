import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Header from "../Pages/Header";
import Reservas from "../Pages/Reservas";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/Reservas'} exact component={Reservas}/>
      </Switch>
    )
  }
}

export default Router