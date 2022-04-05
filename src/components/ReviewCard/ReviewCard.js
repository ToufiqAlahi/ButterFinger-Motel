import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewCard = (props) => {
    const { name, rating, review_text, user_img, date } = props.review;

    return (
        <div className=' my-24 text-fuchsia-900'>
            <div className='shadow-xl shadow-neutral-300 border-4 rounded-3xl p-5 flex flex-col  '>
                <img className='w-36 h-36 rounded-full self-center -mt-24 border-8 border-neutral-300 ' src={user_img} alt="" />
                <p className='font-bold text-4xl  mb-8 border-fuchsia-600 py-4 rounded-3xl text-fuchsia-700'>{name}</p>
                <p className='font-bold text-4xl font-mono '>{rating}/5 </p>

                <Rating className="text-3xl mt-5"
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'gold' }} icon={faStar} />}
                    readonly
                ></Rating>

                <p className='text-2xl mt-10 '>
                    <span className='text-5xl font-bold text-fuchsia-600 text-left block font-serif -mb-14'>"</span>
                    <br />{review_text}
                    <span className='text-5xl font-bold text-fuchsia-600  font-serif text-right block'> "</span>
                </p>

                <p className='text-2xl mt-8 text-right font-bold font-mono text-fuchsia-900'>{date}</p>
            </div>
        </div>
    );
};

export default ReviewCard;