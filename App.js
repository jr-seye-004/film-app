import React, { useState } from 'react';
import FilmList from './components/FilmList';
import Filter from './components/Filter';
import AddFilmForm from './components/AddFilmForm';
import './App.css';

const App = () => {
  
  const defaultFilms = [
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterUrl: 'https://i.pinimg.com/236x/20/65/33/206533a22659ce6a2f86fb7f55d4cc9b.jpg',
      rating: 8.8
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterUrl: 'https://i.pinimg.com/564x/38/b8/c2/38b8c2a02aaa05f1964ba8683bd1c07d.jpg',
      rating: 8.6
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      posterUrl: 'https://i.pinimg.com/564x/74/80/31/748031d5c0c1a709f110ca3c0315aac4.jpg',
      rating: 9.0
    },
    {
      title: 'The Matrix',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      posterUrl: 'https://i.pinimg.com/564x/71/c2/b8/71c2b8768df151eddb4dd212bd1fcfe4.jpg',
      rating: 8.7
    },
    {
      title: 'Fight Club',
      description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
      posterUrl: 'https://i.pinimg.com/564x/ed/57/4d/ed574d06ffaec23404e36a815e7b53eb.jpg',
      rating: 8.8
    },
    {
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      posterUrl: 'https://i.pinimg.com/564x/fd/30/76/fd3076dd85b1cdff60df9659a293ef3f.jpg',
      rating: 8.9
    }
  ];

  const [films, setFilms] = useState(defaultFilms);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addFilm = (newFilm) => {
    setFilms([...films, newFilm]);
  };

  const filteredFilms = films.filter(film => 
    film.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    (filterRating === '' || film.rating >= filterRating)
  );

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <AddFilmForm addFilm={addFilm} />
      <FilmList films={filteredFilms} />
    </div>
  );
};

export default App;
