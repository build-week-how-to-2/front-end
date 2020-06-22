import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./route/protectedRoute";
import Header from "./components/Header";
import Home from "./components/Home";
import RegisterLogin from "./components/RegisterLogin";
import AddHowTo from "./components/AddHowTo";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<Switch>
					<Route path={"/Login"} component={RegisterLogin}></Route>
					<ProtectedRoute exact path={"/"} component={Home} />
					<ProtectedRoute
						exact
						patch={"/AddHowTo"}
						component={AddHowTo}
					/>
				</Switch>
				<Footer />
			</div>
		</div>
	);
}

export default App;
