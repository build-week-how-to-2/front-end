import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "../store/reducer";
import App from "../App";

test("renders base App correctly", () => {
	const store = createStore(reducers, applyMiddleware(thunk, logger));
	render(
		<Provider store={store}>
			<Router>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Router>
		</Provider>
	);

	expect.stringMatching(/Dark/i);
});
