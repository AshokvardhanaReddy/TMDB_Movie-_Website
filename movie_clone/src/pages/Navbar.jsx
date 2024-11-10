import styles from "../page-modules/Navbar.module.css";
import { IoSearchCircleOutline, IoClose } from "react-icons/io5";
import { LuMenuSquare } from "react-icons/lu";
import movie_logo from "../assets/movie_logo.png";

import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(true);

  const handleMenuIcon = () => {
    if (window.innerWidth <= 768) {
      setMenuIcon((prevState) => !prevState);
    }
  };

  const handleActiveStatus = ({ isActive }) => {
    return isActive ? { color: "red" } : { color: "white" };
  };

  return (
    <>
      <nav>
        <div className={styles.navbar_container}>
          <NavLink to="/">
            <img src={movie_logo} alt="website_logo" />
          </NavLink>

          <div
            className={
              menuIcon ? styles.navbar_menu : styles.navbar_menu_active
            }
          >
            <NavLink to="/" style={handleActiveStatus} onClick={handleMenuIcon}>
              Home
            </NavLink>
            <NavLink
              to="/genre"
              style={handleActiveStatus}
              onClick={handleMenuIcon}
            >
              Genre
            </NavLink>
            <NavLink
              to="/movies"
              style={handleActiveStatus}
              onClick={handleMenuIcon}
            >
              Movies
            </NavLink>
            <NavLink
              to="/tvshows"
              style={handleActiveStatus}
              onClick={handleMenuIcon}
            >
              TV Shows
            </NavLink>
          </div>
          <div className={styles.navbar_search}>
            <input placeholder="Search Movie" />
            <span>
              {" "}
              <IoSearchCircleOutline />
            </span>
          </div>
          <span className={styles.navbar_menu_icon} onClick={handleMenuIcon}>
            {menuIcon ? <LuMenuSquare /> : <IoClose />}
          </span>
        </div>
      </nav>
    </>
  );
};
