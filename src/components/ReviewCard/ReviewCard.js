import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ReviewCard.css'

const ReviewCard = (props) => {
  const { name, rating, review_text, user_img, date } = props.review;

  return (
    <div className=" my-20 md:my-8 text-slate-900 ">
      <div className="shadow-xl shadow-neutral-300 rounded-3xl p-5 flex flex-col gradient-border ">
        <img
          className="w-24 h-24 rounded-full self-center -mt-16 border-8 border-neutral-300 hover:w-36 hover:h-36 hover:-mt-24 mb-5 "
          src={user_img}
          alt=""
        />
        <p className="font-bold text-2xl  mb-2  py-4 rounded-3xl gradient-text ">
          {name}
        </p>
        <p className="font-bold text-xl font-mono ">{rating}/5 </p>

        <Rating
          className="text-xl mt-0"
          initialRating={rating}
          emptySymbol={<FontAwesomeIcon icon={faStar} />}
          fullSymbol={
            <FontAwesomeIcon style={{ color: "gold" }} icon={faStar} />
          }
          readonly
        ></Rating>

        <p className="text-xl mt-10 text-justify">
          <span className="text-5xl font-bold gradient-text  text-left block font-serif -mb-14">
            "
          </span>

          <br />

          <span className="text-justify text-lg">{review_text}</span>

          <span className="text-5xl font-bold gradient-text font-serif text-right block">
            {" "}
            "
          </span>
        </p>

        <small className="text-lg mt-2 text-right font-bold font-mono text-slate-900">
          {date}
        </small>
      </div>
    </div>
  );
};

export default ReviewCard;
