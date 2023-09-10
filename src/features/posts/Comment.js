import React from "react";
import DP from "./DP";
import { format } from "date-fns";

function Comment(props) {
  return (
    <div
      style={{
        marginTop: "4px",
        paddingLeft: "4px",
        paddingRight: "4px",
      }}
    >
      <div
        className="h-stack"
        style={{
          justifyContent: "space-between",
        }}
      >
        <div
          className="h-stack"
          style={{
            alignItems: "center",
          }}
        >
          {props.comment.avatar_url ? (
            <div py="1">
              <DP uri={`${props.comment.avatar_url}`} size={40} />
            </div>
          ) : (
            ""
          )}
          <div
            className="v-stack"
            style={{
              marginLeft: "4px",
              textAlign: "left",
            }}
          >
            <div
              className="v-stack"
              style={{
                backgroundColor: "#e5e7eb",
                borderRadius: "15px",
                padding: "4px",
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
            >
              <span color="myDarkGrayText" style={{ fontWeight: "700" }}>
                {props.comment.commentor_name}
              </span>
              <span>{props.comment.body}</span>
            </div>
            <span
              style={{
                fontSize: "10px",
                paddingLeft: "4px",
                color: "#4b5563",
                paddingTop: "2px",
              }}
            >
              {format(new Date(props.comment.created_at), "d MMM")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
