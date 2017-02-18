import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

const propTypes = {

};

class HomeMovieTop extends Component {
    render() {
        return (
            <div className="home-movie-top">
                <header>
                    <h2>TOP IMDb</h2>
                    <span><a href="http://51kanmeiju.com/top-50">TOP 50</a></span>
                </header>

                <div className="top-imdb-list">
                    <h3><i className="icon-star2"></i>Movies</h3>
                    <div className="top-imdb-item">
                        <div className="image">
                            <div className="poster">
                                <a href="http://51kanmeiju.com"><img src="http://putlockers2.com/wp-content/uploads/2016/11/tgqXW2rNunZUXftTZU7EW6z2rD9-90x135.jpg" /></a>
                            </div>
                        </div>
                        <div className="puesto">1</div>
                        <div className="rating">8.8</div>
                        <div className="title">
                            <a href="http://putlockers2.com/movies/the-founder/">The Founder</a>
                        </div>
                    </div>

                    <div className="top-imdb-item">
                        <div className="image">
                            <div className="poster">
                                <a href="http://51kanmeiju.com"><img src="http://putlockers2.com/wp-content/uploads/2016/11/tgqXW2rNunZUXftTZU7EW6z2rD9-90x135.jpg" /></a>
                            </div>
                        </div>
                        <div className="puesto">1</div>
                        <div className="rating">8.8</div>
                        <div className="title">
                            <a href="http://putlockers2.com/movies/the-founder/">The Founder</a>
                        </div>
                    </div>
                </div>

                <div className="top-imdb-list">
                    <h3><i className="icon-star2"></i>Movies</h3>
                    <div className="top-imdb-item">
                        <div className="image">
                            <div className="poster">
                                <a href="http://51kanmeiju.com"><img src="http://putlockers2.com/wp-content/uploads/2016/11/tgqXW2rNunZUXftTZU7EW6z2rD9-90x135.jpg" /></a>
                            </div>
                        </div>
                        <div className="puesto">1</div>
                        <div className="rating">8.8</div>
                        <div className="title">
                            <a href="http://putlockers2.com/movies/the-founder/">The Founder</a>
                        </div>
                    </div>

                    <div className="top-imdb-item">
                        <div className="image">
                            <div className="poster">
                                <a href="http://51kanmeiju.com"><img src="http://putlockers2.com/wp-content/uploads/2016/11/tgqXW2rNunZUXftTZU7EW6z2rD9-90x135.jpg" /></a>
                            </div>
                        </div>
                        <div className="puesto">1</div>
                        <div className="rating">8.8</div>
                        <div className="title">
                            <a href="http://putlockers2.com/movies/the-founder/">The Founder</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

HomeMovieTop.propTypes = propTypes;

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(HomeMovieTop);