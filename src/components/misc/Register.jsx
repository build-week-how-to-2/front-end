import React from "react";
import { connect } from "react-redux";
import useForm from "../../hooks/useForm";
import { registerUser } from "../../store/actions";
import { Label, Input, Form, Button } from "reactstrap";

const initialForm = {
	username: "",
	passwd: "",
	email: "",
	tos: false,
};

export function Register({ registerUser, toggle }) {
	const [registerFormValues, setRegisterFormValues] = useForm(
		"registerForm",
		initialForm
	);

	return (
		<div>
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
						onChange={setRegisterFormValues}
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
						onChange={setRegisterFormValues}
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
						onChange={setRegisterFormValues}
					/>
				</Label>
				<Label check>
					<Input type="checkbox" /> TOS
				</Label>
				<br />
				<Button>Submit</Button>
			</Form>
		</div>
	);
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
