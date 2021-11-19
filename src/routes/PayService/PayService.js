import CardService from "../../components/CardService/CardService";
import HeaderNavBar from "../../components/headerNavBar/HeaderNavBar";

function PayService() {
  return (
    <>
      <HeaderNavBar></HeaderNavBar>
      <div className="flex flex-col items-center justify-center gap-10 p-4 lg:flex-row lg:w-screen lg:justify-around lg:h-screen">
        <CardService
          img={
            "https://res.cloudinary.com/smartrestaurantapi/image/upload/v1633880232/undraw_time_management_30iu_w1pjnr.png"
          }
          title={"Plan 1"}
          features={[
            "5 tables to manage",
            "Manage your menu",
            "Easy communication",
          ]}
          id={"planOne"}
          price={5000}
        ></CardService>
        <CardService
          img={
            "https://res.cloudinary.com/smartrestaurantapi/image/upload/v1633880235/undraw_buffer_wq43_pckkkb.png"
          }
          title={"Plan 2"}
          features={[
            "Unlimited tables to manage",
            "Manage your menu",
            "Easy communication",
          ]}
          id={"planTwo"}
          price={7500}
        ></CardService>
        <CardService
          img={
            "https://res.cloudinary.com/smartrestaurantapi/image/upload/v1633880237/undraw_Personal_goals_re_iow7_q7ojwk.png"
          }
          title={"Plan 3"}
          features={[
            "Unlimited tables to manage",
            "Manage your menu",
            "Stats about your restaurant",
          ]}
          id={"planThree"}
          price={8000}
        ></CardService>
      </div>
    </>
  );
}

export default PayService;
