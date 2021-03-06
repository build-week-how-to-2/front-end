import React from "react";
import { connect } from "react-redux";
import useForm from "../../hooks/useForm";
import { Input, Form, Label, Button } from "reactstrap";
import { addHowTo } from "../../store/actions";
import { useHistory } from "react-router-dom";

const initialForm = {
	postTitle: "",
	postBody: "",
	postCat: "",
	img: "",
};

export function AddHowTo({ currentUser, addHowTo }) {
	const [addHowForm, setAddHowForm] = useForm("Add How-To form", initialForm);
	const { push } = useHistory();
	const submit = event => {
		event.preventDefault();
		addHowTo({
			creator: currentUser,
			name: addHowForm.postTitle,
			body: addHowForm.postBody,
			cat: addHowForm.postCat,
			img: addHowForm.img,
		});
		localStorage.removeItem("Add How-To form");
		push("/");
	};
	return (
		<div className="addHowTo">
			<Form onSubmit={submit}>
				<Label>
					{" "}
					How-To Title:{"  "}
					<Input
						type="text"
						name="postTitle"
						value={addHowForm.postTitle}
						onChange={setAddHowForm}
					/>
				</Label>
				<br />
				<Label>
					How-To Body:{"  "}
					<sup>max 400</sup>
					{"  "}
					<Input
						type="textarea"
						maxlength="400"
						name="postBody"
						value={addHowForm.postBody}
						onChange={setAddHowForm}
					/>
				</Label>
				<br />
				<Label>
					IMG URL: {"  "}
					<Input
						type="text"
						name="img"
						value={addHowForm.img}
						onChange={setAddHowForm}
					/>
				</Label>
				<br />
				<Label>
					Post Category: {"  "}
					<select
						name="postCat"
						value={addHowForm.postCat}
						onChange={setAddHowForm}>
						<option value="Technology">Technology</option>
						<option value="Health">Health</option>
						<option value="Automotive">Automotive</option>
						<option value="Everyday">Everyday</option>
					</select>
				</Label>
				<br />
				<Button color="success">Submit</Button>
			</Form>
		</div>
	);
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
});

const mapDispatchToProps = {
	addHowTo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddHowTo);
