import React, { useContext, useState } from 'react'
import './navbar.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { IoSunnyOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import { clickContext, themeContext, variableContext } from '../../App';

const Navbar = () => {
    const theme = useContext(themeContext);
    const toggleTheme = useContext(clickContext);
    const { cssVariables, handleThumbnailClick } = useContext(variableContext);
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState("");
    const [menu, setMenu] = useState("open");

    const handleClick = (e) => {
        // setMenu(menu=="close" ? "open" : "close");
        navigate(`/${e.target.nonce}`);
        setActiveItem(e.target.nonce);
        // console.log(e);
    }
    return (
        <>
            <header className={`navbar ${theme === "light" ? "light" : "dark"}`}>
                <img src="../logo.png" id='logo' alt="" />
                <ul className={`navigation ${menu == "close" ? "hidden" : ""} ${theme === "light" ? "light" : "dark"}`}>
                    <li className={activeItem === "" ? "active" : ""} style={activeItem === "" ? { backgroundColor: `${cssVariables}` } : {}} nonce='' onClick={(e) => handleClick(e)}>Home</li>
                    <li className={activeItem === "Products" ? "active" : ""} style={activeItem === "Products" ? { backgroundColor: `${cssVariables}` } : {}} nonce='Products' onClick={(e) => handleClick(e)}>Products</li>
                    <li className={activeItem === "About" ? "active" : ""} style={activeItem === "About" ? { backgroundColor: `${cssVariables}` } : {}} nonce='About' onClick={(e) => handleClick(e)}>About</li>
                    <li className={activeItem === "Contact" ? "active" : ""} style={activeItem === "Contact" ? { backgroundColor: `${cssVariables}` } : {}} nonce='Contact' onClick={(e) => handleClick(e)}>Contact</li>
                    <li className={activeItem === "Queries" ? "active" : ""} style={activeItem === "Queries" ? { backgroundColor: `${cssVariables}` } : {}} nonce='Queries' onClick={(e) => handleClick(e)}>Queries</li>
                </ul>
                    <GiHamburgerMenu className="md:hidden absolute top-3 right-5 size-6" onClick={()=>setMenu(menu == "close" ? "open":"close")}/>
                {theme === "light" ? <IoSunnyOutline onClick={toggleTheme} className="icon" /> : <FaMoon onClick={toggleTheme} className="icon" />}
            </header>

            <Outlet />
        </>
    )
}

export default Navbar