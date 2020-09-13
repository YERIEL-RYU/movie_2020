import React from 'react';
import PropsTypes from 'prop-types';
import './Movie.css';

const Movie = ({ title, year, summary, poster}) => {
    return (
        <div>
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    )
};

Movie.prototype = { 
    year: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
    summary: PropsTypes.string.isRequired,
    poster: PropsTypes.string.isRequired,
};
export default Movie;