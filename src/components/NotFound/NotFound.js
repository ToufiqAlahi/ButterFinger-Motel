import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
      <div className="page_404 max-w-[150vw] flex justify-center items-center">
        <div className=" grid grid-cols justify-center">
          <div className="justify-center content-center  ">
            <div className="  ">
              <div className=" w-screen text-center content-center ">
                <div className="four_zero_four_bg">
                  <h1 className="text-center gradient-text font-extrabold">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2 text-2xl font-bold gradient-text">
                    Looks like you're lost...
                  </h3>

                  <p className="h2 text-2xl font-bold my-5 gradient-text">
                    The page you are looking for is not available!
                  </p>

                  <a
                    className=""
                    href="https://butterfinger-motel-by-toufiq.netlify.app/"
                  >
                    <button className="rainbow-btn text-2xl border-2 rounded-3xl text-white px-7 md:w-64 py-3 font-bold md:mt-8 mb-10 ">
                      Back to Home
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NotFound;