import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // imported Provider Component from "react-redux"
import { createStore } from "redux"; //imported createStore function
import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />,
    </Provider>,

    document.querySelector("#root")
);

// make sure thatwe get the provider tag at the very top of our component hierarchy
// and we need to make sure thate we also pass a reference to our redux store thate gets all of our reducers
