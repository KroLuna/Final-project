import "./NavBar.css";
import Hamburger from "../../assets/hamburger-black.svg";
import Logo from "../../assets/logo2.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = ({ onLogoClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar-wrapper">

      <img src={Logo} alt="Menu" className="logo" onClick={onLogoClick} />

      <div className="nav-links">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/post-story" className="nav-item">
          Post Story
        </Link>
        <Link to="/story-list" className="nav-item">
          Stories
        </Link>
        <Link to="/map" className="nav-item">
          Map
        </Link>
        <Link to="/about-us" className="nav-item">
          About us
        </Link>
      </div>
      <img
        src={Hamburger}
        alt="Logo"
        className="hamburger"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="dropdown">
          <Link to="/" className="dropdown-item">
            Home
          </Link>
          <Link to="/post-story" className="dropdown-item">
            Post Story
          </Link>
          <Link to="/story-list" className="dropdown-item">
            Stories
          </Link>
          <Link to="/map" className="dropdown-item">
            Map
          </Link>
          <Link to="/about-us" className="dropdown-item">
            About us
          </Link>
        </div>
      )}
    </div>
  );
};
