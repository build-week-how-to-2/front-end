import React from "react";
import { connect } from "react-redux";
import Feed from "./userPage/Feed";
// import Posted from "./userPage/Posted";
// import Saved from "./userPage/Saved";

export const Home = () => {
	// return (
	// 	<div className="homePage">
	// 		<div className="leftCol">
	// 			<h2>POSTED/SAVED:</h2>
	// 			<hr />
	// 			<Posted />
	// 			<hr />
	// 			<Saved />
	// 		</div>
	// 		<div className="rightCol">
	// 			<h1>FEED:</h1>
	// 			<Feed />
	// 		</div>
	// 	</div>
	// );
	return (
		<div className="homePage">
			<Feed />
		</div>
	);
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
