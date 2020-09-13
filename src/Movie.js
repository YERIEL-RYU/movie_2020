import React from 'react';
import PropsTypes from 'prop-types';

const Movie = ({ id, title, year, summary, poster}) => {
    return <h4>{title}</h4>
};

Movie.prototype = { 
    id: PropsTypes.number.isRequired, 
    year: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
    summary: PropsTypes.string.isRequired,
    poster: PropsTypes.string.isRequired,
};
export default Movie;