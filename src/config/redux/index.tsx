import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducer";
import createSagaMiddleware from "redux-saga";
import { watchSagas } from "./saga";
const saga = createSagaMiddleware();

const composeEnhancers =
  //@ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(saga));

const store = createStore(reducers, enhancer);

saga.run(watchSagas);

export default store;
