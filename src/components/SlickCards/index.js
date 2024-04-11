import React from "react";
import Slider from "react-slick";

import { BiMessageRounded } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// random bg colors
const randomBgColors = [
  ["#f7873a", "#fcbc90"],
  ["#f5cc26", "#fbeeb9"],
  ["#25b607", "#b1f0a5"],
  ["#12f0e9", "#d5f6f5"],
  ["#4f87f8", "#b9cffc"],
  ["#f417ed", "#f7c8f5"],
  ["#fa3656", "#f9bac4"],
];

const SlickCards = (props) => {
  const { cardList } = props;

  const settings = {
    dots: false,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    arrows: false,
    infinite: false,
    speed: 500,
    className: "mr-2",
  };

  //   random bg color selector function
  const getRandomBgColor = () => {
    const index = Math.floor(Math.random() * randomBgColors.length);
    const bgColors = randomBgColors[index];
    return `${bgColors[0]}, ${bgColors[1]}`;
  };

  const renderSliderCard = (cardDetails) => {
    const {
      id,
      name,
      title,
      description,
      followers,
      imageUrl,
      likes,
    } = cardDetails;

    //   non image card div style
    const divStyle = {
      backgroundImage: `linear-gradient(to bottom right, ${getRandomBgColor()})`,
      width: "100px",
      borderRadius: "10px",
      fontSize: "18px",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    return (
      <div key={id}>
        <div className="for-you-card-bg">
          {imageUrl === undefined ? (
            <div style={divStyle}>{name.charAt(0).toUpperCase()}</div>
          ) : (
            <img src={imageUrl} alt={name} className="for-you-card-img" />
          )}

          <div className="d-flex flex-column justify-content-between ml-3">
            <div>
              <p className="for-you-card-name">{name}</p>
              <p className="for-you-card-title">{title}</p>
              <p className="for-you-card-description">{description}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <p className="for-you-card-follower">
                  <BiMessageRounded className="mr-1" />
                  {followers}
                </p>
                {likes === undefined ? null : (
                  <p className="for-you-card-follower ml-2">
                    <BiLike className="mr-1" />
                    {likes}
                  </p>
                )}
              </div>
              <button type="button" className="three-dot-btn">
                <BsThreeDots />
              </button>
            </div>
          </div>
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

export default SlickCards;
