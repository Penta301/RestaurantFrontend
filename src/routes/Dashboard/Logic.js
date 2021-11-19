import { useApi } from "../../contexts/ApiContext";

import { useState, useEffect } from "react";

function Logic() {
  const { currentRestaurant, getFood } = useApi();
  const [quantityTables, setQuantityTables] = useState(0);
  const [show, setShow] = useState(false);

  const handleSetQuantityTables = (quantityTables) => {
    if (currentRestaurant.service.title === "plan1") {
      if (quantityTables > 5) {
        setQuantityTables(5);
        return;
      }
      setQuantityTables(quantityTables);
      return;
    }
    setQuantityTables(quantityTables);
  };

  useEffect(() => {
    getFood(currentRestaurant.restaurant.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRestaurant]);

  return {
    show,
    setShow,
    handleSetQuantityTables,
    quantityTables,
  };
}

export default Logic;
