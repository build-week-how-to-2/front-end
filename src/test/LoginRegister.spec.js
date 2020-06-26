import React from "react";
import {
	render,
	screen,
	fireEvent,
	findByLabelText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "../store/reducer";
import RegisterLogin from "../components/misc/RegisterLogin";

test("it ", async () => {
	const store = createStore(reducers, applyMiddleware(thunk));
	render(
		<Provider store={store}>
			<Router>
				<React.StrictMode>
					<RegisterLogin />
				</React.StrictMode>
			</Router>
		</Provider>
	);

	expect.stringMatching(/login/i);
	expect.stringMatching(/username/i);
	const users = screen.findByTestId(/usernamelogin/i);

	await userEvent.type(findByLabelText(/username/i), "andrew");
	// fireEvent.change(users, {
	// 	target: { value: "andrew" },
	// });

	// fireEvent.change(users, {
	// 	target: { name: "username", value: "lnametest" },
	// });
});

// import configureMockStore from "redux-mock-store";
// import * as actions from "../store/actions";
// // import fetchMock from "fetch-mock";
// import RegisterLogin from "../components/misc/RegisterLogin";

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// test("it renders Registration / Login page correctly", () => {
// afterEach(() => {
//     fetchMock.restore()
//   })
// 	render(<RegisterLogin />);
// });

// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.restore()
//   })

//   it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
//     fetchMock.getOnce('/todos', {
//       body: { todos: ['do something'] },
//       headers: { 'content-type': 'application/json' }
//     })

//     const expectedActions = [
//       { type: types.FETCH_TODOS_REQUEST },
//       { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
//     ]
//     const store = mockStore({ todos: [] })

//     return store.dispatch(actions.fetchTodos()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions)
//     })
//   })
// })
