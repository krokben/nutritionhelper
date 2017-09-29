export default function localReducer(locals = [], action) {
	switch (action.type) {
		case 'ADD_LOCAL':
			return [action.id, ...locals];
		case 'REMOVE_LOCAL':
			return locals.filter(local => {
				return local !== action.id;
			});
		case 'SET_LOCALS':
			return [...action.payload];
		case 'SET_LOCALSTORAGE':
			localStorage.setItem('nutrition', JSON.stringify(locals));
			return locals;
		default:
			return locals;
	}
}