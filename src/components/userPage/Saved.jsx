import React from "react";
import { connect } from "react-redux";
import { deleteSave } from "../../store/actions";

export const Saved = ({ savedPost, deleteSave }) => {
	return (
		<div className="saved">
			<h2>users Saved Post:</h2>
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
							<span>{item.name}</span>
							<p>{item.Cat}</p>
						</div>
					);
				})
			)}
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
