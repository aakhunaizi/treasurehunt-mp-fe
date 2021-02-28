import instance from "./instance";
import { FETCH_GARBAGE } from "./types";

export const fetchGarbage = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("garbage");
      dispatch({
        type: FETCH_GARBAGE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
