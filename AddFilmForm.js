import React, { useState } from 'react';

const AddFilmForm = ({ addFilm }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addFilm({ title, description, posterUrl, rating });
    setTitle('');
    setDescription('');
    setPosterUrl('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-film-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterUrl}
        onChange={(e) => setPosterUrl(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />
      <button type="submit">Add Film</button>
    </form>
  );
};

export default AddFilmForm;
