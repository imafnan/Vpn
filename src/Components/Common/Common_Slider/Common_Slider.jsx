import "./Common_Slider.css";
import { FaStar } from "react-icons/fa";

const Common_Slider = ({Slider_Img , Slider_Text_h1 , Slider_Text_p  , p_Tag_p }) => {
  return (
    <div className="Sliders">
      <div className="Slider_Full">
        <div className="Slider_One">
          <div className="Slider_Img">
            {Slider_Img}
          </div>
          <div className="Slider_Text">
            <h1>{Slider_Text_h1}</h1>
            <p>{Slider_Text_p}</p>
          </div>
        </div>
        <div className="Slider_Icon">
          <p>4.5</p>
          <FaStar className="Icons" />
        </div>
      </div>
      <div className="p_Tag">
        <p>{p_Tag_p}</p>
      </div>
    </div>
  );
};

export default Common_Slider;
