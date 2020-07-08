import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Switch, Link} from 'react-router-dom'
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie.js';
import MovieList from './Movies/MovieList.js';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log(response.data);
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/">
        <MovieList movies={movieList} />
      </Route>
      <Route path="/movies/:id" component={Movie} />
    </div>
  );
};

export default App;
