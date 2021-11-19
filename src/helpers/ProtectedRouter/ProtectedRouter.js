import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRouter({
  isAuth,
  Component,
  PropsComponent,
  routeRedirect,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...PropsComponent} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: routeRedirect,
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRouter;
