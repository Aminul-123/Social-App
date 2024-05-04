import React from "react";
import "./rightSidebar.css";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { Users } from "../../../dummyData";
import OnlineFriends from "./onlineFriends/OnlineFriends";

function RightSidebar() {
  return (
    <div className="containerRight">
      <div className="events">
        <MdOutlineEmojiEvents
          color="orange"
          fontSize={"39px"}
          className="emoji"
        />
        <p>
          Explore all the Events <strong>Alex organizes three Events</strong>
        </p>
      </div>
      <div className="ads">
        <p className="ads">
          <i>Ads</i>
        </p>
        <img src="./assets/images street.jpg" alt="ads" className="ads" />
      </div>
      <div>
        <h3>Online Friends</h3>

        <div className="online-friends">

         {Users.map((f) => (
          <OnlineFriends key={f.id} friend={f}/>
         ))}
        </div>
        
      </div>
    </div>
  );
}

export default RightSidebar;
