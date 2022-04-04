import React from 'react';

const ReviewCard = (props) => {
    const { name, rating, review_text, user_img } = props.review;

    return (

        <div className=' my-6'>
            <div className='border-4 p-5'>
                <img className='w-24 h-24 rounded-full ml-40 ' src={user_img} alt="" />
                
                <p className='font-bold'>{name}</p>

                <p className='font-bold'>{rating}.00</p>
                <p>{review_text}</p>

            </div>
        </div>


    );
};

export default ReviewCard;