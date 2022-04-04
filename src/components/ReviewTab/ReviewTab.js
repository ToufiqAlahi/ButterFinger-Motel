import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import UserReviews from './../../Hooks/UserReviews';

const ReviewTab = () => {
    const [reviews, setReviews] = UserReviews();
    
    return (

        <div className='md:grid md:grid-cols-3 md:gap-8 mx-6 '>
        
        {
            reviews.map(review => <ReviewCard
                key={review.id}
                review = {review}>
                
                </ReviewCard> )

                
        }

        </div>
    )
};

export default ReviewTab;

