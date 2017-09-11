import { combineReducers } from 'redux';
import productReducer from './productReducer';
import nutrientReducer from './nutrientReducer';
import rdiReducer from './rdiReducer';

const rootReducer = combineReducers({
	products: productReducer,
	nutrients: nutrientReducer,
	rdi: rdiReducer
});

export default rootReducer;