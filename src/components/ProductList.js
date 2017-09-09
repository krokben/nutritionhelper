import React, { Component } from 'react';
import Product from './Product';

export default class ProductList extends Component {
	render() {
		const style = {
			backgroundColor: '#fff',
			width: '300px',
			boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
			padding: '15px',
			float: 'left',
			fontSize: '12px'
		}
		return (
			<div style={style}>
				<h2 style={{textAlign: 'center'}}>Choose your food</h2>
				{this.props.products.filter(product => !product.fetched || (!product.chosen && product.type === 'custom')).map(product => <Product key={product.id} product={product} productActions={this.props.productActions} nutritionActions={this.props.nutritionActions} />)}
			</div>
		);
	}
}