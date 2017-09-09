import React, { Component } from 'react';

export default class ProductInList extends Component {
	render() {
		return (
			<div>
				{`${this.props.product.fetched.name} ${this.props.product.fetched.amount * 100}g`}
			</div>
		);
	}
}