import "./Banner.css";

const Banner = () => {
  return (
    <section className="Banner">
      <div className="container">
        <div className="Banner_full">
          <div className="Banner_text">
            <h1>
              Want anything to be easy with <span>LaslesVPN.</span>
            </h1>
            <p>
              Provide a network for all your needs with ease and fun using
              <span> LaslesVPN</span> discover interesting features from us.
            </p>
            <button>Get Started</button>
          </div>
          <div className="Banner_img">
            <img src="./img/BanImg.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
