import React from "react";
import { connect } from "react-redux";
import Feed from "./userPage/Feed";

export const Home = () => {
	return (
		<div className="homePage">
			<Feed />
		</div>
	);
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
