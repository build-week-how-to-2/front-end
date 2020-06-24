import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editPost, deletePost } from "../store/actions";
import { axiosWithAuth } from "../route/axiosWithAuth";
import useForm from "../hooks/useForm";
import { useParams, useHistory, Link } from "react-router-dom";
import { Input, Form, Label, FormGroup, Button } from "reactstrap";

const initialForm = {
	// creator: "michael",
	name: "",
	body: "",
	img: null,
	cat: "Health",
};

export const EditHowTo = ({ editPost, deletePost }) => {
	const { id } = useParams();
	const { push } = useHistory();
	const [currentPost, setCurrentPost] = useState();
	const [editPostForm, setEditPostForm, setValues] = useForm(
		"editForm",
		initialForm
	);

	useEffect(() => {
		axiosWithAuth()
			.get(`/howtos/${id}`)
			.then(res => {
				console.log(res);
				setValues({
					name: res.data.name,
					body: res.data.body,
					img: res.data.img,
					cat: res.data.cat,
				});
				setCurrentPost(res.data);
			})
			.catch(error => {
				console.log(error);
				debugger;
			});
	}, []);
	return (
		<div>
			{!currentPost ? (
				<p>...item is loading...</p>
			) : (
				<Form>
					<FormGroup>
						<Label>
							Post Title:{"  "}
							<Input
								type="text"
								name="name"
								value={editPostForm.name}
								onChange={setEditPostForm}></Input>
						</Label>
					</FormGroup>
					<FormGroup>
						<Label>
							Post Body:{"  "}
							<sup>max 400</sup>
							{"  "}
							<Input
								type="textarea"
								name="body"
								value={editPostForm.body}
								onChange={setEditPostForm}></Input>
						</Label>
					</FormGroup>
					<FormGroup>
						<Label>
							Post Category:{"  "}
							<select
								name="cat"
								value={editPostForm.cat}
								onChange={setEditPostForm}>
								<option value="Technology">Technology</option>
								<option value="Health">Health</option>
								<option value="Automotive">Automotive</option>
								<option value="Everyday">Everyday</option>
							</select>
						</Label>
					</FormGroup>
					<Link to="/">
						<Button
							onClick={event => {
								// event.preventDefault();
								editPost(id, editPostForm);
								localStorage.removeItem("editForm");
								// push("/");
							}}>
							Save
						</Button>
					</Link>
					{"  "}

					<Link to="/">
						<Button
							onClick={event => {
								// event.preventDefault();
								deletePost(id);
								localStorage.removeItem("editForm");
								// push("/");
							}}>
							Delete
						</Button>
					</Link>
				</Form>
			)}
		</div>
	);
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	editPost,
	deletePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHowTo);
