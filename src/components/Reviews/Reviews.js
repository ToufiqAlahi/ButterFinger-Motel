import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import UserReviews from './../../Hooks/UserReviews';

// * HomePAge Reviews 
const Reviews = () => {
    const [reviews, setReviews] = UserReviews();
    return (

        <div>
            <p className='text-fuchsia-800 font-bold text-7xl mt-48 mb-12 '>Customer Review</p>
            <div className='border-b-4 border-fuchsia-900 w-1/6  mx-auto mb-54 '></div>

            <div className='md:grid md:grid-cols-3 md:gap-8 mx-6  mt-48'>

                {
                    reviews.slice(0, 3).map(review => <ReviewCard
                        key={review.id}
                        review={review}>
                    </ReviewCard>)
                }
            </div>
        </div>


    )
};

export default Reviews;