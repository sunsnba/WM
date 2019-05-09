import React from "react";
import PropTypes from "prop-types";
import ListingCard from "../listing_card";

const ListingCards = ({ listings, goToSingleListing }) => (
  <React.Fragment>
    {listings.map(listing => (
      <ListingCard
        listing={listing}
        key={listing.id}
        goToSingleListing={goToSingleListing}
      />
    ))}
  </React.Fragment>
);

ListingCards.propTypes = {
  listings: PropTypes.array
};

ListingCards.defaultProps = {
  listings: []
};

export default ListingCards;
