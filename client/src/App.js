import React from "react";
import history from "./utils/history";
import NavBar from "./components/NavBar/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import Home from "../src/pages/Login/Home";


const App = () => (
  <div className="App">
    <Router history={history}>
      <header>
        <NavBar/>
      </header>
      {/* <DiabetesChart/> */}
      <Switch>
        {/* <Route exact path="/home" component={Home} /> */}
        <Route path="/" exact />
        <PrivateRoute exact path="/main" component={Main} />
      </Switch>

    </Router>
  </div>
)

export default App;