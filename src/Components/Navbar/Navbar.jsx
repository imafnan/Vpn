import { Link } from "react-router-dom";
import "./NavBar.css";
const Navbar = () => {
  return (
    <>
      <div className="main_menu">
        <div className="container">
          <div className="menu">
            <div className="logo">
                <img src="img/Logo.png" alt="LOGO" />
            </div>
            <div className="list">
                <ul>
                    <li><Link to={'#'} className="hover:text-red">About</Link></li>
                    <li><Link to={'#'} className="hover:text-red">Features</Link></li>
                    <li><Link to={'#'} className="hover:text-red">Pricing</Link></li>
                    <li><Link to={'#'} className="hover:text-red">Testimonials</Link></li>
                    <li><Link to={'#'} className="hover:text-red">Help</Link></li>
                </ul>
            </div>
            <div className="login">
                <Link className="singIn" to={'#'}>Sign In</Link>
                <Link className="SingUp" to={'#'}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
