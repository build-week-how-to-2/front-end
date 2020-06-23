import React, { useEffect } from "react";
import { connect } from "react-redux";
import Pusher from "pusher-js";
import { useParams, useHistory } from "react-router-dom";
import { savePost, getAllHowTo, upvote, editPost } from "../../store/actions";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from "reactstrap";

export const Feed = ({
	howToFeed,
	savePost,
	getAllHowTo,
	upvote,
	editPost,
	postedHowTo,
}) => {
	const pusher = new Pusher("4e40be262ee74a5a593c", {
		cluster: "us2",
		encrypted: true,
	});

	const channel = pusher.subscribe("How-To");

	channel.bind("new-post", data => {
		// console.log(data);
		// alert("An event was triggered with message: " + data);
	});

	const { id } = useParams();

	useEffect(() => {
		getAllHowTo();
	}, [id]);

	return (
		<div className="feed">
			{!howToFeed ? (
				<p>...Feed is loading...</p>
			) : (
				howToFeed.map(item => {
					return (
						<div className="feedPost" key={item.id}>
							<Card>
								<div className="feedPostHeader">
									<CardTitle>
										<h4>{item.name}</h4>
									</CardTitle>
									<CardSubtitle>
										<span>{`Posted by: ${item.creator}`}</span>
									</CardSubtitle>
									<div className="votes">
										<span
											className="upvote"
											onClick={() => {
												console.log("upvote");
												// console.log(item.id);
												// upvote(item.id, {
												// 	...item,
												// 	upvotes: 1,
												// });
												// editPost(item.id, item);
											}}>
											+{"  "}
											{item.upvotes}
										</span>
										{"    "}
										<span
											className="downvote"
											onClick={() => {
												console.log(item);
												upvote(item.id, {
													...item,
													downvotes: item.downvotes--,
												});
											}}>
											-{"  "}
											{item.downvotes}
										</span>
										{"    "}
										<Button
											onClick={() => {
												savePost(item);
											}}>
											SAVE
										</Button>
									</div>
									<CardImg
										top
										width="100%"
										src={item.img}
										alt="HOW TO IMG"
									/>
								</div>
								<CardText>
									<span className="feedPostBody">
										{item.body}
									</span>
								</CardText>
							</Card>
						</div>
					);
				})
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	howToFeed: state.howToFeed,
	postedHowTo: state.postedHowTo,
});

const mapDispatchToProps = {
	savePost,
	getAllHowTo,
	upvote,
	editPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
