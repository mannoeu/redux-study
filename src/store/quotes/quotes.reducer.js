import { addQuote, removeQuote } from "./courses.utils";

/* ------------------- */
const INITIAL_STATE = {
  data: [],
};

function QuotesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOAD_QUOTE":
      return {
        ...state,
        data: action.payload.data,
      };
    case "ADD_QUOTE":
      return {
        ...state,
        data: addQuote(state.data, action.payload),
      };
    case "REMOVE_QUOTE":
      return {
        ...state,
        data: removeQuote(state.data, action.payload),
      };
    default:
      return state;
  }
}

export default QuotesReducer;
