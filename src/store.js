import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import BooksReducer from "./Services/Reducer/booksReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    BooksReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;








