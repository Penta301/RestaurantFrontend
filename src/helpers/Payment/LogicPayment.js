import { useEffect } from "react";

function LogicPayment({ response_id, elementName }) {
  useEffect(() => {
    window.Mercadopago.setPublishableKey(
      "TEST-f32b57db-5d48-445d-b9f0-84b8609f20d9"
    );
    createCheckoutButton(response_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response_id]);

  function createCheckoutButton(response) {
    let script = document.createElement("script");

    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.type = "text/javascript";
    script.dataset.preferenceId = response;
    document.getElementById(elementName).innerHTML = "";
    document.querySelector(`#${elementName}`).appendChild(script);
  }

  return (
    <>
      <div className={elementName} id={elementName}></div>
    </>
  );
}

export default LogicPayment;
