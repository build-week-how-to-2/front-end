import React from "react";
import { connect } from "react-redux";
import useForm from "../hooks/useForm";
import { useHistory } from "react-router-dom";
import { logInUser } from "../store/actions";

export const TempLogin = ({ logInUser }) => {
	const [tempForm, setTempForm] = useForm("temps", {
		username: "test",
		password: "test",
	});
	const { push } = useHistory();
	return (
		<div>
			<form
				onSubmit={event => {
					event.preventDefault();
					logInUser(tempForm);
					localStorage.removeItem("temps");
					setTimeout(() => {
						push("/");
					}, 500);
				}}>
				<input
					type="text"
					name="username"
					value={tempForm.username}
					onChange={setTempForm}
				/>
				<input
					type="text"
					name="password"
					value={tempForm.password}
					onChange={setTempForm}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	logInUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(TempLogin);
