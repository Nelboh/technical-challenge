import { createStore, compose } from "redux";
import initial from "./initial";
import reducers from "./reducers";
import persistState from "redux-localstorage";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    initial,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(persistState())
);

// store.subscribe(() => {
//     let state = store.getState();

// });

// store.dispatch({ type: "ADD_PLAYER" })


export default store;