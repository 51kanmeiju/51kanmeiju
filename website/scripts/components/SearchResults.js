import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import ListView from './ListView';
import Pagin from './Pagin';
import {searchKeywordChanged} from '../actions/SearchActions';

if (typeof exports != 'undefined') {
    var window = {};
    var document = {};
}

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    const {keyword, dispatch} = this.props.search;
    dispatch(searchKeywordChanged(keyword, page));
  }

	render() {
		const {searchBarActive, searching, results, keyword} = this.props.search;
    if (typeof exports == 'undefined') {
      let html = document.getElementsByTagName('html')[0];
      let oldCls = html.getAttribute('class');
      if (!oldCls) oldCls = '';
      if (searching && oldCls.indexOf('overhidden') == -1 ) {
          html.setAttribute('class' ,oldCls + ' overhidden');
      }
      else if (!searching) {
          html.setAttribute('class' ,oldCls.replace('overhidden'));
      }
    }
		if (searching) { 
			return (
				<div className={ 'search-wrap ' + ( searchBarActive ? ' search-wrap-active': '' ) }>
					<div className="search-results module">
						<div className="content clearfix">
							<ListView items={results.list} title={"搜索 \"" + keyword + '"的结果'} />
              <Pagin totalPage={results.total} pageChange={ this.handlePageChange }/>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

const propTypes = {
	search: PropTypes.object.isRequired
};
SearchResults.propTypes = propTypes;

export default SearchResults;