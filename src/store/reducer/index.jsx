import { v4 as uuidv4 } from "uuid";

export const initialState = {
	currentUser: "initialUser",
	howToFeed: [
		{
			id: uuidv4(),
			postTitle: "First-Post",
			postBody: "this is a test post #1",
			postedBy: "first post user",
			postCat: "technology",
			upvotes: 0,
			downvotes: 0,
			comments: [
				{
					postedBy: "first commenter",
					commentBody: "this is a great post!",
					upvotes: 0,
					downvotes: 0,
				},
				{
					postedBy: "second commenter",
					commentBody: "this is an okay post",
					upvotes: 0,
					downvotes: 0,
				},
			],
		},
		{
			id: uuidv4(),
			postTitle: "second-post",
			postBody: "this is a test post #2",
			postedBy: "second post user",
			postCat: "science",
			upvotes: 0,
			downvotes: 0,
			comments: [
				{
					postedBy: "first commenter",
					commentBody: "this post is fake news",
					upvotes: 0,
					downvotes: 0,
				},
				{
					postedBy: "second commenter",
					commentBody: "this post sucks",
					upvotes: 0,
					downvotes: 0,
				},
			],
		},
		{
			id: uuidv4(),
			postTitle: "third post",
			postBody: "this is a test post #3",
			postedBy: "third post user",
			postCat: "education",
			upvotes: 0,
			downvotes: 0,
			comments: [
				{
					postedBy: "first commenter",
					commentBody: "this is a test",
					upvotes: 0,
					downvotes: 0,
				},
				{
					postedBy: "second commenter",
					commentBody: "this hack will change the world",
					upvotes: 0,
					downvotes: 0,
				},
			],
		},
	],
	postedHowTo: [
		{
			id: uuidv4(),
			postTitle: "third post",
			postBody: "this is a test post that the current user has posted",
			postedBy: "third post user",
			postCat: "education",
			upvotes: 0,
			downvotes: 0,
			comments: [
				{
					postedBy: "first commenter",
					commentBody: "this is a test",
					upvotes: 0,
					downvotes: 0,
				},
				{
					postedBy: "second commenter",
					commentBody: "this hack will change the world",
					upvotes: 0,
					downvotes: 0,
				},
			],
		},
	],
	savedPost: [
		{
			id: uuidv4(),
			postTitle: "this is a test post that the user has saved",
			postBody: "this is a test post that the user has saved",
			postedBy: "first post user",
			postCat: "technology",
			upvotes: 0,
			downvotes: 0,
			comments: [
				{
					postedBy: "first commenter",
					commentBody: "this is a great post!",
					upvotes: 0,
					downvotes: 0,
				},
				{
					postedBy: "second commenter",
					commentBody: "this is an okay post",
					upvotes: 0,
					downvotes: 0,
				},
			],
		},
	],
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
				howToFeed: action.payload,
			};
		default:
			return state;
	}
}
