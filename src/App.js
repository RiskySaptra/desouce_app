import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login, Home } from "./pages/Index.js";
// import { PublicRoute, PrivateRoute } from "./routing/Index.js";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home}/>
      </Switch>
    </>
  );
};

export default App;
