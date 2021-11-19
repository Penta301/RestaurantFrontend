import Logic from "./Logic";
import Cloudinary from "../../helpers/Cloudinary/Cloudinary";
import ContainerCard from "../questModal/ContainerCard";

function FoodMenu({ bodysArray, setData, data }) {
  const { createImage } = Cloudinary();
  const { handleQuest } = Logic({ data, setData });

  return (
    <div className="overflow-y-scroll h-full bg-gray-800">
      <ContainerCard data={data} setData={setData} />
      <div className="my-20">
        {bodysArray.map((food, index) => {
          const { img, name, price, delay, desc } = food;
          return (
            <div className="p-2" key={index}>
              <div className="flex gap-2 justify-around ">
                <div className="w-52 rounded-2xl overflow-hidden shadow-item-custom border-2 border-indigo-600">
                  {createImage(img)}
                </div>
                <div className="flex gap-5 flex-wrap flex-col">
                  <h2 className="font-bold text-white tracking-wide text-xl mx-2">
                    {name}
                  </h2>
                  <p className="text-white font-bold tracking-wide text-lg border-2 border-indigo-600 text-center p-1 rounded-full custom-smooth-shadow">
                    Price: <span className="text-indigo-600 ">{price}$ </span>
                  </p>
                  <p className="text-white font-bold border-2 border-indigo-600 p-2 text-sm rounded-full custom-smooth-shadow">
                    Time:{" "}
                    <span className="text-indigo-600">{delay} minutes</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-around p-2 gap-3">
                <p className="text-white tracking-wider text-lg">{desc}</p>
                <div className="flex justify-around items-center text-center">
                  <button
                    className="w-full rounded-l-2xl text-white p-1 brigth-shadow-red font-bold tracking-wide bg-red-600"
                    onClick={() =>
                      handleQuest({ price: parseInt(price), name }, "less")
                    }
                  >
                    Less
                  </button>
                  <button
                    className="w-full rounded-r-2xl p-1 text-white font-bold tracking-wider bg-indigo-600 brigth-shadow-indigo"
                    onClick={() =>
                      handleQuest({ price: parseInt(price), name }, "add")
                    }
                  >
                    More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FoodMenu;
