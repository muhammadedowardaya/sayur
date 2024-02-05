import { useSelector } from 'react-redux';
import '../styles/Navbar.scss';

export default function Navbar() {
	const brand = useSelector((state) => state.content.data.brand);

	const toggleBurgerButton = () => {
		const navbar = document.getElementById('navbar');
		navbar.classList.toggle('active');
	};

	return (
		<nav id="navbar">
			<div className="brand">
				<img src={`/brand/${brand.image}`} className="brand-image" alt="" />
				<span>{brand.name}</span>
			</div>
			<ul>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#products">Products</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="burger-menu" onClick={toggleBurgerButton}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
}
