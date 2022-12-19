import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import UserReviews from "./../../Hooks/UserReviews";

const ReviewTab = () => {
  const [reviews, setReviews] = UserReviews();
  return (
    <div>
      <p className="text-fuchsia-800 font-bold text-4xl mb-8 ">All Reviews</p>
      <div className="border-b-4 border-fuchsia-900 w-5/6 mb-28  mx-auto mb-54 "></div>

      <div className="md:grid md:grid-cols-3 md:gap-8 mx-6 ">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewTab;
