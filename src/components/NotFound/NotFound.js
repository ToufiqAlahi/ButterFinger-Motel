import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="page_404 justify-center content-center self-center ">
            <div className=" grid grid-cols justify-center">
                <div className="justify-center content-center  ">
                    <div className="  ">
                        <div className=" w-screen text-center content-center ">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>

                            </div>

                            <div className="contant_box_404">
                                <h3 className="h2">
                                    Look like you're lost
                                </h3>

                                <p>the page you are looking for not avaible!</p>

                                <a href="/home" className="link_404 text-bold">Go to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;