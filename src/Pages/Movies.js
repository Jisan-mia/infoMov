import axios from "axios";
import React, { useEffect, useState } from "react";
import Genres from "../Components/Genres";
import MovieCard from "../Components/MovieCard";
import PaginationComp from "../Components/PaginationComp";

const Pages = () => {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [numOfPages, setNumOfPages] = useState();
	const [genres, setGenres] = useState([]);
	const [selectedGenres, setSelectedGenres] = useState([]);

	useEffect(() => {
		fetchMovies();
		console.log(movies);
	}, [page]);

	const fetchMovies = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
		);
		setMovies(data.results);
		setNumOfPages(data.total_pages);
	};

	return (
		<div className="container">
			{/* genres component */}
			<Genres
				type="movie"
				selectedGenres={selectedGenres}
				genres={genres}
				setGenres={setGenres}
				setSelectedGenres={setSelectedGenres}
				setPage={setPage}
			/>
			<div className="grid-container">
				{movies.length ? (
					movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
				) : (
					<p>Loading...</p>
				)}
			</div>
			{numOfPages > 1 && (
				<PaginationComp setPage={setPage} numOfPages={numOfPages} />
			)}
		</div>
	);
};

export default Pages;
