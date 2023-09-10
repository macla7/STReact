import React from "react";
import { format } from "date-fns";

function Shift({ navigation, shifts, editable, invalidShiftIds }) {
  function getDays(item) {
    if (
      format(new Date(item.start), "EEE do LLL") !==
      format(new Date(item.end), "EEE do LLL")
    ) {
      return (
        <>
          <span>Across Days:</span>
          <span>{format(new Date(item.start), "EEE do LLL")}</span>
          <span>{format(new Date(item.end), "EEE do LLL")}</span>
        </>
      );
    } else {
      return (
        <>
          <span>{format(new Date(item.start), "EEE do LLL")}</span>
        </>
      );
    }
  }
  return (
    <div w="100%">
      {shifts.map((item, index) => {
        return (
          <div
            borderColor="myBorderGray"
            style={{
              paddingLeft: "4px",
              paddingRight: "4px",
              marginLeft: "4px",
              marginRight: "4px",
              textAlign: "left",
            }}
          >
            <div className="v-stack">
              <span style={{ fontWeight: "700" }}>{item.position}</span>
              <div
                className="h-stack"
                style={{
                  justifyContent: "space-between",
                }}
              >
                <div className="v-stack" style={{ color: "#4b5563" }}>
                  {getDays(item)}
                </div>
                <div className="v-stack" style={{ color: "#4b5563" }}>
                  <span>{format(new Date(item.start), "p")}</span>
                  <span>{format(new Date(item.end), "p")}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Shift;
