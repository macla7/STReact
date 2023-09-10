import React from "react";
import Comment from "./Comment";

function Comments(props) {
  return (
    <div borderTopWidth="1" borderColor="myBorderGray" w="100%" mb="2">
      {props.comments.map((item) => {
        return <Comment comment={item} key={item.id} />;
      })}
    </div>
  );
}

export default Comments;
