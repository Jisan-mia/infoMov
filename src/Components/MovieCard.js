import React from "react";
import { img_300, unavailable } from "../config/config";

const MovieCard = ({ movie }) => {
	const { poster_path } = movie;

	return (
		<img
			className="movie-card"
			src={poster_path ? `${img_300}/${poster_path}` : unavailable}
			alt=""
		/>
	);
};

export default MovieCard;
