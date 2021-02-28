import { FETCH_TREASURE } from "../actions/types";

const initialState = { treasures: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TREASURE:
      return {
        ...state,
        treasures: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
