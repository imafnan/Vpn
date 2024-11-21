import "./Contact.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Contact = () => {
  return (
    <section className="Contact bg-[#e7e7e7]">
      <div className="container">
        <div className="Contact_Full">
          <div className="Contact_One">
            <img src="public/img/Logo.png" alt="logo" />
            <p>
              LaslesVPN is a private virtual network that has unique features
              and has high security.
            </p>
            <div className="Contact_Main_Icon">
              <div className="Contact_Icon">
                <FaFacebookF />
              </div>
              <div className="Contact_Icon">
                <FaTwitter />
              </div>
              <div className="Contact_Icon">
                <TiSocialInstagram />
              </div>
            </div>
            <p className="Contact_p_tag">©2020LaslesVPN</p>
          </div>

          <div className="Contact_Two">
              <div className="Product">
                <h1>Product</h1>
                <ul>
                    <li>Download </li>
                    <li>Pricing </li>
                    <li>Locations </li>
                    <li>Server </li>
                    <li>Countries </li>
                    <li>Blog </li>
                </ul>
              </div>
              <div className="Engage">
                <h1>Engage</h1>
                <ul>
                    <li>LaslesVPN ? </li>
                    <li>FAQ </li>
                    <li>Tutorials </li>
                    <li>About Us </li>
                    <li>Privacy Policy </li>
                    <li>Terms of Service</li>
                </ul>
              </div>
              <div className="Earn_Money">
                <h1>Earn Money</h1>
                <ul>
                    <li>Affiliate</li>
                    <li>Become Partner</li>
                </ul>
              </div>
          </div>

        </div>
      </div>
    </section>
    
  );
};

export default Contact;
