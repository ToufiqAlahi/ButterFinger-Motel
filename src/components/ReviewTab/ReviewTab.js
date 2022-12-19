import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import UserReviews from "./../../Hooks/UserReviews";

const ReviewTab = () => {
  const [reviews, setReviews] = UserReviews();
  return (
    <div className="text-center md:mt-24">
      <p className="text-slate-800 mt-12 font-bold text-4xl mb-8 ">All Reviews</p>
      <div className="border-b-4 border-slate-900 w-5/6 mb-28  mx-auto "></div>

      <div className="md:grid md:grid-cols-3 md:gap-8 md:mx-32 ">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewTab;
