import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <div className="image-box">
          <img src={ imagePath } alt="banner" />
          <h1>{ title }</h1>
        </div>
        <div className="text-box">
          <p>{ storyline }</p>
        </div>
        <div className="link-box">
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
