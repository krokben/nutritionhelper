export default function productReducer(products = [], action) {
	switch (action.type) {
		case 'CHANGE_AMOUNT':
			return products.map((product) => {
				return product.id === action.payload.id ?
					Object.assign({}, product, {amount: action.payload.amount}) : product;
			});
		case 'CHOOSE_PRODUCT':
			return products.map((product) => {
				return product.id === action.payload.id ?
					Object.assign({}, product, {chosen: true, fetched: action.payload.fetched}) : product;
			});
		case 'REMOVE_PRODUCT':
			return products.map((product) => {
				return product.id === action.id ?
					Object.assign({}, product, {chosen: false, fetched: false}) : product;
			});
		default:
			return products;
	}
}