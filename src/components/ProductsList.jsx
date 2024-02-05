import ProductItem from './ProductItem';
import '../styles/ProductsList.scss';

import PropTypes from 'prop-types';

export default function ProductsList({ products }) {
	if (products.length > 0) {
		return (
			<div id="products-list">
				{products.map((item, index) => (
					<ProductItem
						key={index}
						name={item.name}
						count={item.count}
						price={item.price}
						image={index + 1}
					/>
				))}
			</div>
		);
	} else {
		return (
			<div id="products-list">
				<p className="products-empty">Products is empty</p>
			</div>
		);
	}
}

ProductsList.propTypes = {
	products: PropTypes.array,
};
