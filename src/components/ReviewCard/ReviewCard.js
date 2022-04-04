import React from 'react';

const ReviewCard = (props) => {
    const { name, rating, review_text, user_img } = props.review;

    return (

        <div className=' my-6'>
            <div className='border-4 rounded-2xl p-5 flex flex-col border-fuchsia-600 '>
                <img className='w-36 h-36 rounded-full self-center mt-8' src={user_img} alt="" />
                
                <p className='font-bold text-4xl mt-4 mb-12'>{name}</p>

                <p className='font-bold text-4xl font-mono'>{rating}.00</p>
                <p  className='text-2xl mt-10 '>{review_text}</p>

            </div>
        </div>


    );
};

export default ReviewCard;