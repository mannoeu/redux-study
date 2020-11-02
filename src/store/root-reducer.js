import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import CoursesReducer from "./courses/courses.reducer";

const persistConfig = {
  key: "@root-shop",
  storage,
  whitelist: ["courses"],
};

const rootReducer = combineReducers({
  courses: CoursesReducer,
});

export default persistReducer(persistConfig, rootReducer);
