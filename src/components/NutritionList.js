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

	calculateCost = (cost, amount) => {
		return (cost * (amount / 100)).toFixed(2);
	};

	calculateCostPerKcal = (cost, kcal) => {
		return (cost / kcal).toFixed(4);
	};

	calculateTotalCost = () => {
		let total = 0;
		this.props.products
			.filter(product => product.chosen)
			.forEach(product => total += product.cost * (product.amount / 100));
		return total.toFixed(2);
	};

	removeProduct = (product) => {
		this.props.productActions.removeProduct(product.id);
		this.props.nutrientActions.removeNutrients(product);
		this.props.nutrientActions.recalculateNutrients(this.props.products);
		this.props.localActions.removeLocal(product.id);
		this.props.localActions.setLocalStorage();
	};

	render() {
		const styles = {
			base: {
				backgroundColor: '#2C3E50',
				width: '400px',
				boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
				textAlign: 'center',
				padding: '15px',
				float: 'right'
			},
			productContainer: {
				display: 'flex',
				textAlign: 'left',
				fontSize: '12px'
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
								g&nbsp;
								<button onClick={() => this.removeProduct(product)}>Remove</button>
								<div>{this.calculateCost(product.cost, product.amount)} kr&nbsp;</div>
								<div style={{color: 'red'}}>{this.calculateCostPerKcal(product.cost, product.fetched.nutrients[0].value)} kr/kcal</div>
							</div>
						);
					})
				}
				<h3>Total cost: {this.calculateTotalCost()} kr</h3>
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