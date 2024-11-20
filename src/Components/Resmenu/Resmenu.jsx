import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoIosHome, IoIosPricetags } from "react-icons/io";
import { MdMovieFilter } from "react-icons/md";
import { AiFillOpenAI, AiFillPlusSquare } from "react-icons/ai";
import { useState } from "react";
import "./Resmenu.css";

const Resmenu = () => {
  // State to handle menu 
  const [show, setShow] = useState(false);

  // Toggle menu 
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="Resmenu">
      <div className="container">
        <div className="Resmenu_full">
          {/* Logo Section */}
          <div className="Resmenu_Logo">
            <Link to="/">
              <img src="./img/Logo.png" alt="Logo" />
            </Link>
          </div>

          {/*   Menu Icon  */}
          <div className="Resmenu_icon">
            <FaBars onClick={handleShow} />

            {/* Menu List,  on 'show'  */}
            {show && (
              <div className="ResmenuList">
                <ul>
                  <li>
                    <Link to="#" className="flex items-center">
                      <IoIosHome className="text-black" />
                      <span>&nbsp;&nbsp;&nbsp;About</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center">
                      <MdMovieFilter className="text-black" />
                      <span>&nbsp;&nbsp;&nbsp;Features</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center">
                      <IoIosPricetags className="text-black" />
                      <span>&nbsp;&nbsp;&nbsp;Pricing</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center">
                      <AiFillOpenAI className="text-black" />
                      <span>&nbsp;&nbsp;&nbsp;Testimonials</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center">
                      <AiFillPlusSquare className="text-black" />
                      <span>&nbsp;&nbsp;&nbsp;Help</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Resmenu;
