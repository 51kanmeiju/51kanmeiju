import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import {Link} from 'react-router';
import 'slick-carousel';

class BannerSlider extends Component {

    constructor(props) {
        super(props)

        this.state = {
            settings: {
                dots: true,
                infinite: false,
                speed: 800,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
            }
        };
    }

    componentDidMount() {
        
    }

    render() {
        const {settings} = this.state;
        const {movies} = this.props;

        let slider = "";
        if (movies.length > 0 ) {
            let slideItems = [];
            movies.forEach(function (movie) {
                slideItems.push(
                    <div key={movie.id} className="owl-item">
                        <article className="item">
                            <div className="image">
                                <Link to={'/movie/' + movie.id}>
                                    <img src={movie.poster} alt={movie.name}/>
                                </Link>
                                <Link to={'/movie/' + movie.id}>
                                    <div className="data">
                                        <h3 className="title">{movie.name}</h3>
                                        <span>{movie.from_year}</span>
                                    </div>
                                </Link>
                                <span className="item_type">美剧</span>
                            </div>
                        </article>
                    </div>
                );
            });

            slider = <Slider {...settings}>{slideItems}</Slider>
        }

        return (
            <div className="slider home-slider">
                {slider}
            </div>
        );
    }
}

const propTypes = {
    movies: PropTypes.array.isRequired
};
BannerSlider.propTypes = propTypes;

export default BannerSlider;