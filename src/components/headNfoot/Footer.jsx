import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Toggle from "./Toggle";

export default function Footer() {
	return (
		<div className="footers">
			<Link to="/">
				<Button color="primary">Home</Button>
			</Link>
			{"    "}
			<Link to="/contact">
				<Button>Contact Us</Button>
			</Link>
			{"    "}
			<Link to="/Tos">
				<Button>TOS</Button>
			</Link>
			{"    "}
			<Link
				to="/Login"
				onClick={() => {
					localStorage.clear();
				}}>
				<Button color="danger">Logout</Button>
			</Link>
			{"  "}

			<Toggle />
		</div>
	);
}
