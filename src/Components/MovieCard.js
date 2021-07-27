import React from "react";
import { img_300, unavailable } from "../config/config";

const MovieCard = ({ movie }) => {
	const { poster_path } = movie;

	return (
		<div>
			<img
				src={poster_path ? `${img_300}/${poster_path}` : unavailable}
				alt=""
			/>
		</div>
	);
};

export default MovieCard;
