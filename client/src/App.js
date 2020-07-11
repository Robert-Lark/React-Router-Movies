import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList.js";
import MovieCard from "./Movies/MovieCard.js";
import styled from "styled-components";
import What_to_watch from "./What_to_watch.jpg";


const App = () => {
	const [savedList] = useState([]);
	const [movieList, setMovieList] = useState([]);
	const WrapperDiv = styled.div`
		width: 100vw;
		height: 100%;
		background-image: url(${What_to_watch});
	`;
	useEffect(() => {
		const getMovies = () => {
			axios
				.get("http://localhost:5000/api/movies")
				.then((response) => {
					setMovieList(response.data);
				})
				.catch((error) => {
					console.error("Server Error", error);
				});
		};
		getMovies();
	}, []);

	return (
		<WrapperDiv>
			<div>
				<SavedList list={savedList} />
				<Switch>
					<Route exact path="/">
						<MovieList movies={movieList} />
					</Route>
					<Route path="/movie/:id" component={MovieCard} />
				</Switch>
			</div>
		</WrapperDiv>
	);
};

export default App;
