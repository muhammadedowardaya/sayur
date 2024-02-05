import { useSelector } from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import './styles/App.scss';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	const products = useSelector((state) => state.products.data);
	const testimonials = useSelector((state) => state.testimonials.data);

	return (
		<>
			<div className="app">
				<Navbar />
				<Header />
				<Main products={products} />
				<Testimonials data={testimonials} />
				<Contact />
			</div>
			<Footer />
		</>
	);
}

export default App;
