import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {searchKeywordChanged, searchBarActiveChanged} from '../actions/SearchActions';

const SCROLL_DOWN = 'd';
const SCROLL_UP = 'u';



class TopSearchBar extends Component {

    constructor(props) {
        super(props)

        let state = {
            scrollTop: 0,
            active: true,
        };

        if (typeof window != 'undefined') {
            state['scrollDirection'] = window.scrollY > 0 ? SCROLL_DOWN: SCROLL_UP;
        }
        else {
            state['scrollDirection'] = SCROLL_DOWN;
        }

        this.state = state;
        this.onScroll = this.onScroll.bind(this);
        this.keywordChange = this.keywordChange.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
        this.handleButtonEnterPress = this.handleButtonEnterPress.bind(this);
        this.changeTimer = null;
    }

    onScroll() {
        this.setState({
            scrollDirection: this.state.scrollTop - window.scrollY > 0 ? SCROLL_UP: SCROLL_DOWN,
            scrollTop: window.scrollY
        });
        const {dispatch} = this.props;
        dispatch(searchBarActiveChanged(this.state.scrollDirection == SCROLL_DOWN ? false: true));
    }

    toggleActive() {
        this.setState({
            active: !this.state.active
        });
    }

    componentDidMount() {
        if (typeof window != 'undefined') {
            window.addEventListener('scroll', this.onScroll, false);
        }
    }

    componentWillUnmount() {
        if (typeof window != 'undefined') {
            window.removeEventListener('scroll', this.onScroll, false);
        }
    }

    keywordChange() {
        const {dispatch} = this.props;
        if (this.changeTimer) {
            window.clearTimeout(this.changeTimer);
        }

        // 1秒后执行搜索
        let searchElement = this.refs.search;
        this.changeTimer = window.setTimeout(function () {
            dispatch(searchKeywordChanged(searchElement.value));
        }, 1000);
    }

    handleButtonEnterPress(event) {
        event.preventDefault();
        if (event.charCode == 13) {
            this.keywordChange();
        }
    }

    render() {
        const {scrollDirection, active} = this.state;
        return (
            <div className={'top-search-bar scroll-' + scrollDirection}>
                <div className="hbox">
                    <div className="logo">
                        <a href="http://51kanmeiju.com/">
                            <img src="/public/images/logo.png" />
                        </a>
                    </div>
                    <div className="head-items">
                        <div className={"search advcblock " + ( active ? '': 'hideme' ) }>
                            <form method="get" onSubmit={this.handleButtonEnterPress}>
                                <input onChange={this.keywordChange} ref="search" type="text" placeholder="Search..." />
                                <button type="submit" onnKeyPress={this.handleButtonEnterPress}>
                                    <span className="icon-search2" />
                                </button>
                            </form>
                        </div>
                        <div className="elements">
                            <ul className="dt_sm">
                                <a onClick={this.toggleActive} className={'iconn nav-advc ' +  ( active ? '' : 'dactive') }></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const propTypes = {
    dispatch: PropTypes.func.isRequired,
};

TopSearchBar.propTypes = propTypes;

export default TopSearchBar;

