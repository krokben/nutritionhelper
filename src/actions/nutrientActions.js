const nutrientActions = {
	addNutrients(payload, amount) {
		return {
			type: 'ADD_NUTRIENTS',
			payload,
			amount
		}
	},
	removeNutrients(product) {
		return {
			type: 'REMOVE_NUTRIENTS',
			product
		}
	},
	recalculateNutrients(payload) {
		return {
			type: 'RECALCULATE_NUTRIENTS',
			payload
		}
	}
}

export default nutrientActions;