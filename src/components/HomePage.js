import { Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/HomePage.css';
import MovieList from './MovieList';
import MovieHeader from './MovieHeader';
import SearchBar from './SearchBar';
import Favorites from './Favorites';
import RemoveMovieFav from './RemoveMovieFav';

export default function HomePage() {

        const [movies, setMovies] = useState([]);
        const [searchResult, setSearchValue] = useState("");
        const [favoriteList, setfavoriteList] = useState([]);

        const getMovieData = async (searchResult) => {
          const url = `http://www.omdbapi.com/?s=${searchResult}&apikey=82ddf5fd`;

          const res = await fetch(url);
          const data = await res.json();

          // console.log(data); Checking if our data is returned from the API
          if (data.Search) {
            setMovies(data.Search);
          }
        };

        useEffect(() => {
          getMovieData(searchResult);
        }, [searchResult]);

        useEffect(() => {
          const loadMovieFav = JSON.parse(
            localStorage.getItem("react-movie-favorites")
          );
          setfavoriteList(loadMovieFav);
        }, []);

        const saveToLocal = (items) => {
          localStorage.setItem("react-movie-favorites", JSON.stringify(items));
        };

        const addFavorite = (movie) => {
          const newFavoriteList = [...favoriteList, movie];
          setfavoriteList(newFavoriteList);
          saveToLocal(newFavoriteList);
        };
        const remFavMovie = (movie) => {
          const newFavoriteList = favoriteList.filter(
            (favorite) => favorite.imdbID !== movie.imdbID
          );
          setfavoriteList(newFavoriteList);
          saveToLocal(newFavoriteList);
        };

    return (
        <div className="container-fluid movie-web">
        <Row className=" d-flex align-items-center mt-3 mb-3">
          <MovieHeader header="Movies" />
          <SearchBar
            searchResult={searchResult}
            setSearchValue={setSearchValue}
            className="mr-sm-2"
          />
        </Row>
        <Row>
          <MovieList
            movies={movies}
            favorite={Favorites}
            handleFavoritesClick={addFavorite}
          />
        </Row>
        <Row className=" d-flex align-items-center mt-3 mb-3">
          <MovieHeader header="Your Favorites" />
        </Row>
        <Row>
          <MovieList
            movies={favoriteList}
            favorite={RemoveMovieFav}
            handleFavoritesClick={remFavMovie}
          />
        </Row>
      </div>
    )
}