import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMyPost } from "../../store/actions";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const Posted = ({ postedHowTo, howToFeed, getMyPost }) => {
	useEffect(() => {
		getMyPost();
	}, [howToFeed]);

	return (
		<div className="posted">
			<h2>users Post:</h2>
			{postedHowTo.length == 0 ? (
				<p>...User has no posted how-tos...</p>
			) : (
				postedHowTo.map(item => {
					return (
						<div className="postedPost" key={item.id}>
							<div className="postedPostHeader">
								<span>{item.name}</span>
								<div className="votes">
									<span className="upvote">
										{`Total Point: ${
											item.upvotes - item.downvotes
										}`}
									</span>
									<Link to={`/Edit/${item.id}`}>
										<Button>EDIT</Button>
									</Link>
								</div>
							</div>
							{/* <div className="postedPostBody">{item.body}</div> */}
						</div>
					);
				})
			)}
			<hr />
			<div>
				<Link to="/AddHowTo">
					<Button>Add A New How-To</Button>
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	postedHowTo: state.postedHowTo,
	howToFeed: state.howToFeed,
});

const mapDispatchToProps = {
	getMyPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posted);
