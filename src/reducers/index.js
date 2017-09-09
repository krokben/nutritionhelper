import { combineReducers } from 'redux';
import productReducer from './productReducer';
import nutritionReducer from './nutritionReducer';
import rdiReducer from './rdiReducer';

const rootReducer = combineReducers({
	products: productReducer,
	nutrition: nutritionReducer,
	rdi: rdiReducer
});

export default rootReducer;