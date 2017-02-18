import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import "isomorphic-fetch";
import "./polyfill.js";
import '../styles/main.scss';

import appStore from './store/appStore';
import RouterContainer from './containers/RouterContainer';

const store = appStore(window.__PRELOADED_STATE__);

ReactDOM.render(
	<Provider store={store}>
		<RouterContainer />
	</Provider>
, document.getElementById('root'))



