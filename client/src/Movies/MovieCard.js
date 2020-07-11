import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import What_to_watch from "../What_to_watch.jpg";

const MovieCard = () => {
	const params = useParams();

	const [movie, setMovie] = useState([]);

	const WrapperDiv3 = styled.div`
		height: 100vh;
		text-align: center;
		background-image: url(${What_to_watch});
	`;
	const BestScene = styled.div`
		font-size: 2rem;
		margin-left: 25%;
		margin-right: 25%;
		width: 50%;
		height: 100%;
		background-color: grey;
		border-radius: 90px;
		color: gold;
	`;
	useEffect(() => {
		const id = params.id;
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then((response) => {
				setMovie(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
  }, [params.id]);
  
  const saveMovie = (props) => {
     const addToSavedList = props.addToSavedList 
     addToSavedList(movie)
  }

	if (movie.length === 0) {
		return <div>Loading movie information...</div>;
	}

	const { title, director, metascore, stars } = movie;
	return (
		<WrapperDiv3>
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
				<div className="save-button">
					<button onClick={saveMovie}>SAVE</button>
				</div>
				<BestScene>
					<a
						className="a"
						href={`/movie/${movie.url}`}
						style={{ textDecoration: "none" }}
					>
						BEST SCENE
					</a>
				</BestScene>
			</div>
		</WrapperDiv3>
	);
};

export default MovieCard;
