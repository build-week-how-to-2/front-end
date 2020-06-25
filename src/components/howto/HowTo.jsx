import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { upvote, downvote } from "../../store/actions";
import { axiosWithAuth } from "../../route/axiosWithAuth";
import { Spinner, Jumbotron, Button, CardImg } from "reactstrap";

export const HowTo = ({ howToFeed, upvote, downvote }) => {
	const { id } = useParams();
	const [currentPost, setCurrentPost] = useState();

	useEffect(() => {
		axiosWithAuth()
			.get(`/howtos/${id}`)
			.then(({ data }) => {
				setCurrentPost(data);
			})
			.catch(error => {
				console.log(error);
				debugger;
			});
	}, [howToFeed]);

	return (
		<div className="howToo">
			{!currentPost ? (
				<Spinner style={{ width: "3rem", height: "3rem" }} />
			) : (
				<div>
					<Jumbotron>
						<h1 className="display-3">{currentPost.name}</h1>
						<p>{`Posted By: ${currentPost.creator}`}</p>
						<div>
							<div className="votes" id="howToVote">
								<span
									className="upvote"
									onClick={() => {
										upvote(currentPost.id);
									}}>
									&uarr;
								</span>
								{"  "}
								{currentPost.upvotes}

								{"    "}
								<span
									className="downvote"
									onClick={() => {
										downvote(currentPost.id);
									}}>
									&darr;
								</span>
								{"  "}
								{currentPost.downvotes}

								{"    "}
							</div>
						</div>
						<hr className="my-2" />
						<p className="lead">{currentPost.body}</p>
						<hr className="my-2" />
						<CardImg
							top
							width="100%"
							src={
								!currentPost.img
									? "https://i.ibb.co/Wzg7PXJ/Logo-Makr-0-SLedd.png"
									: currentPost.img
							}
							alt="HOW TO IMG"
						/>
						<br />
						<br />
						<Button color="primary">Learn More</Button>
					</Jumbotron>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	howToFeed: state.howToFeed,
});

const mapDispatchToProps = {
	upvote,
	downvote,
};

export default connect(mapStateToProps, mapDispatchToProps)(HowTo);
