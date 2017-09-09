import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
	applyMiddleware(thunk, createLogger())
)(createStore);

export default function configureStore(initialState = {products: [], nutrition: {}, rdi: {}}) {
	return finalCreateStore(rootReducer, initialState);
}