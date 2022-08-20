import React, { useRef, useState } from 'react';
import '../styles/Movie.css';
import MovieData from './MovieData';

const Movie = () => {
  const inputTitle = useRef(null);
  const [movie, setMovie] = useState(null);
  const [episode, setEpisode] = useState(null)
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setLoading(true);
    const title = inputTitle.current.value;
    if (title === '') {
      alert('Please type the title`s movie!');
    }
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${title}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        if (data !== null) {
          setMovie(data);
          const selfUrl = data._links.previousepisode.href;
          fetch(selfUrl)
            .then(response => response.json())
            .then(data => setEpisode(data));
        } else {
          setMovie(null);
        }
        
        setLoading(false);
      });
  }

  return (
    <div id='content'>
      <form className='form-movie-finder' method='POST'>
        <input placeholder='Type movie title here...' ref={inputTitle} type='text' />
        <button onClick={handleSearch} type='button'>Search</button>
      </form>

      <div id='result-container'>
        <h3 style={{
          display: loading ? 'block' : 'none'
        }}>
          Loading...
        </h3>
        <h3 style={{ 
          display: (movie !== null && episode !== null) || loading ? 'none' : 'block'
          }}>No Movie Data Found.</h3>
        <MovieData
          style={{ display: movie !== null && episode !== null ? 'flex' : 'none' }}
          movie={movie}
          episode={episode}
        />
      </div>
    </div>
  );
};

export default Movie;