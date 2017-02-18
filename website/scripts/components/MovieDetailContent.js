import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import StarRatingComponent from 'react-star-rating-component';
import {toDateString} from '../utils/TimeUtils';

class MovieDetailContent extends Component {

    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }

    starClick() {
        //
    }

    renderCategory() {
        return this.props.movie.categories.map( (category, index) => {
            return <Link key={index} to={'/views/category/' + category.id}>{category.name}</Link> ;
        } );
    }

    render() {
        const {rating} = this.state;
        const {movie} = this.props;
        return (
            <div className="movie-detail-content">
                <div className="sheader">
                    <div className="poster">
                        <img src={movie.poster} alt={movie.name} />
                    </div>
                    <div className="data">
                        <h1>{movie.name}</h1>
                        <div className="extra">
                            <span className="tagline">{movie.short_desc}</span>      
                            <span className="date">发行自: {movie.from_year}年&nbsp;收录于:&nbsp;{toDateString(movie.created ? movie.created: 0)}&nbsp;最后更新: {toDateString(movie.last_updated ? movie.last_updated: 0)}</span> 
                            <span className="country">({movie.company.name})</span>       
                            <span className="runtime">{movie.status_desc}</span>        
                            <span className="CN/A rated">热度: {movie.hot_number}</span> 
                        </div>
                        <div className="starstruck-ptype">
                            <div className="starstruck-wrap">
                                <div className="dt_rating_data">
                                    <StarRatingComponent name="movieStar" startCount="8" value={rating} onStarClick={this.starClick.bind(this)}/>
                                </div>
                            </div>
                        </div>
                        <div className="sgeneros">
                            {this.renderCategory()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const propTypes = {
    movie: PropTypes.object.isRequired
};
MovieDetailContent.propTypes = propTypes;

export default MovieDetailContent;

