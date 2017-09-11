import React, { Component } from 'react';
import Radium from 'radium';

class Product extends Component {
	handleChange = () => {
		this.props.productActions.changeAmount({id: this.props.product.id, amount: this.amountInput.value});
	};

	selectProduct = () => {
		fetch('https://api.nal.usda.gov/ndb/reports/?ndbno=' + this.props.product.id + '&type=f&format=json&api_key=r63dR3ibcWIkwwrfJ95wz4sgvtJryiAYOiQxi6nm')
		.then((response) => response.json())
		.then((blob) => {
			console.log(blob)
			const result = {
				name: blob.report.food.name,
				amount: this.props.product.amount / 100,
				nutrients: [
					{type: 'kcal', value: blob.report.food.nutrients.find(x => x.nutrient_id === 208).value},
					{type: 'protein', value: blob.report.food.nutrients.find(x => x.nutrient_id === 203).value},
					{
						type: 'calcium',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 301) ? blob.report.food.nutrients.find(x => x.nutrient_id === 301).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 301) ? blob.report.food.nutrients.find(x => x.nutrient_id === 301).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 301) ? blob.report.food.nutrients.find(x => x.nutrient_id === 301).value : 0
					},
					{
						type: 'iron',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 303) ? blob.report.food.nutrients.find(x => x.nutrient_id === 303).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 303) ? blob.report.food.nutrients.find(x => x.nutrient_id === 303).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 303) ? blob.report.food.nutrients.find(x => x.nutrient_id === 303).value : 0
					},
					{
						type: 'magnesium',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 304) ? blob.report.food.nutrients.find(x => x.nutrient_id === 304).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 304) ? blob.report.food.nutrients.find(x => x.nutrient_id === 304).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 304) ? blob.report.food.nutrients.find(x => x.nutrient_id === 304).value : 0
					},
					{
						type: 'phosphorus',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 305) ? blob.report.food.nutrients.find(x => x.nutrient_id === 305).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 305) ? blob.report.food.nutrients.find(x => x.nutrient_id === 305).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 306) ? blob.report.food.nutrients.find(x => x.nutrient_id === 306).value : 0
					},
					{
						type: 'potassium',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 306) ? blob.report.food.nutrients.find(x => x.nutrient_id === 306).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 306) ? blob.report.food.nutrients.find(x => x.nutrient_id === 306).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 306) ? blob.report.food.nutrients.find(x => x.nutrient_id === 306).value : 0
					},
					{
						type: 'sodium',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 307) ? blob.report.food.nutrients.find(x => x.nutrient_id === 307).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 307) ? blob.report.food.nutrients.find(x => x.nutrient_id === 307).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 307) ? blob.report.food.nutrients.find(x => x.nutrient_id === 307).value : 0
					},
					{
						type: 'zinc',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 309) ? blob.report.food.nutrients.find(x => x.nutrient_id === 309).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 309) ? blob.report.food.nutrients.find(x => x.nutrient_id === 309).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 309) ? blob.report.food.nutrients.find(x => x.nutrient_id === 309).value : 0
					},
					{
						type: 'copper',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 312) ? blob.report.food.nutrients.find(x => x.nutrient_id === 312).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 312) ? blob.report.food.nutrients.find(x => x.nutrient_id === 312).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 312) ? blob.report.food.nutrients.find(x => x.nutrient_id === 312).value : 0
					},
					{
						type: 'manganese',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 315) ? blob.report.food.nutrients.find(x => x.nutrient_id === 315).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 315) ? blob.report.food.nutrients.find(x => x.nutrient_id === 315).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 315) ? blob.report.food.nutrients.find(x => x.nutrient_id === 315).value : 0
					},
					{
						type: 'selenium',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 317) ? blob.report.food.nutrients.find(x => x.nutrient_id === 317).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 317) ? blob.report.food.nutrients.find(x => x.nutrient_id === 317).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 317) ? blob.report.food.nutrients.find(x => x.nutrient_id === 317).value : 0
					},
					{
						type: 'fluoride',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 313) ? blob.report.food.nutrients.find(x => x.nutrient_id === 313).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 313) ? blob.report.food.nutrients.find(x => x.nutrient_id === 313).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 313) ? blob.report.food.nutrients.find(x => x.nutrient_id === 313).value : 0
					},
					{
						type: 'vit_c',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 401) ? blob.report.food.nutrients.find(x => x.nutrient_id === 401).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 401) ? blob.report.food.nutrients.find(x => x.nutrient_id === 401).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 401) ? blob.report.food.nutrients.find(x => x.nutrient_id === 401).value : 0
					},
					{
						type: 'thiamin',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 404) ? blob.report.food.nutrients.find(x => x.nutrient_id === 404).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 404) ? blob.report.food.nutrients.find(x => x.nutrient_id === 404).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 404) ? blob.report.food.nutrients.find(x => x.nutrient_id === 404).value : 0
					},
					{
						type: 'riboflavin',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 405) ? blob.report.food.nutrients.find(x => x.nutrient_id === 405).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 405) ? blob.report.food.nutrients.find(x => x.nutrient_id === 405).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 405) ? blob.report.food.nutrients.find(x => x.nutrient_id === 405).value : 0
					},
					{
						type: 'niacin',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 406) ? blob.report.food.nutrients.find(x => x.nutrient_id === 406).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 406) ? blob.report.food.nutrients.find(x => x.nutrient_id === 406).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 406) ? blob.report.food.nutrients.find(x => x.nutrient_id === 406).value : 0
					},
					{
						type: 'panthotenic_acid',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 410) ? blob.report.food.nutrients.find(x => x.nutrient_id === 410).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 410) ? blob.report.food.nutrients.find(x => x.nutrient_id === 410).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 410) ? blob.report.food.nutrients.find(x => x.nutrient_id === 410).value : 0
					},
					{
						type: 'vit_b6',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 415) ? blob.report.food.nutrients.find(x => x.nutrient_id === 415).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 415) ? blob.report.food.nutrients.find(x => x.nutrient_id === 415).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 415) ? blob.report.food.nutrients.find(x => x.nutrient_id === 415).value : 0
					},
					{
						type: 'folate',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 417) ? blob.report.food.nutrients.find(x => x.nutrient_id === 417).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 417) ? blob.report.food.nutrients.find(x => x.nutrient_id === 417).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 417) ? blob.report.food.nutrients.find(x => x.nutrient_id === 417).value : 0
					},
					{
						type: 'vit_b12',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 418) ? blob.report.food.nutrients.find(x => x.nutrient_id === 418).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 418) ? blob.report.food.nutrients.find(x => x.nutrient_id === 418).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 418) ? blob.report.food.nutrients.find(x => x.nutrient_id === 418).value : 0
					},
					{
						type: 'vit_a',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 320) ? blob.report.food.nutrients.find(x => x.nutrient_id === 320).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 320) ? blob.report.food.nutrients.find(x => x.nutrient_id === 320).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 320) ? blob.report.food.nutrients.find(x => x.nutrient_id === 320).value : 0
					},
					{
						type: 'vit_e',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 323) ? blob.report.food.nutrients.find(x => x.nutrient_id === 323).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 323) ? blob.report.food.nutrients.find(x => x.nutrient_id === 323).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 323) ? blob.report.food.nutrients.find(x => x.nutrient_id === 323).value : 0
					},
					{
						type: 'vit_d',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 328) ? blob.report.food.nutrients.find(x => x.nutrient_id === 328).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 328) ? blob.report.food.nutrients.find(x => x.nutrient_id === 328).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 328) ? blob.report.food.nutrients.find(x => x.nutrient_id === 328).value : 0
					},
					{
						type: 'vit_k',
						name:  blob.report.food.nutrients.find(x => x.nutrient_id === 430) ? blob.report.food.nutrients.find(x => x.nutrient_id === 430).name : 'unavailable',
						unit:  blob.report.food.nutrients.find(x => x.nutrient_id === 430) ? blob.report.food.nutrients.find(x => x.nutrient_id === 430).unit : 'unavailable',
						value: blob.report.food.nutrients.find(x => x.nutrient_id === 430) ? blob.report.food.nutrients.find(x => x.nutrient_id === 430).value : 0
					}
				]
			};
			return result;
		})
		.then((result) => {
			this.props.productActions.chooseProduct({id: this.props.product.id, fetched: result});
			this.props.nutrientActions.addNutrients(result.nutrients, this.props.product.amount / 100);
		});
	};

	selectCustomProduct = () => {
		this.props.productActions.chooseProduct({id: this.props.product.id, fetched: this.props.product.fetched});
		this.props.nutrientActions.addNutrients(this.props.product.fetched.nutrients, this.props.product.amount / 100);
	};

	render() {
		const color = {
			custom: 'red'
		};

		const styles = {
			base: {
				color: color[this.props.product.type],
				':hover': {
					backgroundColor: '#999'
				}
			},
			input: {
				width: '40px'
			},
			addButton: {
				float: 'right',
				cursor: 'pointer'
			}
		};

		return (
			<div style={styles.base}>
				<label>{this.props.product.name}</label>
				<input style={styles.input} type="number" defaultValue={this.props.product.amount} onChange={this.handleChange} ref={input => this.amountInput = input} />g
				<button style={styles.addButton} onClick={this.props.product.type === 'custom' ? this.selectCustomProduct : this.selectProduct}>Add me!</button>
			</div>
		);
	}
}

export default Radium(Product);