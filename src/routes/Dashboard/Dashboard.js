import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";
import { RiAddLine } from "react-icons/ri";
import { withRouter } from "react-router-dom";

import Logic from "./Logic";
import HeaderNavBar from "../../components/headerNavBar/HeaderNavBar";
import CreateFoodPanel from "../../components/CreateFoodPanel/CreateFoodPanel";
import ShowFoodPanel from "../../components/ShowFoodPanel/ShowFoodPanel";

import { useApi } from "../../contexts/ApiContext";

function Dashboard() {
  const { restaurant, arrayFood, currentRestaurant } = useApi();
  const { show, setShow } = Logic();

  return (
    <>
      <HeaderNavBar></HeaderNavBar>
      <div className="p-2">
        <h2
          className="font-bold tracking-wider underline text-center p-2 text-2xl"
          onClick={() => console.log(restaurant)}
        >
          Manage your Restaurant
        </h2>
        <div>
          <div className="flex flex-col justify-between h-24">
            <div className="flex items-center justify-around w-92 rounded-2xl shadow-item-custom bg-gray-800 p-2 border-2">
              <input
                type="text"
                className="bg-transparent outline-none text-white border-b-2"
                placeholder="Restaurant Name"
                value={currentRestaurant.restaurant.name}
              />
              <IconContext.Provider value={{ className: "text-white" }}>
                <FaChevronRight />
              </IconContext.Provider>
            </div>
            <div className="flex items-center justify-around w-92 rounded-2xl shadow-item-custom bg-gray-800 p-2 border-2">
              <input
                type="number"
                className="bg-transparent outline-none text-white border-b-2"
                placeholder="0"
                value={currentRestaurant.restaurant.tables}
              />
              <IconContext.Provider value={{ className: "text-white" }}>
                <FaChevronRight onClick />
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col border-2 items-center gap-3 mt-5 bg-gray-800 p-4 rounded-3xl shadow-item-custom">
              <h4 className="font-bold tracking-wider text-white">
                Tables codes:
              </h4>
              <div className="bg-gray-400 p-4 rounded-3xl overflow-y-scroll h-60 flex justify-center shadow-item-custom">
                <div className="flex flex-col items-center"></div>
              </div>
            </div>
            <div className="flex flex-col border-2 bg-gray-800 items-center my-5 rounded-3xl shadow-item-custom overflow-hidden">
              {/* Create and Show Food Panel */}
              <h4
                className="text-white font-bold text-xl p-2"
                onClick={() => console.log(arrayFood)}
              >
                {show ? "Create Food" : "Food"}
              </h4>
              <div className="overflow-y-scroll h-96 w-full">
                {show ? (
                  <CreateFoodPanel></CreateFoodPanel>
                ) : (
                  <ShowFoodPanel bodysArray={arrayFood}></ShowFoodPanel>
                )}
              </div>
            </div>
            <div className="flex w-screen items-end justify-end p-2 my-3">
              <div
                onClick={() => setShow(!show)}
                className="bg-gray-800 flex items-center justify-center rounded-full shadow-item-custom cursor-pointer lg:mx-5"
              >
                <IconContext.Provider
                  value={{
                    className:
                      "text-white h-10 w-10 border-2 rounded-full hover:text-indigo-600 hover:border-indigo-600 transition duration-300 ease-out",
                  }}
                >
                  <RiAddLine />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Dashboard);
