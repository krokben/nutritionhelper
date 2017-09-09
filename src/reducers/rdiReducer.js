export default function rdiReducer(rdi = {}, action) {
	switch (action.type) {
		case 'CHANGE_RDI':
			return;
		default:
			return rdi;
	}
}