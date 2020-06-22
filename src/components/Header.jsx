import React from "react";
import { Link } from "react-router-dom";
import logo from "../photos/how-to-logo.png";

export default function Header() {
	return (
		<div className="headers">
			<img src={logo} alt="logo" />
			<Link to="/Login">Login</Link>
			<Link to="/">Home</Link>
		</div>
	);
}
