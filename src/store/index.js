import { createStore, applyMiddleware } from "redux";
import createMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";
import rootSagas from "./sagas";

export const sagaMiddleware = createMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);
