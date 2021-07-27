import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
	type,
	selectedGenres,
	genres,
	setGenres,
	setSelectedGenres,
	setPage,
}) => {
	useEffect(() => {
		fetchGenres();

		return () => {
			setGenres({});
		};
	}, []);

	const fetchGenres = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
		);

		setGenres(data.genres);
	};

	const handleAddGenre = (genre) => {
		setSelectedGenres([...selectedGenres, genre]);
		setGenres(genres.filter((mainGenre) => mainGenre.id !== genre.id));
		setPage(1);
	};

	const handleRemoveGenre = (genre) => {
		setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
		setGenres([...genres, genre]);
		setPage(1);
	};

	return (
		<div style={{ margin: "15px" }}>
			{selectedGenres &&
				selectedGenres.map((genre) => (
					<Chip
						style={{ margin: 2 }}
						key={genre.id}
						label={genre.name}
						clickable
						color="primary"
						size="small"
						onDelete={() => handleRemoveGenre(genre)}
					/>
				))}

			{genres.length &&
				genres.map((genre) => (
					<Chip
						style={{ margin: 2 }}
						key={genre.id}
						label={genre.name}
						clickable
						size="small"
						onClick={() => handleAddGenre(genre)}
					/>
				))}
		</div>
	);
};

export default Genres;
