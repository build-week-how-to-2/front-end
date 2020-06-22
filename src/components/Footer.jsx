import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div>
			<Link to="/tos">TOS</Link>
			{"    "}
			<Link to="/contact">Contact Us</Link>
		</div>
	);
}
