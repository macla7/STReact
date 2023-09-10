import React from "react";
import Bid from "./Bid";

function Bids(props) {
  let bids = [...props.bids];
  let sortedBids = bids.sort((a, b) => b.price - a.price);

  return (
    <div>
      <div className="v-stack" justifyContent="space-between">
        {sortedBids.length === 0 ? (
          <Bid
            bid={props.reserveBid}
            reserve={true}
            postorName={props.postor_name}
          />
        ) : (
          // some kind of scrollview implemetation here
          <div>
            {sortedBids.map((item, i) => {
              return <Bid bid={item} key={item.id} bidNum={i} />;
            })}
            <Bid bid={props.reserveBid} reserve={true} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Bids;
