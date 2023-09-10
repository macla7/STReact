import React from "react";

function DP({ uri, size }) {
  function getImageThumbnail(uri) {
    if (uri !== null) {
      let lastURIsegment = uri.split("/")[uri.split("/").length - 1];
      let lastURIsegmentNoFileType = lastURIsegment.split(".")[0];
      return lastURIsegmentNoFileType;
    }
  }

  return (
    <div>
      <img
        src={uri}
        // cacheKey={`${getImageThumbnail(uri)}`}
        placeholderContent={<p>bingo</p>}
        alt="avatar"
        style={{
          width: size,
          height: size,
          resizeMode: "contain",
          borderRadius: 100,
        }}
        resizeMode="cover"
      />
    </div>
  );
}

export default DP;
