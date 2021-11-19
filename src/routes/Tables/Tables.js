import FoodMenu from "../../components/FoodMenu/FoodMenu";
import Logic from "./Logic";

import { useApi } from "../../contexts/ApiContext";

function Tables() {
  const { arrayFood } = useApi();
  const { loading, data, setData } = Logic();

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <FoodMenu
          data={data}
          setData={setData}
          bodysArray={arrayFood}
        ></FoodMenu>
      )}
    </div>
  );
}

export default Tables;
