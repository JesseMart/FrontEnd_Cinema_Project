import { Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import SearchBar from './components/SearchBar';

function App() {


  const [movies, setMovies] = useState([]);
  const [searchResult, setSearchValue] =useState('');


  const getMovieData = async (searchResult) => {
    const url = `http://www.omdbapi.com/?s=${searchResult}&apikey=82ddf5fd`;
    
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data); Checking if our data is returned from the API
    if(data.Search) {
      setMovies(data.Search);
    }


    
  }

  useEffect(() => {
    getMovieData(searchResult);
  }, [searchResult])

  return (
    
    <div className="container-fluid movie-web"> 
      <Row className=" d-flex align-items-center mt-3 mb-3">
        <MovieHeader header = 'Movies'/>
        <SearchBar searchResult={searchResult} setSearchValue={setSearchValue} />
      </Row>
        <Row>
          <MovieList movies={movies} />
        </Row>
    
    </div>
  );
}

export default App;
