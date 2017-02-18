import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';

import MovieFilter from '../components/MovieFilter';
import ListView from '../components/ListView';
import Pagin from '../components/Pagin';

import {loadYearMovies} from '../actions/MovieActions';

const propTypes = {
    dispatch: PropTypes.func.isRequired
};

class YearMoviesContainer extends Component {

    constructor(props) {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(page) {
        const {dispatch, params} = this.props;
        dispatch(loadYearMovies(params.id, page));
    }

    static initData({store, params}) {
        const {dispatch} = store;
        return Promise.all([
            dispatch(loadYearMovies(params.id))
        ]);
    }

    componentDidMount() {
        const {dispatch, params} = this.props;
        dispatch(loadYearMovies(params.id));
    }

    componentWillReceiveProps(newProps) {
        const {params, dispatch} = newProps;
        if (params.id != this.props.params.id) {
            dispatch(loadYearMovies(params.id));
        }
    }

    render() {
        const {year, params} = this.props;
        let movies = year.years[params.id] ? year.years[params.id]: [];
        if (typeof movies.list == 'undefined') {
            movies = {
                list: [],
                total: 1
            }
        }
        return (
            <div className="views-content">

                <Helmet title={ params.id + '年份美剧列表 ' } />

                <ListView  title={ '发行自' + params.id + '年'} items={movies.list}/>

                <Pagin totalPage={movies.total} pageSet={this.handlePageChange}/>
            </div>
        );
    }
}

YearMoviesContainer.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
    const {movie, year} = state;
    const {years, categories, hots, promotions, bannerMovies} = movie;

    return {
        movie,
        years,
        categories,
        hots,
        promotions,
        bannerMovies,
        year,
        params: ownProps.params
    }
}

export default connect(mapStateToProps)(YearMoviesContainer);