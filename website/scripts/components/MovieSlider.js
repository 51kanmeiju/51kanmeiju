import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel';
import {Link} from 'react-router';
import MovieItem from './MovieItem';


const propTypes = {
    title: PropTypes.string.isRequired,
    sliderItems: PropTypes.array.isRequired,
    settings: PropTypes.object,
    allLink: PropTypes.string
};

const defaultProps = {
    settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        noPretitle: false,
    }
};

class MovieSlider extends Component {

    next() {
        this.refs.slider.slickNext();
    }
    prev() {
        this.refs.slider.slickPrev();
    }

    render() {
        const {title, sliderItems, settings} = this.props;

        let slider = "";
        if (sliderItems.length > 0) {
            let sliderHTML = [];
            sliderItems.forEach(function (sliderItem, index){
                sliderHTML.push(<div key={index} className="owl-item">
                    <MovieItem movie={sliderItem} />
                </div>)
            });
            slider = <Slider ref="slider" {...settings}>{sliderHTML}</Slider>
        }

        let linkMore ;
        if (this.props.allLink) {
            linkMore = <span><Link to={this.props.allLink}>查看全部</Link>&nbsp;/&nbsp;{sliderItems.length}&nbsp;</span>;
        }

        return (
            <div className="movie-slider items">
                <header>
                    <h2>{title}</h2>
                    { settings.noPretitle ? ('') : (
                        <div>
                            <div className="nav_items_module">
                                <a onClick={this.prev.bind(this)} className="btn prev3"><i className="icon-caret-left"></i></a>
                                <a onClick={this.next.bind(this)} className="btn next3"><i className="icon-caret-right"></i></a>
                            </div>
                            {linkMore}
                        </div>
                    ) }
                </header>
                <div className="slider movie-slider">
                    {slider}
                </div>
            </div>
        );
    }
}

MovieSlider.propTypes = propTypes;
MovieSlider.defaultProps = defaultProps;

export default MovieSlider;