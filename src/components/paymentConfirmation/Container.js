import Confirmation from "./Confirmation";

import { useState } from "react";
import { useApi } from "../../contexts/ApiContext";

function Container({ body, id }) {
  const { payService } = useApi();

  const [show, setShow] = useState(true);
  const [responseId, setResponseId] = useState();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    const payment = await payService(body);

    if (payment) {
      setResponseId(payment);
      setShow(false);
      setLoading(false);
      return;
    }
  };

  return (
    <div className="w-full">
      {show ? (
        <button
          className="border-2 border-gray-600 p-2 w-full rounded-md hover:bg-gray-800 hover:text-white transition ease-out duration-300"
          onClick={() => handlePayment()}
          disabled={loading}
        >
          Buy
        </button>
      ) : (
        <Confirmation
          responseId={responseId}
          body={body}
          id={id}
          cb={() => setShow(true)}
        ></Confirmation>
      )}
    </div>
  );
}

export default Container;
