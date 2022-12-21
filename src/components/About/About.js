import React from "react";

const About = () => {
  return (
    <div className="max-h-screen mt-12 ">
      <div className="relative flex flex-col py-0 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:mb-0 lg:mx-0 lg:w-3/4 lg:max-w-full lg:absolute xl:px-0">
          {/* jfjwrh 7/12 */}
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full mb-10 md:mb-0"
            src="https://res.cloudinary.com/dkzygdfuu/image/upload/v1671635582/author/toufiq-cover.jpg"
            alt=""
          />
        </div>

        <div className="relative flex flex-col  items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-[4000px]">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none  rainbow-text text-center   md:w-[9.5em]   md:text-[60px] md:text-left rainbow-text">
              "Everything you
              <br />
              can imagine <span className="inline-block ">is real"</span>
            </h2>
            <p className="pr-0 mb-5 text-base text-gray-700 md:text-lg">
              Hello! I am Toufiq Alahi, born in Bangladesh and grew up in
              Jashore City. My blunt, straightforward nature has allowed me to
              succeed over the years as a human being. However, I've recognized
              my bluntness doesn't always serve my surroundings well when I'm
              delivering any kind of feedback. To combat this, I've worked to
              develop empathy and deeper relationships with the individuals I
              interact with.
            </p>
            <div className="flex items-center ">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://toufiq-alahi.netlify.app"
                className="inline-flex  items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide gradient-text transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
              >
                More about Toufiq
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
