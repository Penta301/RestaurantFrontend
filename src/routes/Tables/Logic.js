import { useState, useEffect, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useApi } from "../../contexts/ApiContext";
import socketIOClient from "socket.io-client";
const ENDPOINT = "ws://127.0.0.1:8001/";

function Logic() {
  const [loading, setLoading] = useState(true);

  const { getFood } = useApi();

  const useQuery = () => new URLSearchParams(useLocation().search);

  let query = useQuery();

  const handlePetition = useCallback(async () => {
    try {
      await getFood(query.get("restaurant"));
      setLoading(false);
    } catch {
      // Add global modal to errors
    }
  }, [query, getFood]);

  const [data, setData] = useState({
    table: query.get("number"),
    restaurant: query.get("restaurant"),
    total: 0,
    food: [],
  });

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log(socket.id);
  //   });

  //   socket.emit("join", () => {
  //     console.log("loggin");
  //   });

  //   socket.on("lobby", (data) => {
  //     console.log("lobby executed");
  //     setResponse(data);
  //   });

  //   socket.on("recibed", (data) => {
  //     console.log(data);
  //   });
  // }, [socket]);

  // const sendCount = () => {
  //   if (data.total === 0) {
  //     setError("You should pick something, before send the count");
  //     return;
  //   }

  //   socket.emit("newQuest", data);
  // };

  useEffect(() => {
    handlePetition();
  }, [query, handlePetition]);

  return {
    query,
    loading,
    data,
    setData,
  };
}

export default Logic;
