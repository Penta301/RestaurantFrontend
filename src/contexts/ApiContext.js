import React, { useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";

import { useAuth } from "./AuthContext";

const ApiContext = React.createContext();

export function useApi() {
  return useContext(ApiContext);
}

export function ApiProvider({ children }) {
  const { currentUser } = useAuth();

  const api = useMemo(() => {
    return axios.create({
      baseURL: "http://127.0.0.1:8000/api",
    });
  }, []);

  const [currentRestaurant, setCurrentRestaurant] = useState({
    service: false,
    restaurant: false,
  });

  const [restaurant, setRestaurant] = useState({
    owner: "",
    name: "",
    tables: 0,
  });

  const [apiError, setError] = useState("");
  const [arrayFood, setArrayFood] = useState([
    {
      img: "",
      name: "",
      price: 0,
      amount: 0,
      delay: 0,
      desc: "",
    },
  ]);
  const [foodModel, setFoodModel] = useState({
    img: "",
    name: "",
    price: 0,
    amount: 0,
    delay: 0,
    desc: "",
  });

  const createFood = async () => {
    const newBody = {
      ...foodModel,
      restaurant: currentRestaurant.restaurant.name,
    };

    console.log(newBody);

    try {
      await api.post("/create_food/", newBody);
      setFoodModel({
        img: "",
        name: "",
        price: 0,
        amount: 0,
        delay: 0,
        desc: "",
      });
    } catch (error) {
      new Error(error);
      throw Error;
    }
  };

  const getFood = async (restaurant) => {
    try {
      const { data } = await api.get(`/get_food/${restaurant}`);
      setArrayFood(data);
    } catch (error) {
      new Error(error);
      throw Error;
    }
  };

  const verifyRestaurant = async () => {
    try {
      const { data } = await api.post(
        `authentication/verify_restaurant/${currentUser.email}`,
        currentUser.email
      );
      setCurrentRestaurant(data);
    } catch {
      setCurrentRestaurant({});
      setError("Create a Restaurant");
    }
  };

  const createRestaurant = async (body) => {
    const newBody = { ...body, owner: currentUser.email };

    try {
      await api.post("/restaurant_create/", newBody);
      verifyRestaurant();
    } catch {
      setCurrentRestaurant({});
      setError("Failed creating the restaurant");
    }
  };

  const payService = async (body) => {
    const newBody = { ...body, owner: currentUser.email };
    console.log(newBody);

    try {
      const { data } = await api.post("/service/pay_service/", newBody);
      return data;
    } catch {
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    verifyRestaurant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const value = {
    api,
    arrayFood,
    setArrayFood,
    createFood,
    getFood,
    apiError,
    currentRestaurant,
    createRestaurant,
    payService,
    restaurant,
    setRestaurant,
    foodModel,
    setFoodModel,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}
