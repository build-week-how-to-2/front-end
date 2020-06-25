import React from "react";
import { connect } from "react-redux";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { logInUser } from "../../store/actions";
import { FormGroup, Form, Input, Button, Label } from "reactstrap";

export const Login = ({ logInUser }) => {
	const [loginForm, setLoginForm] = useForm("loginForm", {
		username: "",
		password: "",
	});
	const { push } = useHistory();
	return (
		<div>
			<Form
				onSubmit={event => {
					event.preventDefault();
					logInUser(loginForm);
					localStorage.removeItem("loginForm");
					setTimeout(() => {
						push("/");
					}, 1000);
				}}>
				<FormGroup>
					<Label>
						Username:{"  "}
						<Input
							type="text"
							name="username"
							value={loginForm.username}
							onChange={setLoginForm}
						/>
					</Label>
				</FormGroup>
				<FormGroup>
					<Label>
						Password:{"  "}
						<Input
							type="password"
							name="password"
							value={loginForm.password}
							onChange={setLoginForm}
						/>
					</Label>
				</FormGroup>
				<Button color="success">Submit</Button>
			</Form>
		</div>
	);
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	logInUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
