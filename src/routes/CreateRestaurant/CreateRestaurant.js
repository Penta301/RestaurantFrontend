import Logic from "./Logic";
import HeaderNavBar from "../../components/headerNavBar/HeaderNavBar";

function CreateRestaurant() {
  const { restaurant, setRestaurant, handleSubmit, loading } = Logic();

  return (
    <>
      <HeaderNavBar></HeaderNavBar>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center h-4/5 border-2 py-4 gap-5 p-4 shadow-item-custom rounded-xl">
          <h1 className="font-bold text-2xl">Create Restaurant</h1>
          <div>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col gap-3 items-center"
            >
              <input
                type="text"
                className="outline-none bg-gray-800 p-2 rounded-xl uppercase text-white border-4 hover:border-gray-800 hover:bg-white hover:text-gray-800 focus:border-gray-800 focus:bg-white focus:text-gray-800 transition ease-out duration-300"
                value={restaurant.name}
                placeholder="Insert Restaurant Name"
                onChange={(e) =>
                  setRestaurant({ ...restaurant, name: e.currentTarget.value })
                }
              />
              <button
                type="submit"
                className="cursor-pointer bg-gray-800 p-2 rounded-xl uppercase font-bold text-white border-4 hover:border-gray-800 hover:bg-white hover:text-gray-800 transition ease-out duration-500"
                disabled={loading}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateRestaurant;
