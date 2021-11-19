import Cloudinary from "../../helpers/Cloudinary/Cloudinary";

function ShowFoodPanel({ bodysArray }) {
  const { createImage } = Cloudinary();

  return (
    <div className="overflow-y-scroll h-full">
      {bodysArray.map((food) => {
        const { img, name, price, amount, delay, desc } = food;
        return (
          <div className="p-2">
            <div className="flex gap-2 justify-around ">
              <div className="w-52 rounded-2xl overflow-hidden shadow-item-custom border-2 border-indigo-600">
                {createImage(img)}
              </div>
              <div className="flex gap-5 flex-wrap flex-col">
                <h2 className="font-bold text-white tracking-wide text-xl">
                  {name}
                </h2>
                <p className="text-white font-bold tracking-wide text-lg border-2 border-indigo-600 text-center p-1 rounded-full custom-smooth-shadow">
                  Price: <span className="text-indigo-600 ">{price}$ </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-around p-2 gap-3">
              <p className="text-white tracking-wider text-lg">{desc}</p>
              <div className="flex gap-10 justify-around items-center text-center">
                <p className="text-white font-bold border-2 border-indigo-600 p-2 rounded-full custom-smooth-shadow">
                  Available amount:{" "}
                  <span className="text-indigo-600">{amount}</span>
                </p>
                <p className="text-white font-bold border-2 border-indigo-600 p-2 rounded-full custom-smooth-shadow">
                  Time: <span className="text-indigo-600">{delay} minutes</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowFoodPanel;
