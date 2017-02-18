import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import MovieFilter from '../components/MovieFilter';

import {initMovieYearsAndCategories} from '../actions/MovieActions';
import Promise from 'bluebird';

const propTypes = {
    dispatch: PropTypes.func.isRequired
};

class ViewsContainer extends Component {

    static initData({store}) {
        const {dispatch} = store;
        return Promise.all([
            dispatch(initMovieYearsAndCategories())
        ]);
    }

    componentDidMount() {
        const {dispatch, params} = this.props;
        dispatch(initMovieYearsAndCategories());
    }

    render() {
        const {year, params} = this.props;
        return (
            <div className="module">
                <MovieFilter {...this.props}/>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ViewsContainer.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
    const {years, categories} = state.movie;
    const {user} = state;

    return {
        years,
        categories,
        user,
    }
}

export default connect(mapStateToProps)(ViewsContainer);