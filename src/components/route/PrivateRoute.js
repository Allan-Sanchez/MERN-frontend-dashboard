import React, { useEffect, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

const PrivateRoute = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { authenticated, userCurrently } = authContext;

  useEffect(() => {
    userCurrently();
    //eslint-disable-next-line
  }, []);
  return (
    <Route
      {...props}
      render={(props) =>
        !authenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
