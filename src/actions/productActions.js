const productActions = {
	changeAmount(payload) {
		return {
			type: 'CHANGE_AMOUNT',
			payload: {id: payload.id, amount: payload.amount}
		}
	},
	chooseProduct(payload) {
		return {
			type: 'CHOOSE_PRODUCT',
			payload
		}
	},
	removeProduct(id) {
		return {
			type: 'REMOVE_PRODUCT',
			id
		}
	}
}

export default productActions;