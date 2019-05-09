import * as types from "../constants/ActionTypes";
import * as config from "../constants/config";

export const requestLocation = coords => ({
  type: types.REQUEST,
  coords
});

export const receiveLocation = (coords, json) => ({
  type: types.RECEIVE,
  location: json.data.location,
  regions: json.data.regions
});

export const error = e => ({
  type: types.ERROR,
  error: e,
  message: "Oops something went wrong"
});

export const setDetails = listing => ({
  type: types.SET_DETAILS,
  listing
});

export const fetchDispensaryDetails = wmid => async dispatch => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  };
  try {
    const url = "https://api-g.weedmaps.com/wm/v2/listings/" + wmid;
    const res = await fetch(url, options);
    console.log("res from api", res);
    const data = await res.json();
    dispatch(setDetails(data.data.listing));
  } catch (e) {
    dispatch(error(e));
  }
};

export const locate = coords => async dispatch => {
  const params = [
    `include${encodeURIComponent("[]")}=regions.listings`,
    `latlng=${encodeURIComponent(`${coords.latitude},${coords.longitude}`)}`
  ];
  const url = `https://${config.API_HOST}/wm/v2/location?${params.join("&")}`;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  };

  try {
    dispatch(requestLocation(coords));
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    dispatch(receiveLocation(coords, data));
  } catch (e) {
    dispatch(error(e));
  }
};
