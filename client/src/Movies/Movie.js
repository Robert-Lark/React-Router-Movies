import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Movie = () => {
	const params = useParams();

	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const id = params.id;
		// change ^^^ that line and grab the id from the URL
		// You will NEED to add a dependency array to this effect hook

		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then((response) => {
				setMovie(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [params.id]);

	if (movie.length === 0) {
		return <div>Loading movie information...</div>;
	}

	const { title, director, metascore, stars } = movie;
	return (
		<div className="save-wrapper">
			<div className="movie-card">
				<h2>{title}</h2>
				<div className="movie-director">
					Director: <em>{director}</em>
				</div>
				<div className="movie-metascore">
					Metascore: <strong>{metascore}</strong>
				</div>
				<h3>Actors</h3>

				{stars.map((star) => (
					<div key={star} className="movie-star">
						{star}
					</div>
				))}
			</div>
			<div className="save-button">Save</div>
		</div>
	);
};

export default Movie;
