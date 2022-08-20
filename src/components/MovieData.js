import React from 'react';
import '../styles/MovieData.css';
import Genre from './Genre';

const createMarkup = (element) => {
  return {__html: element}
};

const MovieData = ({ movie, episode }) => {
  return movie !== null ? (
    <div id='movie-data'>
      <img src={
          movie.image !== null ? movie?.image?.medium : `https://via.placeholder.com/295x180?text=Poster+Not+Found`
        }
        alt={movie.title}
        className='movie-image'
      />
      <div id='movie-details'>
        <div>
          <h1 className='movie-title'>{movie?.name}</h1>
          <div className='movie-genre'>
            {movie?.genres.map((genre, index) => <Genre key={index} name={genre} />)}
          </div>

          <table>
            <tbody>
              <tr>
                <td>Episode</td>
                <td>:</td>
                <td>{episode?.number}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>:</td>
                <td>{movie?.rating?.average}</td>
              </tr>
              <tr>
                <td>Summary</td>
                <td>:</td>
                <td dangerouslySetInnerHTML={createMarkup(movie?.summary)}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='action'>
          <div></div>
          {movie?.officialSite !== null ? (
            <button type='button' onClick={() => {
              window.open(movie.officialSite, '_blank')
            }}>Watch on {movie?.webChannel?.name}</button>
          ) : (
            <h4>Link Not Found...</h4>
          )}
        </div>
      </div>
    </div>
  ) : <></>;
};

export default MovieData;