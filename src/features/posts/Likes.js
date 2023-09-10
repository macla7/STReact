import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";

function Likes(props) {
  return (
    <button
      style={{ padding: 0 }}
      onClick={() => {
        alert("To interact with the post further, download the app");
      }}
    >
      <div className="h-stack" styleh="100%" alignItems="center">
        <FontAwesomeIcon icon={faHeart} color="#171717" />
        &nbsp;
        <span mx="2">Like</span>
      </div>
    </button>
  );
}

export default Likes;
