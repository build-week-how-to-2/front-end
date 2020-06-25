import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./route/protectedRoute";
import Header from "./components/headNfoot/Header";
import Bars from "./components/headNfoot/Bars";
import Footer from "./components/headNfoot/Footer";
import Home from "./components/Home";
import RegisterLogin from "./components/misc/RegisterLogin";
import AddHowTo from "./components/howto/AddHowTo";
import EditHowTo from "./components/howto/EditHowTo";
import HowTo from "./components/howto/HowTo";
import Tos from "./components/misc/Tos";

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<hr className="my-2" />
				<Bars />
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
					<ProtectedRoute
						exact
						path={"/HowTo/:id"}
						component={HowTo}
					/>
					<Route path={"/Tos"} component={Tos} />
				</Switch>
				<Footer />
			</div>
		</div>
	);
}

export default App;
