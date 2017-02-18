import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';

import {loadHotMovies} from '../actions/MovieActions';
import ListView from '../components/ListView';
import Pagin from '../components/Pagin';
import Promise from 'bluebird';

class HotMovieContainer extends Component {

	constructor(props) {
		super(props);
		this.handlePageChange = this.handlePageChange.bind(this);
	}

	static initData({store}) {
		const {dispatch} = store;
		return Promise.all([
			dispatch(loadHotMovies())
		]);
	}
	
	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(loadHotMovies());
	}

	handlePageChange(page) {
		const {dispatch} = this.props;
		dispatch(loadHotMovies(page));
	}

	render() {
		const {hotMovies} = this.props;
		return (
			<div className="views-content">
        <Helmet title={ " 热门美剧资源 | 热门美剧下载 " } />
				<ListView title="热门美剧" items={hotMovies.movies}/>
				<Pagin totalPage={hotMovies.total} pageSet={ this.handlePageChange }/>
			</div>
		);
	}
}

const propTypes = {
	dispatch: PropTypes.func.isRequired
};
HotMovieContainer.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
	const {hots} = state.movie;
	return {
		hotMovies:hots
	};
}

export default connect(mapStateToProps)(HotMovieContainer);