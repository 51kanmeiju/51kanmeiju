import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import MovieDetailTabInfo from './MovieDetailTabInfo';
import MovieDetailTabComments from './MovieDetailTabComments';
import MovieDetailTabDownload from './MovieDetailTabDownload';
import MovieDetailTabDirector from './MovieDetailTabDirector';

class MovieDetailTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            crttab: 'info',
        };
    }

    switchTab(crttab) {
        this.setState({crttab});
    }

    isActive(tab, activeCls = 'selected') {
        return this.state.crttab == tab ? activeCls: '';
    }

    renderTabContent() {
        const {crttab} = this.state;
        const {movie} = this.props;

        switch (crttab) {
            case 'info':
                return <MovieDetailTabInfo {...this.props} />;
            case 'comment':
                return <MovieDetailTabComments {...this.props} />;
            case 'download':
                return  <MovieDetailTabDownload {...this.props} />;
            case 'director':
                return  <MovieDetailTabDirector {...this.props} />;
        }
    }

    render() {
        const {movie} = this.props;
        return (
            <div className="movie-detail-tabs">
                <div className="single_tabs">
                    <ul id="section" className="smenu idTabs">
                        <li onClick={ () => this.switchTab('info')}><a className={this.isActive('info')}>影剧资料</a></li>
                        <li onClick={ () => this.switchTab('comment')}><a className={this.isActive('comment')}>热门评论</a></li>
                        <li onClick={ () => this.switchTab('download') }><a className={this.isActive('download')}>下载链接</a></li>        
                        <li onClick={ () => this.switchTab('director')}><a className={this.isActive('director')}>导演 & 演员</a></li>
                    </ul>
                </div>

                {this.renderTabContent()}
            </div>
        );
    }
}

const propTypes = {
    movie: PropTypes.object.isRequired
};
MovieDetailTabs.propTypes = propTypes;

export default MovieDetailTabs;