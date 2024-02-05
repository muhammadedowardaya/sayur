import { useSelector } from 'react-redux';
import '../styles/Footer.scss';

export default function Footer() {
	const brand = useSelector((state) => state.content.data.brand);

	return (
		<footer id="footer">
			<span className="brand">
				<img
					src={`/brand/${brand.image}`}
					className="brand-image"
					alt="brand-image"
				/>
				{brand.name}
			</span>
			| Copyright 2024
		</footer>
	);
}
