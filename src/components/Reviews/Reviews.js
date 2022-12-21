import React from "react";
import { Link } from "react-router-dom";
import ReviewCard from "../ReviewCard/ReviewCard";
import UserReviews from "./../../Hooks/UserReviews";

// * HomePAge Reviews
const Reviews = () => {
  const [reviews, setReviews] = UserReviews();
  return (
    <div className="flex flex-col">
      <p className="gradient-text max-h-screen text-center md:mt-10 font-bold text-4xl  mb-5 ">
        Customer Reviews
      </p>
      <div className="border-b-4 border-slate-900 w-3/4 md:w-1/6  mx-auto  "></div>

      <div className="md:grid md:grid-cols-3 md:gap-8 mx-0 md:mx-10  md:mt-20">
        {reviews.slice(0, 3).map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>

      <button className="rainbow-btn text-xl mx-auto  rounded-3xl text-white w-56 md:w-56 py-3 font-bold mt-4 md:mt-8 mb-10 md:mb-0 ">
        <Link to="review">See All </Link>
      </button>
     
    </div>
  );
};

export default Reviews;
