import { FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from "./Action";

const initialState = {
  users: [],
  error: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: null,
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
