import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Promise from 'bluebird';
import Helmet from 'react-helmet';

import MovieFilter from '../components/MovieFilter';
import BannerSlider from '../components/BannerSlider';
import MovieSlider from '../components/MovieSlider';
import HomeMovieTop from '../components/HomeMovieTop';
import {initMovieYearsAndCategories, initHomeMovies, loadLastMovies} from '../actions/MovieActions';

class HomeContainer extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(initMovieYearsAndCategories());
        dispatch(initHomeMovies());
        dispatch(loadLastMovies());
    }

    // call by server
    static initData({store}) {
        const {dispatch} = store;
        return Promise.all([
            dispatch(initMovieYearsAndCategories()),
            dispatch(initHomeMovies()),
            dispatch(loadLastMovies())
        ]);
    }

    render() {
        const {promotions, hots, lastMovies} = this.props;
        return (
            <div className="module">
                <Helmet 
                    title="真正的美剧资源汇集站 | 高清美剧资源下载 | 每日最新最火美剧"
                 />
                <MovieFilter {...this.props}/>
                <div className="content">
                    <BannerSlider movies={this.props.bannerMovies.movies} />
                    <MovieSlider title="热门美剧" sliderItems={hots.movies} allLink="/views/hot"/>
                    <MovieSlider title="最近更新" sliderItems={lastMovies.movies} allLink="/views/newest"/>
                    <MovieSlider title="智能推荐" sliderItems={promotions.movies}/>
                </div>
            </div>
        );
    }
}

const propTypes = {
    movie: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

HomeContainer.propTypes = propTypes;

function mapStateToProps(state) {
    const {movie, user} = state;
    const {years, categories, hots, promotions, bannerMovies, lastMovies} = movie;

    return {
        movie,
        years,
        categories,
        hots,
        promotions,
        bannerMovies,
        lastMovies,
        user
    }
}

export default connect(mapStateToProps)(HomeContainer);