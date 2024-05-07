import React from "react";
import "./leftSidebar.css";
import { MdRssFeed } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";
import { FaDiscourse } from "react-icons/fa6";
import { Users } from "../../../dummyData";
import CloseFriend from "./closeFriend/CloseFriend";
import {Link} from "react-router-dom";

function LeftSidebar() {
  return (
    <div className="containerLeft">
      <div className="cont">
        <div>
          <MdRssFeed />
          <h4>Feed</h4>
        </div>
        <div>
          <BsChatSquareTextFill  color="green"/>
          <h4>Chats</h4>
        </div>
        <div>
          <FaVideo color="red" />
          <h4>Videos</h4>
        </div>
        <div>
          <MdGroups color="blue" />
         <Link to= '/groups'>
         <h4>Groups</h4>
         </Link>
        </div>
        <div>
          <FaBookmark color="rgb(244, 8, 0)" />
          <h4>Bookmarks</h4>
        </div>
        <div>
          <FaRegQuestionCircle color="gold" />
          <h4>Questions</h4>
        </div>
        <div>
          <MdOutlineWork color="rgb(9, 199, 255)" />

          <h4>Jobs</h4>
        </div>
        <div>
          <MdEmojiEvents color="yellow" />

          <h4>Events</h4>
        </div>
        <div>
          <FaDiscourse color="orange" />

          <h4>Courses</h4>
        </div>
        <button className="show-more-btn">Show more</button>
      <hr />
      <div className="connected-people">
     
                {Users.map((u) => (
                  <CloseFriend key={u.id} user={u}/>
                ))}
        </div>
      </div>
      
    </div>
  );
}

export default LeftSidebar;
