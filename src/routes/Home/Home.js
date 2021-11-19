import HeaderNavBar from "../../components/headerNavBar/HeaderNavBar";
import { BsArrowDown } from "react-icons/bs";

function Home({ isAuth, closeSession }) {
  return (
    <>
      <HeaderNavBar isAuth={isAuth} closeSession={closeSession}></HeaderNavBar>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center bg-gray-800 rounded-3xl m-5 gap-3 p-2 lg:w-11/12 lg:h-11/12 lg:justify-between lg:p-4 shadow-item-custom">
          <h1 className="text-3xl p-2 font-semibold text-indigo-600 text-center lg:text-4xl ">
            Restaurant Adminstrator
          </h1>
          <p className="tracking-wider w-52 text-center mb-5 text-white lg:text-3xl lg:w-9/12">
            We come to you with the best solution for your business, managing to
            provide a good service to your customers, and at the same time make
            your life easier.
          </p>
          <div className="text-white bg-indigo-600 p-5 rounded-full mb-4 text-3xl">
            <BsArrowDown />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-800 p-4">
        <div className="text-white text-center">
          <h2 className="text-3xl font-semibold">Better Administration</h2>
          <hr />
          <p className="mt-4 lg:text-xl">
            This service bring to you a system what can let you administrate
            your restaurant or your bar hundred times easier. Giving a dashboard
            where you can see your orders, create your virtual menu and much
            more...
          </p>
        </div>
        <div className="flex flex-wrap w-screen gap-4 justify-center mt-5">
          <img
            src="https://images.unsplash.com/photo-1563019880-9b2ea5d89a12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="restaurant"
            className="w-5/12 rounded-3xl shadow-2xl lg:w-2/12"
          />
          <img
            src="https://images.unsplash.com/photo-1541086095944-f4b5412d3666?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="coffe"
            className="w-5/12 rounded-3xl shadow-2xl lg:w-2/12"
          />
          <img
            src="https://images.unsplash.com/photo-1561221820-5ed0595bcb4c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="restaurant"
            className="w-5/12 rounded-3xl shadow-2xl lg:w-2/12"
          />
          <img
            src="https://images.unsplash.com/photo-1622192309290-cad13f863bcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="coffe"
            className="w-5/12 rounded-3xl shadow-2xl lg:w-2/12"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
