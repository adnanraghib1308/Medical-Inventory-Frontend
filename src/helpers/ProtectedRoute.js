import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;
