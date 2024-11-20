import { FaUser } from "react-icons/fa";
import CountUp from 'react-countup';

import './Counter.css'
const Counter = () => {
  return (
    <section className='Counter'>
        <div className="container">
            <div className="Counter_Full">

                <div className="Counter_Item">
                    <div className="Counter_Icon"><FaUser /></div>
                    <div className="Counter_Text">
                        <div className="Counter_Number">
                        <CountUp end={99}  start={70} duration={10} />+
                        </div>
                        <p>Users</p>
                    </div>
                </div>

                <div className="Counter_Scl"></div>

                <div className="Counter_Item">
                    <div className="Counter_Icon"><FaUser /></div>
                    <div className="Counter_Text">
                        <div className="Counter_Number">
                        <CountUp end={30}  start={10} duration={10} />+
                        </div>
                        <p>Users</p>
                    </div>
                </div>

                <div className="Counter_Scl"></div>

                <div className="Counter_Item">
                    <div className="Counter_Icon"><FaUser /></div>
                    <div className="Counter_Text">
                        <div className="Counter_Number">
                        <CountUp end={50}  start={30} duration={10} />+
                        </div>
                        <p>Users</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Counter
