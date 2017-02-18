import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Promise from 'bluebird';
import Helmet from 'react-helmet';

import {loadCategory} from '../actions/CategoryActions';
import {loadMoviesInCategory, initMovieYearsAndCategories} from '../actions/MovieActions';
import ListView from '../components/ListView';
import MovieFilter from '../components/MovieFilter';
import Pagin from '../components/Pagin';

class CategoryContainer extends Component {

  constructor(props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  static initData({params, query, store}) {
    const {dispatch} = store;
    return Promise.all([
      dispatch(loadCategory(params.id)),
      dispatch(loadMoviesInCategory(params.id)),
      dispatch(initMovieYearsAndCategories()),
    ]);
  }

	componentDidMount(){
		const {dispatch, params} = this.props;
		dispatch(loadCategory(params.id));
		dispatch(loadMoviesInCategory(params.id));
    dispatch(initMovieYearsAndCategories());
	}

	componentWillReceiveProps(nextProps) {
		const {dispatch, params, category} = nextProps;
		if (params.id != this.props.params.id) {
			dispatch(loadCategory(params.id));
			dispatch(loadMoviesInCategory(params.id));
		}
	}

  handlePageChange(page) {
    const {dispatch, params} = this.props;
      dispatch(loadMoviesInCategory(params.id, page));
  }

	render() {
		const {category} = this.props;
		return (
      <div className="views-content">
          <Helmet title={ " 最新美剧下载 | " + category.category.name + " 美剧"} />
          <ListView title={category.category.name} items={category.movies.list}/>

          <Pagin totalPage={category.movies.total} pageSet={this.handlePageChange}/>
      </div>
		);
	}
}

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	category: PropTypes.object.isRequired,
	params: PropTypes.object.isRequired
};
CategoryContainer.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
	const {category, movie, year} = state;
  const {years, categories} = movie;
  const {params} = ownProps;
	return {
		category,
		params,     
		movie,
    years,
    categories,
    year,
	};
}

export default  connect(mapStateToProps)(CategoryContainer);