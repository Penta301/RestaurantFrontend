import Container from "../paymentConfirmation/Container";

function CardService({ img, title, features, id, price }) {
  return (
    <div className="flex flex-col justify-center items-center p-4 rounded-2xl shadow-item-custom gap-2">
      <div className="flex justify-center items-center w-52 h-52">
        <img src={img} alt="options pay" />
      </div>
      <h1 className="text-xl font-bold tracking-wide">{title}</h1>
      <div className="w-full">
        <h2>Features:</h2>
        <ul className="px-5 mt-2">
          {features.map((feature) => (
            <li className="font-bold text-indigo-600">{feature}</li>
          ))}
        </ul>
      </div>
      <h3 className="font-light">Price: {price}$</h3>
      <Container body={{ title, unit_price: price }} id={id}></Container>
    </div>
  );
}

export default CardService;
