import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function Footer() {
	return (
		<div className="footers">
			<Link to="/">
				<Button>Home</Button>
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
				<Button>Logout</Button>
			</Link>
		</div>
	);
}
