import React from "react";
import Money from "./Money";
import { formatDistanceToNow } from "date-fns";
import DP from "./DP";

function Bid(props) {
  function approvedText(approved, reserve) {
    if (reserve !== true) {
      if (approved == true) {
        return "Approved";
      } else if (approved == false) {
        return "Denied";
      } else {
        return "";
      }
    }
    return "";
  }
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        shadow: "1",
        flexDirection: "row",
        backgroundColor: props.bid.price < 0 ? "#EC3186" : "#ffe249",
        padding: "4px",
        marginBottom: "4px",
        marginTop: 0,
        height: "56px",
        borderRadius: "9px",
      }}
    >
      <div className="v-stack">
        <div className="h-stack" justifyContent="space-between">
          {props.bid.avatar_url ? (
            <DP uri={`${props.bid.avatar_url}`} size={40} />
          ) : (
            ""
          )}
          <div style={{ marginLeft: "4px" }}>
            <div className="v-stack">
              <div
                className="h-stack"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: props.bid.price < 0 ? "#ffe249" : "#4243ed",
                  }}
                >
                  {props.bid.bidder_name}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    color: "white",
                  }}
                >
                  {props.bidNum === 0 ? "🏆" : ""}
                </span>
              </div>
              <div className="h-stack">
                <span
                  style={{
                    fontWeight: 700,
                    color: props.bid.price < 0 ? "#ffe249" : "#4243ed",
                  }}
                >
                  {props.reserve === true
                    ? props.bid.price < 0
                      ? "Will Pay"
                      : "Asks for"
                    : props.bid.price === 0
                    ? "Will work for free"
                    : props.bid.price < 0
                    ? "Wants"
                    : "Offers"}
                  &nbsp;
                </span>
                {props.bid.price === 0 && props.reserve === true ? (
                  <span
                    bold
                    color={props.bid.price < 0 ? "#ffe249" : "#4243ed"}
                  >
                    nothing
                  </span>
                ) : props.bid.price === 0 ? (
                  ""
                ) : (
                  <Money
                    microDollars={props.bid.price}
                    color={props.bid.price < 0 ? "#ffe249" : "#4243ed"}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-stack"
          flexGrow={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: props.bid.price < 0 ? "#ffe249" : "#4243ed",
            }}
          >
            {props.reserve == true
              ? ""
              : formatDistanceToNow(new Date(props.bid.created_at), {
                  addSuffix: true,
                })}
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: props.bid.price < 0 ? "#ffe249" : "#4243ed",
            }}
          >
            {approvedText(props.bid.approved, props.reserve)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Bid;
