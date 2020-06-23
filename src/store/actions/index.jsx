import { axiosWithAuth } from "../../route/axiosWithAuth";

export const getData = links => dispatch => {
	// dispatch({ type: "GET_DATA_START" });
	axiosWithAuth()
		.get("http://localhost:5000")
		.then(({ data }) => {
			dispatch({ type: "GET_DATA_SUCCESS", payload: data });
		})
		.catch(error => {
			console.log(error);
			dispatch({
				type: "GET_DATA_FAIL",
				payload: `${error.response.status} : ${error.response.data}`,
			});
			debugger;
		});
};

export const logInUser = creds => dispatch => {
	axiosWithAuth()
		.post("/api/login", creds)
		.then(res => {
			const loggedInAction = {
				type: "USER_LOGGED_IN",
				payload: res.data.user,
			};
			dispatch(loggedInAction);
			window.localStorage.setItem("token", res.data.payload);
		});
};

export const registerUser = user => dispatch => {
	dispatch({ type: "REGISTER_USER", dispatch: user });
	axiosWithAuth()
		.post("/api/register", user)
		.then(res => {
			console.log(res);
		})
		.catch(error => {
			console.log(error);
			debugger;
		});
};

export const upvote = data => dispatch => {
	dispatch({ type: "UPVOTE", payload: data });
	axiosWithAuth().post().then().catch();
};

export const downvote = data => dispatch => {
	dispatch({ type: "DOWNVOTE", payload: data });
	axiosWithAuth().post().then().catch();
};

export const postComment = comment => dispatch => {
	dispatch({ type: "POST_COMMENT", payload: comment });
	axiosWithAuth().post().then().catch();
};

export const editComment = data => dispatch => {
	dispatch({ type: "EDIT_COMMENT", payload: data });
	axiosWithAuth().post().then().catch();
};

export const addHowTo = data => dispatch => {
	axiosWithAuth()
		.post("/api/posts", data)
		.then(({ data }) => {
			console.log("newPost");
			dispatch({ type: "NEW_POST", payload: data });
		})
		.catch(error => {
			console.log(error);
			debugger;
		});
};

export const savePost = post => dispatch => {
	dispatch({ type: "SAVE_POST", payload: post });
};

export const deleteSave = id => dispatch => {
	dispatch({ type: "DELETE_SAVE", payload: id });
};

export const getAllUsers = () => {
	axiosWithAuth()
		.get("/api")
		.then(res => {
			console.log(res);
		})
		.catch(error => {
			console.log(error);
			debugger;
		});
};

export const getAllHowTo = () => dispatch => {
	axiosWithAuth()
		.get("/howtos")
		.then(res => {
			dispatch({ type: "GET_ALL_HOWTO", payload: res.data });
		})
		.catch(error => {
			console.log(error);
			debugger;
		});
};

export const newPost = post => dispatch => {
	axiosWithAuth()
		.post("/howtos", post)
		.then(res => {
			console.log(res);
			// dispatch({ type: "NEW_POST", payload: post });
		})
		.catch(error => {
			console.log(error);
			debugger;
		});
};

export const editPost = (id, data) => dispatch => {
	axiosWithAuth()
		.put(`/howtos/${id}`, data)
		.then(res => {
			console.log(res);
			// dispatch({ type: "EDIT_POST", payload: res.data });
		})
		.catch(error => {
			console.log(error);
			debugger;
		});
};

export const deletePost = id => dispatch => {
	axiosWithAuth()
		.delete(`/howtos/${id}`)
		.then(res => {
			console.log(res);
			dispatch({ type: "DELETE_POST", payload: res.data });
		});
};

export const getMyPost = () => dispatch => {
	axiosWithAuth()
		.get("/howtos/creator")
		.then(res => {
			console.log(res);
			dispatch({ type: "GET_MY_POST", payload: res.data });
		})
		.catch(error => {
			console.log(error);
			debugger;
		});
};
