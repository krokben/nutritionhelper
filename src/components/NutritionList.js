import React, { Component } from 'react';
import Radium from 'radium';
import ProductInList from './ProductInList';

class NutritionList extends Radium(Component) {
	calculateNutrition(type, amount) {
		if (type === 'kcal') {
			return amount.toFixed(0);
		} else {
			return ((amount / this.props.rdi[type]) * 100).toFixed(1);
		}
	}

	removeProduct = (product) => {
		this.props.productActions.removeProduct(product.id);
		this.props.nutrientActions.removeNutrients(product);
		this.props.nutrientActions.recalculateNutrients(this.props.products);
	};

	render() {
		const styles = {
			base: {
				backgroundColor: '#fff',
				width: '400px',
				boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
				textAlign: 'center',
				padding: '15px',
				float: 'right'
			},
			productContainer: {
				display: 'flex',
				textAlign: 'left'
			}
		};

		return (
			<div style={styles.base}>
				<h2>Daily Requirements</h2>
				{
					this.props.products.filter(product => (product.type !== 'custom' && product.fetched) || (product.type === 'custom' && product.chosen)).map(product => {
						return (
							<div key={`chosenProduct-${product.id}`} style={styles.productContainer}>
								<ProductInList
									product={product}
								/>
								&nbsp;
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
							// Object.keys(this.props.nutrients).map((key, i) => {
							// 	return (
							// 		<tr key={`nutrient-${i}`}>
							// 			<td style={{textAlign: 'left'}}>{key}</td>
							// 			<td>{this.calculateNutrition(key, this.props.nutrients[key])}</td>
							// 		</tr>
							// 	);
							// })
							this.props.nutrients.map((nutrient, i) => {
								return (
									<tr key={`nutrient-${i}`}>
										<td style={{textAlign: 'left'}}>{nutrient.type}</td>
										<td>{this.calculateNutrition(nutrient.type, nutrient.total)}</td>
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

export default Radium(NutritionList);