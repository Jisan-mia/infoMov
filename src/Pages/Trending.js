import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import PaginationComp from "../Components/PaginationComp";

const Trending = () => {
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [page, setPage] = useState(1);
	useEffect(() => {
		getTrending();
	}, [page]);

	const getTrending = async () => {
		const { data } = await axios.get(`
        https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
		setTrendingMovies(data.results);
	};

	return (
		<div className="container">
			<div className="grid-container">
				{trendingMovies.length ? (
					trendingMovies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))
				) : (
					<p> Loading...</p>
				)}
			</div>
			<PaginationComp setPage={setPage} />
		</div>
	);
};

export default Trending;
