
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from "./reducers"

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // THIS WINDOW LINK IS HOW WE CONNECT THE REDUX DEBUGGING TOOL
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;