import { v4 as uuidv4 } from "uuid";

export const initialState = {
	currentUser: "initialUser",
	howToFeed: [],
	postedHowTo: [],
	savedPost: [],
	totalPoints: "upvotes - downvotes",
};

export default function reducers(state = initialState, action) {
	switch (action.type) {
		case "GET_DATA_SUCCESS":
			return {
				...state,
				newData: action.payload,
			};
		case "GET_DATA_FAIL":
			return {
				...state,
			};
		case "USER_LOGGED_IN":
			return {
				...state,
				currentUser: action.payload,
			};
		case "NEW_POST":
			let newPost = {
				...action.payload,
				id: uuidv4(),
				upvotes: 0,
				downvotes: 0,
				comments: [],
			};
			return {
				...state,
				howToFeed: [...state.howToFeed, newPost],
				postedHowTo: [...state.postedHowTo, newPost],
			};
		case "SAVE_POST":
			return {
				...state,
				savedPost: [...state.savedPost, action.payload],
			};
		case "DELETE_SAVE":
			let newSaves = state.savedPost.filter(item => {
				return item.id !== action.payload;
			});
			return {
				...state,
				savedPost: [...newSaves],
			};
		case "GET_ALL_HOWTO":
			return {
				...state,
				howToFeed: [...action.payload],
			};
		case "GET_MY_POST":
			return {
				...state,
				postedHowTo: action.payload,
			};
		case "UPVOTE":
			let newFeed = state.howToFeed.filter(item => {
				return item.id !== action.payload[0].id;
			});
			return {
				...state,
				howToFeed: [action.payload[0], ...newFeed],
			};
		case "DOWNVOTE":
			let newFeeds = state.howToFeed.filter(item => {
				return item.id !== action.payload[0].id;
			});
			return {
				...state,
				howToFeed: [...newFeeds, action.payload[0]],
			};
		default:
			return state;
	}
}
