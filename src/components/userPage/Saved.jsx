import React from "react";
import { connect } from "react-redux";
import { deleteSave } from "../../store/actions";

export const Saved = ({ savedPost, deleteSave }) => {
	return (
		<div className="saved">
			<h2>users Saved Post:</h2>
			{savedPost.map(item => {
				return (
					<div className="savedPost" key={item.id}>
						<h4>{item.postTitle}</h4>
						<p>{item.postCat}</p>
						<span
							onClick={() => {
								deleteSave(item.id);
							}}>
							X
						</span>
					</div>
				);
			})}
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
