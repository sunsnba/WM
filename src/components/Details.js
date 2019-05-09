import React from "react";
import { connect } from "react-redux";
import { DetailsWrapper } from "./styles";

class Details extends React.Component {
  render() {
    console.log(this.props);
    const {
      avatar_image,
      name,
      city,
      rating,
      phone_number,
      business_hours,
      address
    } = this.props.singleListing;
    return (
      <DetailsWrapper>
        <img src={avatar_image.small_url} />
        <p>{name}</p>
        <p>{city}</p>
        <p>Rating: {Math.round(rating * 100) / 100}</p>
        <p>Phone Number: {phone_number}</p>
        <p>{address}</p>
        <div>
          Business Hours:
          <br />
          <p>
            Friday
            {" " + business_hours.friday.open} - {business_hours.friday.close}
            <br />
            Saturday
            {" " + business_hours.saturday.open} -{" "}
            {business_hours.saturday.close}
            <br />
            Sunday
            {" " + business_hours.sunday.open} - {business_hours.sunday.close}
            <br />
            Monday
            {" " + business_hours.monday.open} - {business_hours.monday.close}
            <br />
            Tuesday
            {" " + business_hours.tuesday.open} - {business_hours.tuesday.close}
            <br />
            Wednesday
            {" " + business_hours.wednesday.open} -{" "}
            {business_hours.wednesday.close}
            <br />
            Thursday
            {" " + business_hours.thursday.open} -{" "}
            {business_hours.thursday.close}
          </p>
        </div>
      </DetailsWrapper>
    );
  }
}
const mapStateToProps = state => ({
  singleListing: state.location.singleListing
});
export default connect(mapStateToProps)(Details);
