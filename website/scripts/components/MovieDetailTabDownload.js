import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import * as convert from '../utils/URLConvert';
import CopyToClipboard from 'react-copy-to-clipboard';

const cnNums = {
    '0': '一',
    '1': '一',
    '2': '二',
    '3': '三',
    '4': '四',
    '5': '五',
    '6': '六',
    '7': '七',
    '8': '八',
    '9': '九',
    '10': '十',
    '11': '十一',
    '12': '十二',
    '13': '十三',
    '14': '十四',
    '15': '十五',
    '16': '十六',
    '17': '十七',
};

class MovieDetailTabDownload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            crtSeason: 1
        };
    }

    handleCopy() {
        alert("下载链接已复制");
    }

    showSeasonLinks(season) {
        this.setState({
            crtSeason: season
        });
    }

    renderDownloadLinks() {
        const {download_links} = this.props.movie;
        let fininalItems = []
        // 季 列表 
        let seasons = []
        for (let season in download_links) {
            seasons.push(season);
        }
        let seasonItemsHtml = seasons.map( (season) => {
            let seasonName = cnNums[season];
            if (typeof seasonName == 'undefined') seasonName = '周边';
            else seasonName = '第'+seasonName+'季';
            return (
                <li key={season + '-index'} className={ {true: 'active'}[this.state.crtSeason == season] } onClick={ () => {this.showSeasonLinks(season)} }>
                    <a href="javascript:void(0)">{seasonName}</a>
                </li>
            );
        });
        let seasonContainer = <div key={'season-container'} className="season-items"><ul className="clearfix">{seasonItemsHtml}</ul></div>;
        fininalItems.push(seasonContainer);

        for (let season in download_links) {
            if (season != this.state.crtSeason) continue;
            if (typeof cnNums[season] != 'undefined') {
                fininalItems.push(<h3 key={season + '-season-list-index'}>第{cnNums[season]}季</h3>);
            }
            else {
                fininalItems.push(<h3 key={season + '-season-list-index'}>周边</h3>);
            }
            let links = download_links[season];
            let items = []
            if (Object.prototype.toString.apply(links) == '[object Array]') {
                items = links.map( (link, index2) => {
                    return (
                        <li key={season + '-' + index2}>
                            <span className="movie-index">第{index2+1}集</span>
                            <input disabled={true} className="download-input" type="text" value={link} />
                            <CopyToClipboard text={link} onCopy={ () => {this.handleCopy() } } >
                                <button className="btn button btn-blue btn-copy">复制</button>
                            </CopyToClipboard>
                            <a target="_blank" href={ convert.ThunderEncode(link) } className="btn button btn-green btn-thunder">迅雷下载</a>
                            <a target="_blank" href={ convert.QQEncode(link) } className="btn button btn-yellow btn-xuanfeng">旋风下载</a>
                        </li>
                    );
                } );
            }
            else if (Object.prototype.toString.apply(a) == '[object Object]') {
                
            }
            
            fininalItems = fininalItems.concat(items);
        }

        return fininalItems;
    }

	render() {
		return (
			<div ref="download" className="sbox fixidtab">
                <h2>下载链接</h2>
                <div className="topic-content">
                	<ul className="download-links">
                		{this.renderDownloadLinks()}
                	</ul>
                </div>
            </div>
		);
	}
}
const propTypes = {
	movie: PropTypes.object.isRequired
};
MovieDetailTabDownload.propTypes = propTypes;

export default MovieDetailTabDownload