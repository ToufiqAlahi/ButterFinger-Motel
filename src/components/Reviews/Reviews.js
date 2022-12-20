import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import UserReviews from "./../../Hooks/UserReviews";

// * HomePAge Reviews
const Reviews = () => {
  const [reviews, setReviews] = UserReviews();
  return (
    <div>
      <p className="gradient-text max-h-screen text-center md:mt-10 font-bold text-4xl  mb-5 ">
        Customer Reviews
      </p>
      <div className="border-b-4 border-slate-900 w-1/6  mx-auto mb-54 "></div>

      <div className="md:grid md:grid-cols-3 md:gap-8 mx-6  mt-24">
        {reviews.slice(0, 3).map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
