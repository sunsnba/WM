import { REQUEST, RECEIVE, ERROR, SET_DETAILS } from "../constants/ActionTypes";

const locationListing = (
  state = {
    isLocating: false,
    location: null,
    regions: null,
    singleListing: JSON.parse(localStorage.getItem("listing")) || {}
  },
  action
) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLocating: true
      };
    case RECEIVE:
      return {
        ...state,
        isLocating: false,
        location: action.location,
        regions: action.regions
      };
    case ERROR:
      return {
        ...state,
        isLocating: false,
        error: action.error
      };
    case SET_DETAILS:
      localStorage.setItem("listing", JSON.stringify(action.listing));
      return {
        ...state,
        singleListing: action.listing
      };
    default:
      return state;
  }
};

export default locationListing;
