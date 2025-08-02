import { NavLink, Link } from "react-router-dom";
import { assets } from "../../../assets/frontend_assets/assets";
import "./navigation.css";
import { useState } from "react";

export default function Navigation() {
  const [menubar, setMenubar] = useState("false");

  const handleMenu = (menuState) => {
    setMenubar(menuState);
  };
  const NavRoute = {
    home: "/",
    collection: "/collection",
    about: "/about",
    login: "/login",

  };

  return (
    <nav className="navigation-panel">
      <div className="left-conatiner">
        <img src={assets.logo} className="logo-img" />
      </div>
      <div className="middle-container">
        <NavLink
          to={NavRoute.home}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          HOME
        </NavLink>

        <NavLink
          to={NavRoute.collection}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          COLLECTION
        </NavLink>
        <NavLink
          to={NavRoute.about}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          ABOUT
        </NavLink>
      </div>
      <div className="right-container">
        <div className="section seach-icon">
          <img src={assets.search_icon} />
        </div>
        <div className="section profile-icon">
          <Link to={NavRoute.login}>
            <img src={assets.profile_icon} />
          </Link>
        </div>
        <div className="section cart-icon">
          <img src={assets.cart_icon} />
        </div>

        <div onClick={() => handleMenu("true")} className="hamburger-img">
          <img src={assets.menu_icon} />
        </div>
      </div>

      <div className={menubar === "true" ? "menu-bar active" : "menu-bar"}>
        <div onClick={() => handleMenu("false")}>
          <img src={assets.cross_icon} />
        </div>

        <div>
          <NavLink
            to={NavRoute.home}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            HOME
          </NavLink>

          <NavLink
            to={NavRoute.collection}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            COLLECTION
          </NavLink>
          <NavLink
            to={NavRoute.about}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            ABOUT
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
