import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewCard = (props) => {
    const { name, rating, review_text, user_img, date } = props.review;

    return (
        <div className=' my-6 '>
            <div className='border-8 rounded-3xl p-5 flex flex-col border-fuchsia-600 bg-fuchsia-100 '>
                <img className='w-36 h-36 rounded-full self-center mt-8 border-8 border-fuchsia-700 ' src={user_img} alt="" />
                <p className='font-bold text-4xl mt-8 mb-12 border-fuchsia-300 py-4 rounded-3xl bg-fuchsia-300 text-black'>{name}</p>
                <p className='font-bold text-4xl font-mono'>{rating}/5 </p>

                <Rating className="text-3xl mt-5"
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating>
                
                <p className='text-2xl mt-10 text-center'>{review_text}</p>
                <p className='text-2xl mt-14 text-right font-bold font-mono '>{date}</p>
            </div>
        </div>
    );
};

export default ReviewCard;