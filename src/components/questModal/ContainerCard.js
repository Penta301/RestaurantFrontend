import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import QuestModal from "./QuestModal";

function ContainerCard({ data, setData }) {
  const [show, setShow] = useState(false);
  const handleSetter = () => {
    setShow(!show);
  };

  return (
    <AnimateSharedLayout type={"crossfade"}>
      <AnimatePresence>
        <motion.div className="flex items-center justify-around py-2 w-full fixed bg-gray-800 shadow-item-custom ">
          <motion.h1 className="text-white font-bold">
            This is the table {data.table}
          </motion.h1>
          {show ? (
            ""
          ) : (
            <motion.p
              layoutId={"label"}
              className="text-white font-bold border-2 border-indigo-600 text-center p-2 px-4 rounded-full custom-smooth-shadow cursor-pointer"
              onClick={handleSetter}
            >
              Total = <span className="text-indigo-600">{data.total}$</span>
            </motion.p>
          )}
        </motion.div>
        {show ? (
          <QuestModal data={data} setter={handleSetter} show={show} />
        ) : (
          ""
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default ContainerCard;
