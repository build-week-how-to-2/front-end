import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getMyPost } from "../../store/actions";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { Link } from "react-router-dom";

export const Posted = ({ postedHowTo, howToFeed, getMyPost }) => {
	const [postedPopoverOpen, setPostedPopoverOpen] = useState(false);

	const toggles = () => setPostedPopoverOpen(!postedPopoverOpen);

	useEffect(() => {
		getMyPost();
	}, [howToFeed]);

	return (
		<div className="posted">
			<Button id="Popover2" type="button" color="success">
				My How-To Post
			</Button>
			<Popover
				placement="bottom"
				isOpen={postedPopoverOpen}
				target="Popover2"
				toggle={toggles}>
				<PopoverHeader>My Post</PopoverHeader>
				<PopoverBody>
					{postedHowTo.length == 0 ? (
						<p>...User has no post...</p>
					) : (
						postedHowTo.map(item => {
							return (
								<div className="postedPost" key={item.id}>
									<div className="postedPostHeader">
										<span>{item.name}</span>
										<div className="vote">
											<span className="upvote">
												{`Total Points: ${
													item.upvotes -
													item.downvotes
												}`}
											</span>
											{"  "}
											<Link to={`/Edit/${item.id}`}>
												<Button color="danger">
													EDIT
												</Button>
											</Link>
										</div>
									</div>
								</div>
							);
						})
					)}
				</PopoverBody>
			</Popover>
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
