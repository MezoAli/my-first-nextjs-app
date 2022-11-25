import { useEffect } from "react";
import { useState } from "react";
import classes from "./comment-list.module.css";

function CommentList(props) {
	const eventId = props.eventId;
	const [comments, setComments] = useState([]);
	const getComment = async () => {
		const result = await fetch(`/api/comments/${eventId}`);
		const data = await result.json();
		const allComments = data.comments;
		const eventComment = allComments.filter((item) => item.eventId === eventId);
		setComments(eventComment);
	};

	useEffect(() => {
		getComment();
	}, []);
	return (
		<ul className={classes.comments}>
			{comments.map((comment) => {
				return (
					<li key={comment._id}>
						<p>{comment.text}</p>
						<div>
							By <address>{comment.name}</address>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default CommentList;
