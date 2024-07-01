import React from 'react';
import FilmCard from './FilmCard';

const FilmList = ({ films }) => {
  return (
    <div className="film-list">
      {films.map(film => (
        <FilmCard key={film.title} film={film} />
      ))}
    </div>
  );
};

export default FilmList;
