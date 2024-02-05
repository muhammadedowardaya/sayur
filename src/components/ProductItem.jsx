import PropTypes from 'prop-types';
import '../styles/ProductItem.scss';
import { formatCurrency } from '../utils/formatCurrency';

export default function ProductItem({ name, count, price, image }) {
	return (
		<div className="product-item">
			<img src={`/products/${image}.jpg`} alt={`${name} image`} />
			<div className="info">
				<p className="name">{name}</p>
				<p className="count">{count}</p>
				<p className="price">{formatCurrency(price)}</p>
			</div>
		</div>
	);
}

ProductItem.propTypes = {
	name: PropTypes.string.isRequired,
	count: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	image: PropTypes.number,
};
