import { useState } from "react";
import { useApi } from "../../contexts/ApiContext";
import { useHistory } from "react-router-dom";

function Logic() {
  const [restaurant, setRestaurant] = useState({
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const { createRestaurant } = useApi();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await createRestaurant(restaurant);
      history.push("/");
    } catch {}
    setLoading(false);
  };

  return {
    restaurant,
    setRestaurant,
    handleSubmit,
    loading,
  };
}

export default Logic;
