import React from "react";
import Avatar from "../avatar";
import get from "lodash.get";
import { StarOuter, StarInner } from "../styles";

const MobileCard = ({ listing, width }) => {
  return (
    <React.Fragment>
      <div>
        <div> {listing.city} </div>
        <div> {listing.name} </div>
        <StarOuter>
          <StarInner style={{ width: width }}> </StarInner>
        </StarOuter>
        <div> {Math.round(listing.rating * 100) / 100} </div>
      </div>
      <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
    </React.Fragment>
  );
};

export default MobileCard;
