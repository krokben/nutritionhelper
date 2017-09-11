import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import productActions from './actions/productActions';
import nutrientActions from './actions/nutrientActions';
import ProductList from './components/ProductList';
import NutritionList from './components/NutritionList';

class App extends Component {
	render() {
		const container = {
			width: '80vw',
			margin: '15px auto',
			fontFamily: 'Arial'
		};

		return (
			<div style={container}>
				<ProductList products={this.props.products} productActions={this.props.productActions} nutrientActions={this.props.nutrientActions} />
				<NutritionList nutrients={this.props.nutrients} rdi={this.props.rdi} products={this.props.products} productActions={this.props.productActions} nutrientActions={this.props.nutrientActions} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		productActions: bindActionCreators(productActions, dispatch),
		nutrientActions: bindActionCreators(nutrientActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);