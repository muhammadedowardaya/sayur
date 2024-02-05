import '../styles/Main.scss';
import { FaPlayCircle } from 'react-icons/fa';
import gsap from 'gsap';
import ProductsList from './ProductsList';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function Main({ products }) {
	const about = useSelector((state) => state.content.data.about);
	const description = useSelector(
		(state) => state.content.data.products.description
	);

	const playButtonHandler = () => {
		const video = document.getElementById('myVideo');
		const playButton = document.getElementById('playButton');

		if (video.paused) {
			video.play();
			gsap.to(playButton, {
				display: 'none',
				scale: 4,
				opacity: 0,
			});
		}
	};

	const videoHandler = () => {
		const video = document.getElementById('myVideo');
		const playButton = document.getElementById('playButton');

		if (video.played) {
			video.pause();
			gsap.to(playButton, {
				display: 'block',
				scale: 1,
				opacity: 1,
				duration: 0.2,
			});
		}
	};

	return (
		<main>
			<div id="about">
				<h2>About Us</h2>
				<p>{about.text}</p>
				<div className="video-container">
					<video
						id="myVideo"
						loop
						onError={(e) => console.error('Video Error:', e)}
						onClick={videoHandler}
					>
						<source src={about.video} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<div
						className="play-button"
						id="playButton"
						onClick={playButtonHandler}
					>
						<FaPlayCircle id="play-icon" />
					</div>
				</div>
			</div>
			<div id="products">
				<h2>Browse Product</h2>
				<p>{description}</p>
				<ProductsList products={products} />
			</div>
		</main>
	);
}

Main.propTypes = {
	products: PropTypes.array,
};
