import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { axiosWithAuth } from "../../route/axiosWithAuth";
import { Spinner, Jumbotron, Button, CardImg } from "reactstrap";

export const HowTo = () => {
	const { id } = useParams();
	const { push } = useHistory();
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
	}, []);

	return (
		<div>
			{!currentPost ? (
				// <p>...Post is Loading...</p>
				<Spinner style={{ width: "3rem", height: "3rem" }} />
			) : (
				<div>
					<Jumbotron>
						<h1 className="display-3">{currentPost.name}</h1>
						<p>{`Posted By: ${currentPost.creator}`}</p>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HowTo);
