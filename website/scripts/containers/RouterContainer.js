import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory, browserHistory, IndexRedirect} from 'react-router';

import App from './App'
import HomeContainer from './HomeContainer';
import MovieContainer from './MovieContainer';
import YearMoviesContainer from './YearMoviesContainer';
import NotFoundContainer from './NotFoundContainer';
import CategoryContainer from './CategoryContainer';
import LastMoviesContainer from './LastMoviesContainer';
import ViewsContainer from './ViewsContainer';
import HotMoviesContainer from './HotMoviesContainer';
import TopicContainer from './TopicContainer';
import LoginContainer from './LoginContainer';

export const routes = {
	path: '/',
	component: App,
	indexRoute: {component: HomeContainer},
	childRoutes: [{
		path: '/views',
		component: ViewsContainer,
		onEnter: ({params}, replace) => {
			//replace('/');
			console.log('on enter ???');
		},
		childRoutes: [{
			path: 'year/:id',
			component: YearMoviesContainer,
		}, {
			path: 'category/:id',
			component: CategoryContainer
		}, {
			path: 'newest',
			component: LastMoviesContainer,
		}, {
			path: 'hot',
			component: HotMoviesContainer,
		}, {
			path: 'topic',
			component: TopicContainer
		}],
	}, {
		path: 'movie/:id',
		component: MovieContainer
	}, {
		path: 'login',
		component: LoginContainer
	}]
};

class RouterContainer extends Component {

	render() {
		return (
			<Router routes={routes} history={browserHistory}/>
			// <Router history={browserHistory} routes={routes}>
			// 	<Route path="/" component={App}>
	  //              <IndexRoute component={HomeContainer} />
	  //              <Route path="/views" component={ViewsContainer}>
	  //                      <IndexRedirect to="/" />
	  //                      <Route path="year/:id" component={YearMoviesContainer} />
	  //                      <Route path="category/:id" component={CategoryContainer} />
	  //                      <Route path="newest" component={LastMoviesContainer} />
	  //                      <Route path="hot" component={HotMoviesContainer} />
	  //                      <Route path="topic" component={TopicContainer} />
	  //             </Route>
	  //              <Route path="movie/:id" component={MovieContainer} />
	  //      </Route>
			// </Router>
		);
	}
}

export default RouterContainer