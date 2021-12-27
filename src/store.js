import { createStore } from "redux";

const start = {
  riders: [],
  selected: "",
};

const store = createStore((state = start, action) => {
  if (action.type === "RIDEOUT") {
    state = { ...state, riders: action.riders };
  }
  if (action.type === "ONE_BIKER") {
    state = { ...state, selected: action.selection };
  }
  return state;
});

export default store;
