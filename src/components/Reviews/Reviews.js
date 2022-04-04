import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import UserReviews from './../../Hooks/UserReviews';

const Reviews = () => {

    const [reviews, setReviews] = UserReviews();
    
    return (

        <div className='md:grid md:grid-cols-3 gap-4 mx-6 '>
        {
            reviews.map(review => <ReviewCard
                key={review.id}
                review = {review}>
                
                </ReviewCard> )
        }
        </div>
    )
};

export default Reviews;