import React from 'react';

const FilmCard = ({ film }) => {
  return (
    <div className="film-card">
      <img src={film.posterUrl} alt={`${film.title} poster`} />
      <h3>{film.title}</h3>
      <p>{film.description}</p>
      <p>Note: {film.rating}</p>
    </div>
  );
};

export default FilmCard;
