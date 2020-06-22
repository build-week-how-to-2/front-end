import React from "react";
import { connect } from "react-redux";
import Pusher from "pusher-js";
import { savePost } from "../../store/actions";

export const Feed = ({ howToFeed, savePost }) => {
	const pusher = new Pusher("4e40be262ee74a5a593c", {
		cluster: "us2",
		encrypted: true,
	});

	const channel = pusher.subscribe("How-To");

	channel.bind("new-post", data => {
		// console.log(data);
		// alert("An event was triggered with message: " + data);
	});

	return (
		<div className="feed">
			{howToFeed.map(item => {
				return (
					<div className="feedPost" key={item.id}>
						<div className="feedPostHeader">
							<h4>{item.postTitle}</h4>
							<div className="votes">
								<span className="upvote">
									+{"  "}
									{item.upvotes}
								</span>
								{"    "}
								<span className="downvote">
									-{"  "}
									{item.downvotes}
								</span>
								<button
									onClick={() => {
										savePost(item);
									}}>
									SAVE
								</button>
							</div>
						</div>
						<div className="feedPostBody">{item.postBody}</div>
						<div className="commentsModal">
							Comments in a modal:
							{item.comments.map((item, index) => {
								return (
									<div className="comment" key={index}>
										<p>{item.commentBody}</p>
										{/* <span className="upvote">
											{item.upvotes}
										</span>
										<span className="downvote">
											{item.downvotes}
										</span> */}
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = state => ({
	howToFeed: state.howToFeed,
});

const mapDispatchToProps = {
	savePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
