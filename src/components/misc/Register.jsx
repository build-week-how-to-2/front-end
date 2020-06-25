import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import useForm from "../../hooks/useForm";
import { registerUser } from "../../store/actions";
import { Label, Input, Form, Button } from "reactstrap";
import * as yup from "yup";
import formSchema from "./formSchema";

const initialForm = {
	username: "",
	passwd: "",
	email: "",
	tos: false,
};

const initialFormErrors = {
	username: "",
	email: "",
	tos: "",
};

export function Register({ registerUser, toggle }) {
	const [registerFormValues, setRegisterFormValues, setValues] = useForm(
		"registerForm",
		initialForm
	);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		formSchema.isValid(registerFormValues).then(valid => {
			console.log(valid);
			if (registerFormValues.tos) {
				setDisabled(!valid);
			}
			if (!registerFormValues.tos) {
				setDisabled(true);
			}
		});
	}, [registerFormValues]);

	const onInputChange = event => {
		const { name } = event.target;
		const { value } = event.target;

		yup.reach(formSchema, name)
			.validate(value)
			.then(valid => {
				setFormErrors({
					...formErrors,
					[name]: "",
				});
			})
			.catch(err => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0],
				});
			});
		setValues({
			...registerFormValues,
			[name]: value,
		});
	};

	const onCheckboxChange = event => {
		const { name } = event.target;
		const { checked } = event.target;
		setValues({
			...registerFormValues,
			tos: checked,
		});
	};

	return (
		<div>
			<div className="errors">
				<div>{formErrors.username}</div>
				<div>{formErrors.email}</div>
			</div>
			<Form
				onSubmit={event => {
					event.preventDefault();
					registerUser({
						username: registerFormValues.username,
						password: registerFormValues.passwd,
						email: registerFormValues.email,
						role: "creator",
					});
					localStorage.removeItem("registerForm");
					toggle("1");
				}}>
				<Label>
					{" "}
					Username: {"  "}
					<Input
						type="text"
						name="username"
						value={registerFormValues.username}
						onChange={onInputChange}
					/>
				</Label>
				<br />
				<Label>
					{" "}
					Password: {"  "}
					<Input
						type="password"
						name="passwd"
						value={registerFormValues.passwd}
						onChange={onInputChange}
					/>
				</Label>
				<br />
				<Label>
					{" "}
					Email: {"  "}
					<Input
						type="email"
						name="email"
						value={registerFormValues.email}
						onChange={onInputChange}
					/>
				</Label>
				<Label check>
					<Input type="checkbox" onClick={onCheckboxChange} />
					&nbsp; TOS
				</Label>
				<br />
				<br />
				<Button color="success" disabled={disabled}>
					Submit
				</Button>
			</Form>
		</div>
	);
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
