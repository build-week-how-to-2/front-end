import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

export default function Toggle() {
	const [darkMode, setDarkMode] = useDarkMode(false);
	const toggleMode = e => {
		console.log(e);
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<>
			<sup>Dark Mode</sup>
			<label class="switch" onClick={toggleMode}>
				<input type="checkbox" />
				<span class="slider round"></span>
			</label>
		</>
	);
}
