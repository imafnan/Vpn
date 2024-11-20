import './Plan.css'
import { IoIosCheckmark } from "react-icons/io";


const Plan = () => {
  return (
    <section className="Plan">
      <div className="container">
        <div className="Plan_title">
            <h1>Choose Your Plan</h1>
            <p>Lets choose the package that is best for you and explore it happily and  cheerfully.</p>
        </div>

        <div className="Plan_full">

            <div className="Plan_One">
              <div className="Plan_img">
                <img src="public/img/PlanOne.png" alt="img" />
                </div>
                <h1>Free Plan</h1>
                <div className="Plan_p">
                  <ul>
                    <li><IoIosCheckmark className='Plan_icon'/><p>Unlimited Bandwitch</p></li>
                    <li><IoIosCheckmark className='Plan_icon'/><p>Encrypted Connection</p></li>
                    <li><IoIosCheckmark className='Plan_icon'/><p>No Traffic Logs</p></li>
                    <li><IoIosCheckmark className='Plan_icon'/><p>Works on All Devices</p></li>
                  </ul>
                </div>
                <h2 className='P_o'>Free</h2>
                <div className="Plan_button">
                  <button>Select</button>
                </div>
            </div>
            
            <div className="Plan_One">
              <div className="Plan_img">
                <img src="public/img/PlanTwo.png" alt="img" />
                </div>
                <h1>Free Plan</h1>
                <div className="Plan_p">
                  <ul>
                    <li><IoIosCheckmark className='Plan_icon'/><p>Unlimited Bandwitch</p></li>
                    <li><IoIosCheckmark className='Plan_icon'/><p>Encrypted Connection</p></li>
                    <li><IoIosCheckmark className='Plan_icon'/><p>No Traffic Logs</p></li>
                    <li><IoIosCheckmark className='Plan_icon'/><p>Works on All Devices</p></li>
                    <li><IoIosCheckmark className='Plan_icon'/><p>Connect Anyware</p></li>
                  </ul>
                </div>
                <h2 className='P_t'>$9 <span>/ mo</span></h2>
                <div className="Plan_button">
                  <button>Select</button>
                </div>
            </div>

            <div className="Plan_One">
              <div className="Plan_img">
                <img src="public/img/PlanThree.png" alt="img" />
                </div>
                <h1>Free Plan</h1>
                <div className="Plan_p">
                  <ul>
                    <li><IoIosCheckmark className='Plan_icon'/><p>Unlimited Bandwitch</p></li>
                    <li><IoIosCheckmark className='Plan_icon'/><p>Encrypted Connection</p></li>
                    <li><IoIosCheckmark className='Plan_icon'/><p>No Traffic Logs</p></li>
                    <li><IoIosCheckmark className='Plan_icon'/><p>Works on All Devices</p></li>
                    <li><IoIosCheckmark className='Plan_icon'/><p>Connect Anyware</p></li>
                    <li><IoIosCheckmark className='Plan_icon'/><p>Get New Features</p></li>
                  </ul>
                </div>
                <h2 className='p_th'>$12 <span>/ mo</span></h2>
                <div className="Plan_button">
                  <button>Select</button>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Plan
