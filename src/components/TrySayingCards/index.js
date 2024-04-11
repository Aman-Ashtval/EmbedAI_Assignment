import React from "react";
import Slider from "react-slick";

import { LuDot } from "react-icons/lu";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrySayingCards = (props) => {
  const { cardList } = props;
  const settings = {
    dots: false,
    slidesToShow: 2.7,
    slidesToScroll: 3,
    arrows: false,
    infinite: false,
    speed: 500,
    className: "mr-2 mt-4 mb-4",
  };

  const renderSliderCard = (cardDetails) => {
    const { id, name, user, chats, likes, imageUrl, questions } = cardDetails;

    return (
      <div key={id}>
        <div className="try-saying-card-bg">
          <div className="d-flex align-items-center">
            <img src={imageUrl} alt={name} className="try-saying-card-img" />
            <div className="ml-3">
              <p className="try-saying-card-name">{name}</p>
              <p className="try-saying-card-title">
                {user}
                <LuDot />
                {chats} chats
                <LuDot />
                {likes} likes
              </p>
            </div>
          </div>
          {questions.map((each) => (
            <p key={each.id} className="question-p">
              {each.question}
            </p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cardList.map((each) => renderSliderCard(each))}
      </Slider>
    </div>
  );
};

export default TrySayingCards;
