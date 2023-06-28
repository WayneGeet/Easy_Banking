import {useState} from "react";
import logo from "../images/logo.svg";
import hamburger from '../images/icon-hamburger.svg';
import close from "../images/icon-close.svg";

const Navbar = () => {
  const [shown, setShow] = useState(false);
  return (
    <div className = "navbar">
        <nav className="container nav_container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <ul className={`nav_items ${shown ? "show" : "hidden"} `}>
                <li className="mf nav_item"><a href="/home">Home</a></li> 
                <li className="nav_item"><a href="/about">About</a></li> 
                <li className="nav_item"><a href="/contact">Contact</a></li> 
                <li className="nav_item"><a href="/blog">Blog</a></li> 
                <li className="ml nav_item"><a href="/careers">Careers</a></li> 
                <li><button type="button" className="btn_primary nav_cta ">Request Invite</button></li>
            </ul>

            <div onClick={()=>setShow(prev => !prev)} className="hambuger"><img src={shown ? close : hamburger } alt="hambuger icon" /></div>
        </nav>
    </div>
  )
}

export default Navbar;