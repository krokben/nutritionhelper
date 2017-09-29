const localActions = {
	addLocal(id) {
		return {
			type: 'ADD_LOCAL',
			id
		}
	},
	removeLocal(id) {
		return {
			type: 'REMOVE_LOCAL',
			id
		}
	},
	setLocals(payload) {
		return {
			type: 'SET_LOCALS',
			payload
		}
	},
	setLocalStorage() {
		return {
			type: 'SET_LOCALSTORAGE'
		}
	}
}

export default localActions;