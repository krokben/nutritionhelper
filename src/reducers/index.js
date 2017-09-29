import { combineReducers } from 'redux';
import productReducer from './productReducer';
import nutrientReducer from './nutrientReducer';
import rdiReducer from './rdiReducer';
import localReducer from './localReducer';

const rootReducer = combineReducers({
	products: productReducer,
	nutrients: nutrientReducer,
	rdi: rdiReducer,
	locals: localReducer
});

export default rootReducer;