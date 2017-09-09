import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import productActions from './actions/productActions';
import nutritionActions from './actions/nutritionActions';
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
				<ProductList products={this.props.products} productActions={this.props.productActions} nutritionActions={this.props.nutritionActions} />
				<NutritionList nutrition={this.props.nutrition} rdi={this.props.rdi} products={this.props.products} productActions={this.props.productActions} nutritionActions={this.props.nutritionActions} />
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
		nutritionActions: bindActionCreators(nutritionActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);