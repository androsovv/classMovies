import React from 'react';
import Movie from "./movie";

const Movies = (props) => {
    const movies = props.movies;

    return (
        <div className='movies'>
            {
                movies.map(item =>
                    <Movie key={item.imdbID} {...item}/>
                )
            }
        </div>
    );
};

export default Movies;
