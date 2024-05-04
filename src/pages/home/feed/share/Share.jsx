import React from "react";
import "./share.css";
import { IoMdPhotos } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrEmoji } from "react-icons/gr";

function Share() {
  return (
    <div className="shareContainer">
      <div>
        <img
          src="./assets/images-2.jpg"
          alt="myprofile"
          className="myprofile"
        />
        <input type="text" placeholder="Write about something" />
      </div>
      <hr />
      <div className="upload">
        <div className="upload-all">
          <div>
            <IoMdPhotos color="orange" />

            <h5>Photo or Video</h5>
          </div>
          <div>
            <FaHashtag color="violet" />

            <h5>Tag</h5>
          </div>

          <div>
            <FaLocationDot color="green" />

            <h5>Location</h5>
          </div>
          <div>
            <GrEmoji color="yellow" />

            <h5>Feelings</h5>
          </div>
        </div>

        <button className="share-btn">Share</button>
      </div>
    </div>
  );
}

export default Share;
