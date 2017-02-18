import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';

import {initNavigator} from '../actions/NavigatorActions';

import TopSearchBar from '../components/TopSearchBar';
import SearchResults from '../components/SearchResults';
import Footer from '../components/Footer';
import HomeContainer from './HomeContainer';
import MovieContainer from './MovieContainer';
import YearMoviesContainer from './YearMoviesContainer';
import NotFoundContainer from './NotFoundContainer';

import {Router, Route, browserHistory} from 'react-router';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
}

class App extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
    }

    render() {
        return (
            <div className="body">
                <Helmet 
                    titleTemplate="我要看美剧 - %s"
                    defaultTitle= '真正的美剧资源汇集站 | 高清美剧资源下载 | 每日最新最火美剧'
                    meta={[
                        {name: "keywords", content: "我要看美剧,美剧下载,美剧天堂,神盾局,大群,西部世界,行尸走肉,ttmj,人人美剧,字幕组,高清美剧,高清电影,生活大爆炸,电影天堂"},
                        {name: "description", content: "我要看美剧提供最新美剧资源下载,第一时间为您提供最火最新的美剧资源,我要看美剧使用互联网最新技术 旨在为用户提供更好的用户体验;我要看美剧是一个非盈利性美剧爱好者组织. 主题是 看美剧 学英语"},
                        ]} />
                <TopSearchBar {...this.props}/>
                <div id="contenedor" className="clearfix">
                    {this.props.children}
                </div>
                <SearchResults {...this.props} />
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {navigator, search} = state;
    const {path} = navigator.route;

	return {
        path,
        search
	};
}

export default connect(mapStateToProps)(App);