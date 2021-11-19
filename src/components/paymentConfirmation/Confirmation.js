import LogicPayment from "../../helpers/Payment/LogicPayment";

function Confirmation({ responseId, body, cb, id }) {
  return (
    <div className="flex flex-col gap-5 shadow-item-custom p-5 rounded-xl bg-gray-800">
      <p className="text-xl tracking-wide text-white">
        You are going to buy: {body.title}
      </p>
      <div className="flex w-full items-center justify-around">
        <button
          className="border-2 p-2 rounded-md border-red-500 text-white hover:bg-red-800 transition ease-out duration-300"
          onClick={cb}
        >
          Cancel
        </button>
        <LogicPayment elementName={id} response_id={responseId}></LogicPayment>
      </div>
    </div>
  );
}

export default Confirmation;
