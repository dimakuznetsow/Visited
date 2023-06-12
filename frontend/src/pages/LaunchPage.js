import { Link } from "react-router-dom";

import map from "../images/map.png";

function LaunchPage() {
  return (
    <>
      <body className="h-screen w-screen">
        <div className="grid place-items-center">
          <section className="m-4 xl:-ml-36 mxl:-ml-56 lxl:-ml-72 2xl:-ml-72 md:m-0 md:relative top-10 left-10 md:grid grid-cols-2 items-center">
            <div className="col-span-1 flex items-center">
              <img
                src={map}
                alt="map-logo"
                className="mr-2 md:mr-8 h-16 md:h-24"
              />
              <div className="font-lato font-bold text-5xl md:text-7xl tracking-wider text-slate-800">
                VISITED
              </div>
            </div>
            <div className="md:col-span-1 mt-6 md:mt-4 max-w-max col-start-1 row-start-2">
              <p className="font-lato font-extrabold text-2xl max-w-xl leading-tight tracking-wider text-slate-800 ">
                Welcome to Visited! With this app, you can easily access visa
                requirements for your passport and keep track of the countries
                you have visited.
              </p>
            </div>
          </section>
          <main className="md:flex md:mt-40 m-4 md:ml-10">
            <section className="flex flex-col justify-between items-center mt-14 md:mt-0 md:mr-10">
              <div className="font-lato font-medium text-base leading-6 tracking-wider text-slate-800 mb-4 md:mb-20 max-w-xl">
                With an account, you can add the countries you've visited to
                your map and easily keep track of your travel experiences. Sign
                up or log in now to unlock this feature and start mapping your
                travels.
              </div>

              <Link
                className="bg-sky-500 text-gray-100 text-xl py-3 px-8 rounded-md "
                to="/signup"
                onClick={() => localStorage.setItem("visited", true)}
              >
                Sign Up
              </Link>
            </section>
            <div className="h-120 w-2 bg-slate-800 mx-20 hidden md:block"></div>
            <section className="flex flex-col justify-center items-center mt-14 md:mt-0 md:mr-10">
              <div className="font-lato font-medium text-base leading-6 tracking-wider text-slate-800 mb-4 md:mb-20 max-w-xl">
                Check the visa requirements for your passport with just a click
                of a button. No more sifting through pages of information to
                figure out if you need a visa or not. Get the information you
                need quickly and efficiently, so you can focus on planning your
                trip.
              </div>
              <Link
                className="bg-slate-800 text-gray-100 text-xl py-3 px-8 rounded-md"
                to="/visas"
                onClick={() => localStorage.setItem("visited", true)}
              >
                Visa Requirements
              </Link>
            </section>
          </main>
        </div>
      </body>
    </>
  );
}

export default LaunchPage;
