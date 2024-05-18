import  { useState } from "react";
import BannerImage from "../assets/banner.png";
import Image from "./Image";
import "slick-carousel/slick/slick.css";


import Slider from "react-slick";
import Container from "./Container";

const Banner = () => {
  const [activeBtn, setactiveBtn] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (prev, next) => {
      setactiveBtn(next);
    },

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "6%",
          transform: "translateY(-50%)",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={ 
          i==activeBtn ?
          {
            width: "30px",
            color: "#262626",
            borderRight: "2px #252626 solid",
            padding: "15px 0",
          } :
          {
            width: "30px",
            color: "#F5F7F9",
            borderRight: "2px #F5F7F9  solid",
            padding: "15px 0",
          }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section>
      <Container>

      <Slider {...settings}>
        <Image className={` cursor-pointer`} src={BannerImage} />
        <Image className={` cursor-pointer`} src={BannerImage} />
        <Image className={` cursor-pointer`} src={BannerImage} />
      </Slider>
      </Container>
    </section>
  );
};

export default Banner;
