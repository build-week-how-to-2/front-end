import React from "react";
import { connect } from "react-redux";
import Feed from "./userPage/Feed";
import Posted from "./userPage/Posted";
import Saved from "./userPage/Saved";

export const Home = () => {
	return (
		<div className="homePage">
			<div className="leftCol">
				POSTED/SAVED:
				<Posted />
				<Saved />
			</div>
			<div className="rightCol">
				FEED:
				<Feed />
			</div>
		</div>
	);
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
