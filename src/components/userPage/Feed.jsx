import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
	savePost,
	getAllHowTo,
	upvote,
	downvote,
	editPost,
} from "../../store/actions";
import {
	Card,
	CardImg,
	CardText,
	CardTitle,
	CardSubtitle,
	Button,
	Spinner,
} from "reactstrap";

export const Feed = ({
	howToFeed,
	savePost,
	getAllHowTo,
	upvote,
	downvote,
	editPost,
	postedHowTo,
}) => {
	const { id } = useParams();

	useEffect(() => {
		getAllHowTo();
	}, [id]);

	return (
		<div className="feed">
			<hr className="my-2" />
			<h1>FEED:</h1>
			{howToFeed.length === 0 ? (
				<div className="spins">
					<Spinner style={{ width: "3rem", height: "3rem" }} />
					<p>...Feed is loading...</p>
				</div>
			) : (
				howToFeed.map(item => {
					return (
						<div key={item.id}>
							<div className="feedPost">
								<Card>
									<div className="feedPostHeader">
										<Link to={`/HowTo/${item.id}`}>
											<CardTitle>
												<h4>{item.name}</h4>
											</CardTitle>
										</Link>
										<CardSubtitle>
											<span>{`Posted by: ${item.creator}`}</span>
											<Button
												className="saveBTN"
												size="sm"
												color="info"
												onClick={() => {
													savePost(item);
												}}>
												SAVE
											</Button>
										</CardSubtitle>
										<div>
											<div className="votes">
												<span
													className="upvote"
													onClick={() => {
														upvote(item.id);
													}}>
													&uarr;{"  "}
													{item.upvotes}
												</span>
												{"    "}
												<span
													className="downvote"
													onClick={() => {
														downvote(item.id);
													}}>
													&darr;{"  "}
													{item.downvotes}
												</span>
												{"    "}
											</div>
										</div>
										<hr className="my-2" />
										<Link to={`/HowTo/${item.id}`}>
											<CardImg
												top
												width="100%"
												src={
													!item.img
														? "https://i.ibb.co/Wzg7PXJ/Logo-Makr-0-SLedd.png"
														: item.img
												}
												alt="HOW TO IMG"
											/>
										</Link>
									</div>
									<CardText>
										<span className="feedPostBody">
											{item.body}
										</span>
									</CardText>
								</Card>
							</div>
							<hr />
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
	downvote,
	editPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
