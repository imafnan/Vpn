import './BannerThree.css'
import { IoIosCheckmarkCircle } from "react-icons/io";

const BannerThree = () => {
  return (
    <section className='BannerThree'>
        <div className="container">
            <div className="BannerThree_full">
                <div className="BannerThree_img">
                    <img src="public/img/Banner_three.png" alt="Img" />
                </div>
                <div className="BannerThree_text">
                    <h1>We Provide Many Features You Can Use</h1>
                    <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                    <ul>
                        <li><IoIosCheckmarkCircle className='li_Icon'/>&nbsp;&nbsp;Powerfull online protection.</li>
                        <li><IoIosCheckmarkCircle className='li_Icon'/>&nbsp;&nbsp;Supercharged VPN</li>
                        <li><IoIosCheckmarkCircle className='li_Icon'/>&nbsp;&nbsp;Internet without borders.</li>
                        <li><IoIosCheckmarkCircle className='li_Icon'/>&nbsp;&nbsp;No specific time limits.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerThree
