import React from 'react';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (

        <div>

            <div className='md:relative my-20 md:mx-10  md:flex md:mt-20  '>
                <div className='mx-5 md:mt-24 '>
                    <h1 className='text-center text-6xl font-bold md:text-7xl md:text-left'>  In The Heart of Sylhet !</h1>
                    <h1 className='text-center text-6xl font-bold  md:text-7xl md:text-left text-fuchsia-800 my-5'>  ButterFinger Motel !</h1>

                    <p className='my-12 font-medium text-xl'>Framed by the towering natural wonder of Table Mountain, ButterFinger Motel is a tranquil enclave surrounded by mesmerizing waterways and a traditional harbour, moments from the vibrant Waterfalls.</p>

                    <button className='bg-fuchsia-800 rounded-3xl text-white p-5 mb-12 font-bold md:absolute md:mt-24 '> Pre-book Now</button>
                </div>
                <div className='mx-5 md:w-11/12 '>
                    <img className='md:h-5/6  md:ml-44' src="https://cdn.dribbble.com/users/1535237/screenshots/14325257/media/04a082db6cf639d2c1ea7fdb0a60a7ac.png?compress=1&resize=1200x900&vertical=top" alt="" />
                </div>
            </div>
            <Reviews> </Reviews>
        </div>

    );
};

export default Home;