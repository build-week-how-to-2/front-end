import React from "react";
import { Link } from "react-router-dom";
import Posted from "../userPage/Posted";
import Saved from "../userPage/Saved";
import { Button } from "reactstrap";

export default function Bars() {
	return (
		<div className="bars">
			<Posted />
			<Saved />
			<Link to="/AddHowTo" className="adds">
				<Button>Add A New How-To</Button>
			</Link>
			<Link
				to="/Login"
				className="logins"
				onClick={() => {
					localStorage.clear();
				}}>
				<Button color="danger">Logout</Button>
			</Link>
		</div>
	);
}
