import React, {Component, PropTypes} from 'react';
import {activeClassName} from '../utils/RouteUtils';
import * as userUtil from '../utils/user';
import {Link} from 'react-router';

class MovieFilter extends Component {

    render() {
        const {years, categories} = this.props;
        let yearLinks = [];
        years.forEach( (year) => {
            yearLinks.push(<li key={year['year']}><Link to={'/views/year/' + year.year} >{year['year'] == 0 ? '其他': year.year}</Link></li>)
        });

        let categoryLinks = [];
        for (let i = 0; i < categories.length; i++) {
            let links = [];
            let category1 = categories[i];
            categoryLinks.push(
                <li key={i}><Link to={'/views/category/' + category1.id}>{category1.name}</Link> <i>{category1.total}</i></li>
            );
        }
        const {user} = this.props;
        let userLink = <li><Link to="/login"><i className="icon-person"></i>我的</Link></li>;
        if (userUtil.isLogged(user)) {
            userLink = <li><Link to="/user"><i className="icon-person">我的</i></Link></li>;
        }

        return (
            <div className="home-left-nav">
                <div className="sidemenu">
                    <h2>菜单导航</h2>
                    <ul className="main_links">
                        <li><Link to="/"><i className="icon-home"></i>首页</Link></li>
                        <li><Link to="/views/hot"><i className="icon-video-camera"></i>热门美剧</Link></li>
                        <li><Link to="/views/newest"><i className="icon-fire"></i>本周最新</Link></li>
                        <li><Link to="/views/topic"><i className="icon-star2"></i>美剧时评</Link></li>
                    </ul>
                </div>
                <div className="sidemenu">
                    <h2>美剧类目</h2>
                    <ul className="genres scrolling">
                        {categoryLinks}
                    </ul>
                </div>
                <div className="sidemenu">
                    <h2>发布年份</h2>
                    <ul className="year scrolling">
                        {yearLinks}
                    </ul>
                </div>
            </div>
        );
    }
}

const propTypes = {
    years: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    user: PropTypes.object,
};

MovieFilter.propTypes = propTypes;

export default MovieFilter;




