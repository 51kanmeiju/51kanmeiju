import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


class ListView extends Component {

    render() {
        const {title, items} = this.props;
        return (
            <div className="list-view">
                <header><h1>{title}</h1></header>

                <div className="items">
                    {items.map( item => {
                        return (
                            <article key={item.id} className="item movies">
                                <div className="poster">
                                    <Link to={'/movie/' + item.id}>
                                        <img src={item.poster} />
                                    </Link>
                                    <div className="rating">
                                        <span className="icon-star2"></span>{item.star}
                                    </div>
                                </div>
                                <div className="data">
                                    <h3><Link to={'/movie/' + item.id}>{item.name}</Link></h3>
                                    <span>{item.from_year}</span>
                                </div>
                            </article>
                        )
                    }) }
                </div>
            </div>
        );
    }
}

const propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
};
const defaultProps = {
    title: '列表',
};
ListView.propTypes = propTypes;
ListView.defaultProps = defaultProps;

export default ListView;