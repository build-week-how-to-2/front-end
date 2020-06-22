import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const Posted = ({ postedHowTo }) => {
	return (
		<div className="posted">
			<div>
				<Link to="/AddHowTo">
					<Button>Add A New How-To</Button>
				</Link>
			</div>
			<h2>users Post:</h2>
			{postedHowTo.map(item => {
				return (
					<div className="postedPost" key={item.id}>
						<div className="postedPostHeader">
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
								{"  "}
								<button
									onClick={() => {
										// editPost(item);
									}}>
									EDIT
								</button>
							</div>
						</div>
						<div className="postedPostBody">{item.postBody}</div>
						{/* <div className="commentsModal">
							{item.comments.map(item => {
								return (
									<div className="comment">
										<h7>{item.commentBody}</h7>
										<span className="upvote">
											{item.upvotes}
										</span>
										<span className="downvote">
											{item.downvotes}
										</span>
									</div>
								);
							})}
						</div> */}
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = state => ({
	postedHowTo: state.postedHowTo,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Posted);
