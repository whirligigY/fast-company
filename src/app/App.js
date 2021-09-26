import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Users from "./components/users";
import Login from "./components/login";
import Main from "./components/main";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={Users} />
      </Switch>
    </>
  );
}

export default App;
