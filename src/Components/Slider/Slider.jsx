import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Common_Slider from "../Common/Common_Slider/Common_Slider";

const Main_Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    responsive:[{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  
  return (
    <div className="container">
      <div className="slider-container Slider_Main">
        <Slider {...settings}>
          <div className="Borders">
            <Common_Slider
              Slider_Img={<img src="public/img/HappyOne.png"></img>}
              Slider_Text_h1={"Yessica Christy"}
              Slider_Text_p={"Shanxi, China"}
              p_Tag_p={
                "“I like it because I like to travel far and still can connect with high speed.”."
              }
            />
          </div>
          <div className="Borders">
          <Common_Slider
              Slider_Img={<img src="public/img/HappyTwo.png"></img>}
              Slider_Text_h1={"Viezh Robert"}
              Slider_Text_p={"Warsaw, Poland"}
              p_Tag_p={
                "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
              }
            />
          </div>
          <div className="Borders">
          <Common_Slider
              Slider_Img={<img src="public/img/HappyThree.png"></img>}
              Slider_Text_h1={"Kim Young Jou"}
              Slider_Text_p={"Seoul, South Korea"}
              p_Tag_p={
                "“This is very unusual for my business that currently requires a virtual private network that has high security.”."
              }
            />
          </div>
          <div className="Borders">
          <Common_Slider
              Slider_Img={<img src="public/img/HappyOne.png"></img>}
              Slider_Text_h1={"Yessica Christy"}
              Slider_Text_p={"Shanxi, China"}
              p_Tag_p={
                "“I like it because I like to travel far and still can connect with high speed.”."
              }
            />
          </div>
          <div className="Borders">
          <Common_Slider
              Slider_Img={<img src="public/img/HappyTwo.png"></img>}
              Slider_Text_h1={"Viezh Robert"}
              Slider_Text_p={"Warsaw, Poland"}
              p_Tag_p={
                "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
              }
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Main_Slider;
