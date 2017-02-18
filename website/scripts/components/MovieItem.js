import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class MovieItem extends Component {

  render() {
    const {movie} = this.props;
    return (
      <article className="item movies">
          <div className="poster">
              <Link to={'/movie/' + movie.id}>
                  <img src={movie.poster} />
              </Link>
              <div className="rating">
                  <span className="icon-star2"></span>{movie.hot_number}
              </div>
          </div>
          <div className="data">
              <h3><Link to={'/movie/' + movie.id}>{movie.name}</Link></h3>
              <span>{movie.from_year}</span>
          </div>
      </article>
    );
  }
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieItem;