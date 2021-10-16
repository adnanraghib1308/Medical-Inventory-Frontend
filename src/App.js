import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// protected route
import ProtectedRoute from "./helpers/ProtectedRoute";

// base layout 
import BaseLayout from "./baseLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Billing from './pages/Billing';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';

import { history } from "./helpers/history";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <BaseLayout>
          <div className="container mt-3">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/profile" component={Profile} />
              <ProtectedRoute exact path="/inventory" component={Inventory} />
              <ProtectedRoute exact path="/bill" component={Billing} />
              <ProtectedRoute exact path="/sales" component={Sales} />
            </Switch>
          </div>
        </BaseLayout>

        {/* <AuthVerify logOut={logOut}/> */}
      </div>
    </Router>
  );
};

export default App;
