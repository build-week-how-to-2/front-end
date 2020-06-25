import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSave } from "../../store/actions";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

export const Saved = ({ savedPost, deleteSave }) => {
	const [popoverOpen, setPopoverOpen] = useState(false);
	const toggle = () => setPopoverOpen(!popoverOpen);
	return (
		<div className="saved">
			<Button id="Popover1" type="button" color="info">
				My Saved Post
			</Button>
			<Popover
				placement="bottom"
				isOpen={popoverOpen}
				target="Popover1"
				toggle={toggle}>
				<PopoverHeader>Saved Post</PopoverHeader>
				<PopoverBody>
					{savedPost.length == 0 ? (
						<p>...USEr HAS NOT SAVED ANY POST...</p>
					) : (
						savedPost.map(item => {
							return (
								<div className="savedPost" key={item.id}>
									<span
										className="deletes"
										onClick={() => {
											deleteSave(item.id);
										}}>
										X
									</span>
									{"  "}
									<Link to={`/HowTo/${item.id}`}>
										<span color="danger">{item.name}</span>
									</Link>
									<p>{item.Cat}</p>
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
	savedPost: state.savedPost,
});

const mapDispatchToProps = {
	deleteSave,
};

export default connect(mapStateToProps, mapDispatchToProps)(Saved);
