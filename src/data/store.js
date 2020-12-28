import { createStore } from "redux";
import initial from "./initial";
import reducers from "./reducers";

const store = createStore(
    reducers,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;