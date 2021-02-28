import { FETCH_GARBAGE } from "../actions/types";

const initialState = {
  garbage: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GARBAGE:
      return {
        ...state,
        garbage: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
