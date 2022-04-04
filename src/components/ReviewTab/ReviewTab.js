import React from 'react';
import { Link } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard';
import UserReviews from './../../Hooks/UserReviews';

const ReviewTab = () => {
    const [reviews, setReviews] = UserReviews();
    
    return (

        <div className='md:grid md:grid-cols-3 md:gap-8 mx-6 '>
        
        {
            reviews.map(review => <ReviewCard
                key={review.id}
                review = {review}
                ></ReviewCard> )

                
        }
        
        <Link to="review" className='text-2xl font-bold P-4 text-fuchsia-900  hover:text-white hover:p-0 hover:bg-fuchsia-700'> See All </Link>
        
            
        </div>
    )
};

export default ReviewTab;

