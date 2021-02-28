import instance from "./instance";
import { FETCH_TREASURE } from "./types";

export const fetchTreasure = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("treasures");
      dispatch({
        type: FETCH_TREASURE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
