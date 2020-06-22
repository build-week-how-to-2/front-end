import React from "react";
import useForm from "../hooks/useForm";
import { Label, Input, Form, Button } from "reactstrap";

const initialForm = {
	fname: "",
	username: "",
	passwd: "",
	email: "",
	tos: false,
};

export default function Register() {
	const [registerFormValues, setRegisterFormValues] = useForm(
		"registerForm",
		initialForm
	);

	return (
		<div>
			<Form>
				<Label>
					{" "}
					First Name {"  "}
					<Input
						type="text"
						name="fname"
						value={registerFormValues.fname}
						onChange={setRegisterFormValues}
					/>
				</Label>
				<br />
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
