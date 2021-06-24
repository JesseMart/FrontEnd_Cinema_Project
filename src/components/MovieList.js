


import React from 'react'
// import Favorites from './Favorites';

const MovieList = (props) => {
    const Fav = props.favorite;
    return (
        <>
            {props.movies.map((movie, index)=> 
            <div key={index} className='d-flex justify-content-start m-3 image-container' >
                <img  src={movie.Poster} alt="Movie-Poster"></img>
                <div className='overlay d-flex aling-items-center justify-content-center'
                        onClick={()=> props.handleFavoritesClick(movie)}>
                    <Fav />
                </div>
            </div>
                )}
        </>
    )
}
export default MovieList

