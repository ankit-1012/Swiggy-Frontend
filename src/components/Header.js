import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";


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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            <button className="login-btn" onClick={handleLoginButtonClick}>
                {btnName}
            </button>
        </div>
    );
};

export default Header;
