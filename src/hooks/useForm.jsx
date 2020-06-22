// import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useForm(key, initialValue) {
	const [values, setValues] = useLocalStorage(key, initialValue);

	const handleChanges = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		localStorage.removeItem("FormData");
	};

	return [values, handleChanges, handleSubmit];
}
