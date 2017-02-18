import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Pagin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            crtPage: 1
        };
    }

    pageClick(page) {
        this.setState({crtPage: page});
        this.props.pageSet(page);
    }

    render() {
        const {totalPage} = this.props;

        let pageElements = [];

        let renderPagerLink = (from, to) => {
            let html = [];
            for (let i = from; i <= to; i ++) {
                if (i == this.state.crtPage) {
                    html.push(<span key={i} className="current">{i}</span>)
                }
                else {                
                    html.push(<a key={i} className='inactive' onClick={  this.pageClick.bind(this, i) } >{i}</a>);
                }
            }
            return html;
        }
        renderPagerLink = renderPagerLink.bind(this);

        let start = 5;
        let last = totalPage - 3;
        let maxkey = 100000;
        if (totalPage > 1 && totalPage <= start) {
            pageElements = renderPagerLink(1, totalPage);
        }
        else if ( totalPage > start ) {
            pageElements = renderPagerLink(1, start);

            // 中间分页滑动条
            let sliderPage = [];
            let dotElements = [];
            let crtPage = this.state.crtPage;
            if (crtPage >= start && crtPage <= last && last - start > 0 ) {
                if (crtPage - start  > 2 ) {
                    sliderPage.push(<span key={ 1 + maxkey}>...</span>);
                }
                if (crtPage - start > 1 ) {
                    sliderPage.push(<a  onClick={  this.pageClick.bind(this, crtPage - 1) } key={crtPage - 1}>{crtPage - 1}</a>);
                }
                if (crtPage - start > 0 && last - crtPage > 0 ) {
                    sliderPage.push(<span className="current" key={crtPage}>{crtPage }</span>);
                }
                if (last - crtPage > 2) {
                    sliderPage.push(<a  onClick={  this.pageClick.bind(this, crtPage + 1) } key={crtPage + 1 }>{crtPage + 1}</a>);
                }
                if (last - crtPage > 3) {
                    sliderPage.push(<span key={  2 + maxkey}>...</span>);
                }
            }
            else if (last - start > 0) {
                dotElements = [<span key={maxkey + 3}>...</span>];
            }

            dotElements = dotElements.concat(sliderPage);
            dotElements = dotElements.concat(renderPagerLink(Math.max(last, start + 1), totalPage));
            pageElements = pageElements.concat(dotElements);
        }

        return (
            <div className="pagination">
                <span>Page {this.state.crtPage} of {totalPage}</span>
                {pageElements}
            </div>
        );
    }
}

const propTypes = {
    totalPage: PropTypes.number.isRequired,
    pageChanged: PropTypes.func
};
Pagin.propTypes = propTypes;
Pagin.defaultProps = {
    totalAccount: 0,
    pageSet: (page, totalPage) => {
        //
    }
};

export default Pagin