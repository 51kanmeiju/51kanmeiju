import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';

import MovieDetailContent from '../components/MovieDetailContent';
import MovieDetailTabs from '../components/MovieDetailTabs';
import SimilarMovie from '../components/SimilarMovie';
import CommentBox from '../components/CommentBox';

import {loadMovie, loadRelatedMovies} from '../actions/MovieActions';
import {loadMovieComments, loadMovieHotComments} from '../actions/CommentActions';
import Promise from 'bluebird';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    movie: PropTypes.object.isRequired
};

class MovieContainer extends Component {

    static initData({store, params, query}) {
        const {dispatch} = store;
        const {id} = params
        return Promise.all([
            dispatch(loadMovie(id)),
            dispatch(loadMovieComments(id)),
            dispatch(loadMovieHotComments(id)),
            dispatch(loadRelatedMovies(id)),
        ]);
    }

    componentDidMount() {
        const {dispatch, id} = this.props;
        dispatch(loadMovie(id));
        dispatch(loadMovieComments(id));
        dispatch(loadMovieHotComments(id));
        dispatch(loadRelatedMovies(id));
    }

    componentWillReceiveProps(nextProps) {
        const {dispatch} = this.props;
        if (nextProps.id != this.props.id) {
            dispatch(loadMovie(nextProps.id));
            dispatch(loadMovieComments(nextProps.id));
            dispatch(loadMovieHotComments(nextProps.id));
            dispatch(loadRelatedMovies(nextProps.id));
        }
    }

    render() {
        const {movie} = this.props;
        return (
            <div className="movie-body" id="single">
                <Helmet 
                    title={ movie.name + "美剧 | America TV Show " +movie.enname+ " | 最新美剧资源 | 最新美剧下载 " } 
                    meta={[ {name: "description", content: movie.short_desc}]}
                    />
                <div className="content">

                    <MovieDetailContent {...this.props} />

                    <MovieDetailTabs {...this.props}/>

                    <CommentBox {...this.props} />

                </div>

                <div className="sidebar scrolling">
                    <SimilarMovie {...this.props} />
                </div>

            </div>
        );
    }
}

MovieContainer.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
    const {movie} = state;

    return {
        id: ownProps.params.id,
        movie: movie.viewing,
        movieState: movie
    };
}

export default connect(mapStateToProps)(MovieContainer)