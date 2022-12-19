import React from "react";
import { Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen  my-8 md:my-0 md:mx-12 flex flex-col-reverse md:grid md:grid-cols-2 justify-center items-center">
        <div className="flex flex-col justify-center  ">
          <h1 className="text-center  text-2xl font-bold md:text-5xl md:text-left">
            In The Heart of Sylhet !
          </h1>
          <h1 className="text-center text-2xl font-bold  md:text-5xl md:text-left text-slate-700 ">
            ButterFinger Motel !
          </h1>
          <p className="my-4 md:mr-24 font-medium text-sm md:text-xl">
            Framed by the towering natural wonder of Table Mountain,
            ButterFinger Motel is a tranquil enclave surrounded by mesmerizing
            waterways and a traditional harbour, moments from the vibrant
            Waterfalls.
          </p>

          <button className=" bg-slate-800 hover:bg-transparent hover:text-slate-700 hover:font-bold hover:border-2 hover:border-slate-800 text-2xl rounded-3xl text-white px-7 md:w-56 py-3 font-bold md:mt-8 ">
            Book Now !
          </button>
        </div>
        <div className=" ">
          <img
            className=" mb-12 md:mb-0 rounded-xl md:w-[40vw] md:ml-20 shadow-[10px_10px_25px_0px_#302b58]"
            src="https://cdn.dribbble.com/users/1535237/screenshots/14325257/media/04a082db6cf639d2c1ea7fdb0a60a7ac.png?compress=1&resize=1200x900&vertical=top"
            alt=""
          />
        </div>
      </div>
      <Reviews> </Reviews>

      <button className="mx-auto bg-slate-800 hover:bg-transparent hover:text-slate-700 hover:font-bold hover:border-2 hover:border-slate-800 text-2xl rounded-3xl text-white px-7 md:w-56 py-3 font-bold md:mt-8 ">
        <Link to="review">See All </Link>
      </button>
    </div>
  );
};

export default Home;
