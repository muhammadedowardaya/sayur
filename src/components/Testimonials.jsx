import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '../styles/Testimonials.scss';

import { BsQuote } from 'react-icons/bs';

import PropTypes from 'prop-types';
import React from 'react';

export default function Testimonials({ data }) {
	const [slidesToShow, setSlidesToShow] = React.useState(() => {
		const windowWidth = window.innerWidth;

		if (windowWidth < 500) {
			return 1;
		} else if (windowWidth <= 1000) {
			return 2;
		} else {
			return 3;
		}
	});

	const [slideSpeed, setSlideSpeed] = React.useState(() => {
		if (window.innerWidth < 500) {
			return 5000;
		} else if (window.innerWidth <= 1000) {
			return 3000;
		}else {
            return 2000;
        }
	});

	const [autoplaySpeed, setAutoPlaySpeed] = React.useState(() => {
		if (window.innerWidth < 500) {
			return 2000;
		} else if (window.innerWidth <= 1000) {
			return 3000;
		}else {
            return 4000;
        }
	});

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		autoplay: true,
		speed: slideSpeed,
		autoplaySpeed: autoplaySpeed,
		cssEase: 'linear',
	};

	const handleResize = () => {
		const windowWidth = window.innerWidth;

		if (windowWidth < 500) {
			setSlidesToShow(1);
			setSlideSpeed(5000);
            setAutoPlaySpeed(2000);
		} else if (windowWidth <= 1000) {
            setSlidesToShow(2);
			setSlideSpeed(3000);
            setAutoPlaySpeed(3000);
		} else {
            setSlidesToShow(3);
			setSlideSpeed(2000);
            setAutoPlaySpeed(3000);
		}
	};

	React.useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	if (data.length > 0) {
		return (
			<div id="testimonials">
				<h2>What Our Customer Says</h2>
				<div className="testimonial-item__wrapper">
					<Slider {...settings}>
						{data.map((item, index) => (
							<div className="testimonial-item" key={index}>
								<img
									className="image"
									src={`/testimonials/${index + 1}.jpg`}
									alt={item.name}
								/>
								<p className="name">{item.name && item.name}</p>
								<p className="quotes">
									{item.quotes ? <BsQuote className="quote-icon" /> : ''}
									{item.quotes && item.quotes}
								</p>
							</div>
						))}
					</Slider>
				</div>
			</div>
		);
	} else {
		return (
			<div id="testimonial">
				<div>Testimonial is empty</div>
			</div>
		);
	}
}

Testimonials.propTypes = {
	data: PropTypes.array,
};
