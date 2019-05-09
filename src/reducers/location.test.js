import reducer from "./location";
import * as type from "../constants/ActionTypes";

describe("reducer", () => {
  it("has default state", () => {
    expect(
      reducer(
        {
          isLocating: false,
          location: null,
          regions: null,
          singleListing: JSON.parse(localStorage.getItem("listing")) || {}
        },
        { type: "undefiend" }
      )
    ).toEqual({
      isLocating: false,
      location: null,
      regions: null,
      singleListing: JSON.parse(localStorage.getItem("listing")) || {}
    });
  });
});
