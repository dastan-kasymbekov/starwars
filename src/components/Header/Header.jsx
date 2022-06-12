import React from 'react';
import logo from '../../assets/images/logo.png'
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <Link to="/"><img src={logo} className="logo" alt=""/></Link>
        </div>
    );
};

export default Header;