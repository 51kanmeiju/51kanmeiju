import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import MovieSlider from './MovieSlider';
import MovieItem from './MovieItem';

class SimilarMovie extends Component {

    constructor(){
        super();

        this.state = {
            sliderSettings: {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                noPretitle: true,
            }
        };
    }

    renderMovieItems(movieItems) {
        return movieItems.map( (movie, index) => {
            return <MovieItem key={index} movie={movie} />
        } );
    }

    render() {
        let settings = this.state.sliderSettings;
        const {relatedMovies} = this.props.movieState;
        return (
            <div className="similar-movie-items srelacionados sbox">
                <h3>同类美剧推荐</h3>
                {this.renderMovieItems(relatedMovies.movies)}
            </div>
        );
    }
}

const propTypes = {
    movieState: PropTypes.object.isRequired
};
SimilarMovie.propTypes = propTypes;

export default SimilarMovie;