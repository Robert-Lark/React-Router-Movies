import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieList = (props) => {
	return (
		<div className="movie-list">
			{props.movies.map((movie) => (
				<MovieDetails key={movie.id} movie={movie} />
			))}
		</div>
	);
};

function MovieDetails({ movie }) {
	const { title } = movie;
	const WrapperDiv2 = styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		justify-item: center;
	`;

	return (
		<WrapperDiv2>
			<div className="movie-card">
				<Link to={`/movie/${movie.id}`}>
					<h2>{title}</h2>
				</Link>
			</div>
		</WrapperDiv2>
	);
}

export default MovieList;
