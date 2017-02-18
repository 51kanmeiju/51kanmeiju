import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';

import {loadLastMovies} from '../actions/MovieActions';
import ListView from '../components/ListView';
import Pagin from '../components/Pagin';
import Promise from 'bluebird';

class LastMovieContainer extends Component {
	
	static initData({store}) {
		const {dispatch} = store;
		return Promise.all([
			dispatch(loadLastMovies())
		]);
	}

	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(loadLastMovies());
		this.handlePageChange = this.handlePageChange.bind(this);
	}

	handlePageChange(page) {
		this.props.dispatch(loadLastMovies(page));
	}

	render() {
		const {lastMovies} = this.props;
		return (
			<div className="views-content">
        <Helmet title={ " 最新美剧资源 | 最新美剧下载 " } />
				<ListView title="本周更新" items={lastMovies.movies}/>
				<Pagin totalPage={lastMovies.total} pageSet={this.handlePageChange}/>
			</div>
		);
	}
}

const propTypes = {
	dispatch: PropTypes.func.isRequired
};
LastMovieContainer.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
	const {lastMovies} = state.movie;
	return {
		lastMovies
	};
}

export default connect(mapStateToProps)(LastMovieContainer);