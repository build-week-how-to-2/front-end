import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./route/protectedRoute";
import Header from "./components/Header";
import Home from "./components/Home";
import RegisterLogin from "./components/RegisterLogin";
import AddHowTo from "./components/AddHowTo";
import EditHowTo from "./components/EditHowTo";
import Footer from "./components/Footer";
import Tos from "./components/Tos";

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
						path={"/AddHowTo"}
						component={AddHowTo}
					/>
					<ProtectedRoute
						exact
						path={"/Edit/:id"}
						component={EditHowTo}
					/>
					<Route path={"/Tos"} component={Tos} />
				</Switch>
				<Footer />
			</div>
		</div>
	);
}

export default App;
