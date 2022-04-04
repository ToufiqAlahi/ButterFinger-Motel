import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import UserReviews from './../../Hooks/UserReviews';

// * HomePAge Reviews 
const Reviews = () => {

    const [reviews, setReviews] = UserReviews();
    
    return (

        <div className='md:grid md:grid-cols-3 md:gap-8 mx-6 '>
        {
            reviews.slice(0,3).map(review => <ReviewCard
                key={review.id}
                review = {review}>
                
                </ReviewCard> )
        }
        </div>
    )
};

export default Reviews;