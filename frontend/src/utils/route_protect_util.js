import React from "react";
import { Redirect, Route } from "react-router-dom";



export const PrivateRoute = ({ component: Component, ...rest }) =>	 (
	  <Route
	    {...rest}
	    render={(props) =>
	      rest.needsAuth === true ? (
	        <Redirect to="/signup" />
	      ) : (
	        <Component {...props} />
	      )
	    }
	  />
	);

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.needsAuth !== true ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);
