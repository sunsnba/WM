import React from "react";
import styled from "styled-components";
import MobileCard from "./Mobile";
import DesktopCard from "./Desktop";

const CardWrapper = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  text-align: right;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
  outline: 2px solid gray;
  padding: 8px;
  background-color: white;
`;

const ListingCard = ({ listing, goToSingleListing }) => {
  const starPercentage = (listing.rating / 5) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  console.log(window.innerWidth);
  if (window.innerWidth < 600) {
    return (
      <CardWrapper onClick={() => goToSingleListing(listing.wmid)}>
        <MobileCard width={starPercentageRounded} listing={listing} />
      </CardWrapper>
    );
  } else {
    return (
      <CardWrapper onClick={() => goToSingleListing(listing.wmid)}>
        <DesktopCard width={starPercentageRounded} listing={listing} />
      </CardWrapper>
    );
  }
};

export default ListingCard;
