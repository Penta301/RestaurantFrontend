import { motion } from "framer-motion";
import Logic from "./Logic";

function QuestModal({ setter, data, sendCount }) {
  const { width } = Logic();

  return (
    <motion.div
      animate={{ y: 150, x: width, opacity: 1 }}
      exit={{ opacity: 0 }}
      layoutId={"label"}
      className="flex fixed justify-center items-center"
    >
      <div className="flex flex-col bg-gray-800 p-6 gap-5 rounded-3xl shadow-item-custom border-indigo-600 border-4">
        <h2 className="text-white text-center font-bold tracking-wider text-3xl">
          Order
        </h2>
        <p className="text-white font-bold border-2 border-indigo-600 text-center p-2 px-4 rounded-full custom-smooth-shadow text-xl">
          Total = <span className="text-indigo-600">{data.total}$</span>
        </p>
        <div className="shadow-item-custom px-6 rounded-3xl max-h-60 overflow-y-scroll">
          <h2 className="text-indigo-600 text-center font-bold text-2xl py-2">
            Food
          </h2>
          <div className="py-2">
            {data.food.map((food, index) => {
              const { name, quantity } = food;
              return (
                <ul key={`${index}_${name}`}>
                  <li className="text-white text-lg text-left py-2">
                    {name}{" "}
                    <span className="border-2 p-1 px-2 rounded-full ml-5 text-indigo-600 border-indigo-600 custom-smooth-shadow text-center">
                      {quantity}
                    </span>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="flex justify-around items-center text-center">
          <button
            className="w-full rounded-l-2xl text-white p-1 brigth-shadow-red font-bold tracking-wide bg-red-600 cursor-pointer"
            onClick={setter}
          >
            Cancel
          </button>
          <button
            onClick={sendCount}
            className="w-full rounded-r-2xl p-1 text-white font-bold tracking-wider bg-indigo-600 brigth-shadow-indigo"
          >
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default QuestModal;
