import logo from "../../images/logo.svg";
import facebook from '../../images/icon-facebook.svg';
import youtube from "../../images/icon-youtube.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

const Bottom = () => {
  return (
    <div className="bottom ">
        <div className="container bottom_container">

            <div className="first">
                <div className="logo_bottom"><img src={logo} alt="logo" /></div>
                <ul className="socials">
                    <li className="sci_icons"><a href="#"><img src={facebook} alt="facebook" /></a></li>
                    <li className="sci_icons"><a href="#"><img src={youtube} alt="youtube" /></a></li>
                    <li className="sci_icons"><a href="#"><img src={twitter} alt="twitter" /></a></li>
                    <li className="sci_icons"><a href="#"><img src={pinterest} alt="pinterest" /></a></li>
                    <li className="sci_icons"><a href="#"><img src={instagram} alt="instagram" /></a></li>
                </ul>
            </div>

            <div className="second">
                <ul className="pages">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>

            <div className="bottom_cta">
                <div className="hello">
                <button className="btn_secondary">Receive Invite</button>
                <p>Easybank. All rights reserved.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Bottom