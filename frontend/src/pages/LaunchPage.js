import { Link } from "react-router-dom";

import map from "../images/map.png";

function LaunchPage() {
  return (
    <>
      <body className="bg-gray-100 h-screen w-screen overflow-x-hidden">
        <section className="relative top-10 left-10 grid grid-cols-2 items-center">
          <div className="col-span-1 flex items-center">
            <img src={map} alt="map-logo" className="mr-8 h-24" />
            <div className="font-lato font-bold text-7xl tracking-wider text-slate-800">
              VISITED
            </div>
          </div>
          <div className="col-span-1 mt-4 max-w-max col-start-1 row-start-2">
            <p className="font-lato font-extrabold text-2xl leading-tight tracking-wider text-slate-800 ">
              Welcome to Visited! With this app, you can easily access visa
              requirements for your passport and keep track of the countries you
              have visited.
            </p>
          </div>
        </section>
        <main className="flex mt-40  ml-10">
          <section className="flex flex-col justify-center items-center ">
            <div className="font-lato font-medium text-base leading-6 tracking-wider text-slate-800 mb-20">
              Check the visa requirements for your passport with just a click of
              a button. No more sifting through pages of information to figure
              out if you need a visa or not. Get the information you need
              quickly and efficiently, so you can focus on planning your trip.
            </div>
            <Link
              className="bg-slate-800 text-gray-100 text-xl py-3 px-8 rounded-md"
              to="/visas"
              onClick={() => localStorage.setItem("visited", true)}
            >
              Visa Requirements
            </Link>
          </section>
          <div className="h-120 w-2 bg-slate-800 mx-20"></div>
          <section className="flex flex-col justify-center items-center mr-20">
            <div className="font-lato font-medium text-base leading-6 tracking-wider text-slate-800 mb-20">
              With an account, you can add the countries you've visited to your
              map and easily keep track of your travel experiences. Sign up or
              log in now to unlock this feature and start mapping your travels.
            </div>

            <Link
              className="bg-sky-500 text-gray-100 text-xl py-3 px-8 rounded-md"
              to="/signup"
              onClick={() => localStorage.setItem("visited", true)}
            >
              Sign Up
            </Link>
          </section>
        </main>
      </body>
    </>
  );
}

export default LaunchPage;
