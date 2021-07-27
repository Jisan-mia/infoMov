import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";

const Trending = () => {
	const [trendingMovies, setTrendingMovies] = useState([]);

	useEffect(() => {
		getTrending();
	}, []);

	const getTrending = async () => {
		const { data } = await axios.get(`
        https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
		setTrendingMovies(data.results);
	};

	return (
		<div className="container grid-container">
			{trendingMovies.length ? (
				trendingMovies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))
			) : (
				<p> Loading...</p>
			)}
		</div>
	);
};

export default Trending;
