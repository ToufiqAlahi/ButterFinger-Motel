import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import UserReviews from "./../../Hooks/UserReviews";

const ReviewTab = () => {
  const [reviews, setReviews] = UserReviews();
  return (
    <div className="text-center md:mt-24 mx-6 md:mx-12">
      <p className="gradient-text mt-12 max-h-screen text-center md:mt-10 font-bold text-4xl  mb-5  ">
        All Customer Reviews
      </p>
      <div className="border-b-4 border-slate-900 w-3/4 md:w-1/6  mx-auto   "></div>

      <div className="md:grid md:grid-cols-3 md:gap-8 mx-0 md:mx-10  md:mt-20">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewTab;
