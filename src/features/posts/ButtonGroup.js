import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons/faMessage";
import Likes from "./Likes";
import BidIcon from "../../assets/images/noun-auction-4831153.svg";

function ButtonGroup({ postId, likes }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "40px",
        borderWidth: 0,
        borderTopWidth: "1px",
        borderColor: "#e5e7eb",
        borderStyle: "solid",
      }}
    >
      <Likes likes={likes} />

      <button
        flex="1"
        variant="unstyled"
        p="0"
        onClick={() => {
          alert("To interact with the post further, download the app");
        }}
      >
        <div className="h-stack" h="100%" alignItems="center">
          <FontAwesomeIcon icon={faMessage} color="#171717" />
          &nbsp;
          <span mx="2">Comment</span>
        </div>
      </button>

      <button
        flex="1"
        variant="unstyled"
        p="0"
        onClick={() => {
          alert("To interact with the post further, download the app");
        }}
      >
        <div className="h-stack" h="100%" alignItems="center">
          <div>
            {/* <AspectRatio ratio={{ base: 1 / 1, md: 1 / 1 }} h="100%"> */}
            {/* <BidIcon width="100%" height="100%" fill="#4243ed" /> */}
          </div>
          <span ml="-2" mr="3">
            Bid
          </span>
        </div>
      </button>
    </div>
  );
}

export default ButtonGroup;
