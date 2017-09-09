import React, { Component } from 'react';
import Radium from 'radium';
import ProductInList from './ProductInList';

class NutritionList extends Radium(Component) {
	calculateNutrition(key, amount) {
		if (key === 'kcal') {
			return amount.toFixed(0);
		} else {
			return ((amount / this.props.rdi[key]) * 100).toFixed(1);
		}
	}

	removeProduct = (product) => {
		this.props.productActions.removeProduct(product.id);
		this.props.nutritionActions.removeNutrients(product);
		this.props.nutritionActions.recalculateNutrients(this.props.products);
	};

	render() {
		return (
			<div style={styles.base}>
				<h2>Daily Requirements</h2>
				{
					this.props.products.filter(product => product.fetched).map(product => {
						return (
							<div key={`chosenProduct-${product.id}`}>
								<ProductInList
									product={product}
								/>
								<button onClick={() => this.removeProduct(product)}>Remove</button>
							</div>
						);
					})
				}
				<table style={{width: '100%'}}>
					<thead>
						<tr>
							<th>Product</th>
							<th>Percent</th>
						</tr>
					</thead>
					<tbody>
						{
							Object.keys(this.props.nutrition).map((key, i) => {
								return (
									<tr key={`nutrition-${i}`}>
										<td style={{textAlign: 'left'}}>{key}</td>
										<td>{this.calculateNutrition(key, this.props.nutrition[key])}</td>
									</tr>
								);
							})
						}
					</tbody>
				</table>
			</div>
		);
	}
}

const styles = {
	base: {
		backgroundColor: '#fff',
		width: '400px',
		boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
		textAlign: 'center',
		padding: '15px',
		float: 'right'
	}
};

export default Radium(NutritionList);