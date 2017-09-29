export default function nutrientReducer(nutrients = {}, action) {
	switch (action.type) {
		case 'ADD_NUTRIENTS':
			return nutrients.map((nutrient, i) => {
				return Object.assign({}, nutrient, {total: nutrient.total + action.amount * action.payload[i].value});
			});
		case 'REMOVE_NUTRIENTS':
			return nutrients.map((nutrient, i) => {
				return Object.assign({}, nutrient, {total: nutrient.total - (action.product.amount / 100) * action.product.fetched.nutrients[i].value});
			});
		case 'RECALCULATE_NUTRIENTS':
			action.payload.map((product) => {
				if (product.fetched) {
					return nutrients.map((nutrient, i) => {
						return Object.assign({}, nutrient, {total: nutrient.total + (product.amount / 100) * product.fetched.nutrients[i].value});
					});
				} else {
					return nutrients.map((nutrient, i) => {
						return Object.assign({}, nutrient, {total: nutrient.total + 0});
					});
				}
			});
			return nutrients;
		default:
			return nutrients;
	}
}