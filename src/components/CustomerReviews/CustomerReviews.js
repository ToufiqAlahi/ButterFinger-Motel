import React, { useEffect, useState } from 'react';

const CustomerReviews = () => {
    const [reviews, setReviews] = ([]);
    useEffect(() => {
        fetch('data.json')
    }, [])
    return (
        <div>

        </div>
    );
};

export default CustomerReviews;