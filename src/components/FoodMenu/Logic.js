function Logic({ data, setData }) {
  const handleTotal = (data) => {
    const values = data.food.map((food) => {
      const { price, quantity } = food;
      if (quantity < 1) {
        const total = price;
        return total;
      }
      const total = price * quantity;
      return total;
    });

    if (values.length !== 0) {
      const total = values.reduce((a, b) => a + b);
      setData({ ...data, total });
      return;
    }
    setData({ ...data, total: 0 });
  };

  const handleQuest = (model, action) => {
    let item = data.food.filter((food) => food.name === model.name);
    let filteredData = data.food.filter((food) => food.name !== model.name);

    if (item.length > 0) {
      if (action === "less") {
        let newBody = {
          ...model,
          quantity: item[0].quantity - 1,
        };

        if (newBody.quantity === 0) {
          let newData = { ...data, food: [...filteredData] };

          setData(newData);
          handleTotal(newData);
          return;
        }

        let newData = { ...data, food: [...filteredData, { ...newBody }] };

        setData(newData);
        handleTotal(newData);
        return;
      }

      let newBody = {
        ...model,
        quantity: item[0].quantity + 1,
      };

      let newData = { ...data, food: [...filteredData, { ...newBody }] };

      setData(newData);
      handleTotal(newData);
    }

    if (item.length === 0) {
      if (action === "less") {
        let newData = { ...data, food: [...filteredData] };
        setData(newData);
        handleTotal(newData);
        return;
      }

      let newBody = {
        ...model,
        quantity: 1,
      };

      let newData = { ...data, food: [...filteredData, { ...newBody }] };

      setData(newData);
      handleTotal(newData);
    }
  };

  return { handleQuest };
}

export default Logic;
