import React from "react";
import "./topbar.css";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <>
      <div className="topbarContainer">
        <div className="logo">
          <h2>Social App</h2>
        </div>
        <div className="search-bar">
          <CiSearch className="search-icon" />

          <input type="text" placeholder="Search for friend, post or video" />
        </div>
        <div className="button-homepage">
          <Link to="/" color="#fff">Homepage</Link>
          <div>Timeline</div>
        </div>
        <div className="three-icon">
          <div>
            <FaUser />
            <span className="topbarIconBadge">1</span>
          </div>
          <div>
            <BiMessageAltDetail />
            <span className="topbarIconBadge">3</span>
          </div>
          <div>
            <IoIosNotifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        <Link to="/profile-page" className="profile-pic">
          <img src="./assets/images-2.jpg" alt="profile" className="profile" />
        </Link>
      </div>
    </>
  );
}

export default Topbar;
