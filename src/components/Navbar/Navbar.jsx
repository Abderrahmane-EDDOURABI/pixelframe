import React, { useEffect, useState } from 'react'
import './navbar.css';

import { FaYoutube, FaInstagramSquare, FaPinterestSquare, FaDribbbleSquare } from "react-icons/fa";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 0);
        };
    
        window.addEventListener("scroll", handleScroll);
        
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
    }
    const closeNavHandler = () => {
      if(window.innerWidth <= 600) {
        setOpenMenu(false);
      }
    }
  return (
    <nav className={scrolled ? "window-scrolled" : ""}>
    <div className="container nav__container">
        <a href="/" className='logo'>Pixel<span>Frame</span>.</a>
        <ul className={`nav__links ${openMenu ? "enabled" : "disabled"}`}>
            <li><Link to={"/"} onClick={closeNavHandler}>Home</Link></li>
            <li><Link to={"/store"} onClick={closeNavHandler}>Store</Link></li>
            <li><Link to={"/services"} onClick={closeNavHandler}>Services</Link></li>
            <li><Link to={"/contact"} onClick={closeNavHandler}>Contact</Link></li>
            <li><Link to={"/blog"} onClick={closeNavHandler}>Blog</Link></li>
            <li><Link to={"/gallery"} onClick={closeNavHandler}>Gallery</Link></li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
        </ul>
        <ul className="nav__socials">
            <li><a href="https://youtube.com" target='_blank'><FaYoutube/></a></li>
            <li><a href="https://instagram.com" target='_blank'><FaInstagramSquare/></a></li>
            <li><a href="https://pinterest.com" target='_blank'><FaPinterestSquare/></a></li>
            <li><a href="https://dribble.com" target='_blank'><FaDribbbleSquare/></a></li>
        </ul>
        {
          openMenu ? 
          <button className="nav__toggle-btn" id="nav__toggle-close" onClick={handleToggleMenu}>
              <IoIosClose/>
          </button>
          :
          <button className="nav__toggle-btn" id="nav__toggle-open" onClick={handleToggleMenu}>
              <IoIosMenu/>
          </button>
        }
    </div>
</nav>
  )
}

export default Navbar