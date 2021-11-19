import React from "react";
import Dashboard from "./routes/Dashboard/Dashboard";
import Home from "./routes/Home/Home";
import Tables from "./routes/Tables/Tables";
import ProtectedRouter from "./helpers/ProtectedRouter/ProtectedRouter";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import CreateRestaurant from "./routes/CreateRestaurant/CreateRestaurant";
import HeaderNavBar from "./components/headerNavBar/HeaderNavBar";
import PayService from "./routes/PayService/PayService";

import { useAuth } from "./contexts/AuthContext";
import { useApi } from "./contexts/ApiContext";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  const { currentUser } = useAuth();
  const { currentRestaurant } = useApi();

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home isAuth={currentUser} />
        </Route>
        <Route path="/signup">
          <HeaderNavBar></HeaderNavBar>
          <Signup></Signup>
        </Route>
        <Route path="/login">
          <HeaderNavBar></HeaderNavBar>
          <Login></Login>
        </Route>
        <Route path="/forgot-password">
          <HeaderNavBar></HeaderNavBar>
          <ForgotPassword></ForgotPassword>
        </Route>
        <Route path="/table">
          <Tables></Tables>
        </Route>
        <Route path="/table?number=numberTable&restaurant=restaurantName">
          <Tables></Tables>
        </Route>
        <ProtectedRouter
          path="/dashboard"
          Component={Dashboard}
          isAuth={
            currentUser &&
            currentRestaurant.restaurant &&
            currentRestaurant.service
          }
          routeRedirect="/pay-service"
        />
        <ProtectedRouter
          path="/pay-service"
          Component={PayService}
          isAuth={currentUser && currentRestaurant.restaurant}
          routeRedirect="/create-restaurant"
        />
        <ProtectedRouter
          path="/create-restaurant"
          Component={CreateRestaurant}
          isAuth={currentUser && !currentRestaurant.restaurant}
          routeRedirect={
            currentRestaurant.restaurant ? "/pay-service" : "/login"
          }
        />
      </Switch>
    </Router>
  );
}
