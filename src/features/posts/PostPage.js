import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostAsync, selectPost } from "./postSlice";
import DP from "./DP";
import { format, formatDistanceToNow } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import Shift from "./Shift";
import Bids from "./Bids";
import ButtonGroup from "./ButtonGroup";
import Comments from "./Comments";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function Post() {
  const dispatch = useDispatch();
  const post = useSelector(selectPost);
  const [bids, setBids] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchPostAsync(id));
  }, []);

  useEffect(() => {
    setBids(post.bids);
    setComments(post.comments);
    setLikes(post.likes);
  }, [post]);

  return (
    <div id="post">
      <Helmet>
        <meta property="og:title" content="Fred has got a shift for swaps" />
        <meta
          property="og:image"
          content="https://live-production.wcms.abc-cdn.net.au/b0f14c5996d3128051c39bc1f6cbfe88?impolicy=wcms_crop_resize&amp;cropH=2813&amp;cropW=5000&amp;xPos=0&amp;yPos=0&amp;width=862&amp;height=485"
        />
      </Helmet>
      <div
        style={{
          margin: "1rem",
          backgroundColor: "white",
          borderRadius: "9px",
          padding: "0.5rem",
        }}
      >
        <div className="h-stack" style={{}}>
          {post.avatar_url && <DP uri={`${post.avatar_url}`} size={40} />}
          <div style={{ marginLeft: "2rem", flexGrow: 1 }}>
            <div className="v-stack">
              <div
                className="h-stack"
                style={{ justifyContent: "space-between" }}
              >
                <span style={{ color: "myDarkGrayText", fontWeight: "bold" }}>
                  {post.postor_name} -{" "}
                  {format(new Date(post.created_at), "d MMM")}
                </span>
              </div>

              <div
                className="h-stack"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    textAlign: "start",
                  }}
                >
                  <span
                    style={{
                      color: "#1f2937",
                      fontSize: "12px",
                    }}
                  >
                    {post.group_name}
                  </span>
                </div>
                <div className="h-stack" style={{ alignItems: "center" }}>
                  {new Date(post.ends_at) > new Date() ? (
                    <FontAwesomeIcon icon={faClock} color="#171717" />
                  ) : (
                    <FontAwesomeIcon icon={faLock} color="#171717" />
                  )}

                  <span
                    style={{
                      marginLeft: "4px",
                    }}
                  >
                    {new Date(post.ends_at) > new Date()
                      ? "Ends in " + formatDistanceToNow(new Date(post.ends_at))
                      : "Ended " +
                        formatDistanceToNow(new Date(post.ends_at)) +
                        " ago"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-stack">
          <div className="v-stack" style={{ flex: 1 }}>
            <div>
              <Shift
                shifts={post.shifts}
                editable={false}
                invalidShiftIds={[]}
              />

              <div style={{ padding: "0.5rem", textAlign: "left" }}>
                <span>{post.body}</span>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <Bids
              bids={bids}
              ended={new Date(post.ends_at) < new Date()}
              postId={post.id}
              reserveBid={{
                price: post.reserve,
                avatar_url: post.avatar_url,
                created_at: post.created_at,
                bidder_name: post.postor_name,
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "2.5rem",
            width: "100%",
            borderTopWidth: "1px",
            borderColor: "myBorderGray",
          }}
        >
          <div
            style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}
          >
            <div style={{ marginLeft: "1rem" }}>
              {/* <span>{likes.length} Likes</span> */}
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <div style={{ marginRight: "1rem" }}>
              <button
                style={{ flex: 1, border: "none", padding: "0" }}
                onClick={() => {
                  alert("To interact with the post further, download the app");
                }}
              >
                <span style={{ whiteSpace: "nowrap" }}>
                  {comments.length} Comments
                </span>
              </button>
            </div>
            <div style={{ whiteSpace: "nowrap" }}>
              <span>{bids.length} Bids</span>
            </div>
          </div>
        </div>

        <ButtonGroup postId={post.id} likes={likes} />

        <Comments comments={comments} />
      </div>
    </div>
  );
}
