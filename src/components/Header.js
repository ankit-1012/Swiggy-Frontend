import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const handleLoginButtonClick = () => {
        setBtnName(btnName === "Login" ? "Logout" : "Login");
    };

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />            
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to={"/"} >Home</Link>
                        </li>
                    <li>
                        <Link to={"/about"}>About Us</Link>
                        </li>
                    <li>
                        <Link to={"/contact"}>Contact Us</Link>
                        </li>
                    <li>
                        <Link>Cart</Link>
                        </li>
                </ul>
            </div>
            <button className="login-btn" onClick={handleLoginButtonClick}>
                {btnName}
            </button>
        </div>
    );
};

export default Header;
