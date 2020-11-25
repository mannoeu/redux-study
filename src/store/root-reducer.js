import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import QuotesReducer from "./quotes/quotes.reducer";

const persistConfig = {
  key: "@root-quotes",
  storage,
  whitelist: ["quotes"],
};

const rootReducer = combineReducers({
  quotes: QuotesReducer,
});

export default persistReducer(persistConfig, rootReducer);
