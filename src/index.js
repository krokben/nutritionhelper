import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { Provider } from 'react-redux';

const initialState = {
	products: [
		{id: '09298', name: 'Raisins', amount: 32, fetched: false},
		{id: '20035', name: 'Quinoa', amount: 130, fetched: false},
		{id: '16120', name: 'Soymilk', amount: 500, fetched: false},
		{id: '12585', name: 'Cashews', amount: 32, fetched: false},
		{id: '18064', name: 'Bread', amount: 240, fetched: false},
		{id: '09040', name: 'Banana', amount: 100, fetched: false},
		{id: '11124', name: 'Carrot', amount: 100, fetched: false},
		{id: '12061', name: 'Almonds', amount: 32, fetched: false},
		{id: '04053', name: 'Olive oil', amount: 25, fetched: false},
		{id: '04047', name: 'Coconut oil', amount: 25, fetched: false},
		{id: '11821', name: 'Red bell pepper', amount: 50, fetched: false},
		{id: '11167', name: 'Corn', amount: 142, fetched: false},
		{id: '11457', name: 'Spinach', amount: 32, fetched: false},
		{id: '11233', name: 'Kale', amount: 32, fetched: false},
		{id: '11052', name: 'Green beans', amount: 32, fetched: false},
		{id: '11090', name: 'Broccoli', amount: 32, fetched: false},
		{id: '11529', name: 'Tomatoes', amount: 32, fetched: false},
		{id: '09042', name: 'Blackberries', amount: 32, fetched: false},
		{id: '09316', name: 'Strawberries', amount: 32, fetched: false},
		{id: '09302', name: 'Raspberries', amount: 32, fetched: false},
		{id: '09050', name: 'Blueberries', amount: 32, fetched: false},
		{id: '16126', name: 'Tofu', amount: 32, fetched: false},
		{id: '16114', name: 'Tempeh', amount: 32, fetched: false},
		{id: '12142', name: 'Pecans', amount: 32, fetched: false},
		{id: '12131', name: 'Macadamia nuts', amount: 32, fetched: false},
		{id: '12155', name: 'Walnuts', amount: 32, fetched: false},
		{id: '12104', name: 'Coconut', amount: 32, fetched: false},
		{id: '12120', name: 'Hazelnuts', amount: 32, fetched: false},
		{id: '12147', name: 'Pine nuts', amount: 32, fetched: false},
		{id: '12006', name: 'Chia seeds', amount: 32, fetched: false},
		{id: '12220', name: 'Flaxseeds', amount: 32, fetched: false},
		{id: '04581', name: 'Avocado oil', amount: 32, fetched: false},
		{id: '42231', name: 'Flaxseed oil', amount: 32, fetched: false},
		{id: '09195', name: 'Olives', amount: 32, fetched: false},
		{id: '09037', name: 'Avocados', amount: 32, fetched: false},
		{id: '04501', name: 'Cocoa butter', amount: 32, fetched: false},
		{id: '20420', name: 'Pasta', amount: 100, fetched: false},
		{id: 'custom1', name: 'Potatissallad', amount: 200, fetched: {
			name: 'Potatissallad',
			amount: 1,
			nutrients: [
				{type: 'kcal', value: 220},
				{type: 'protein', value: 1.5},
				{type: 'calcium', name: 'Calcium, Ca', unit: 'mg', value: 6},
				{type: 'iron', name: 0, unit: 0, value: 0.2},
				{type: 'magnesium', name: 0, unit: 0, value: 16},
				{type: 'phosphorus', name: 0, unit: 0, value: 31},
				{type: 'potassium', name: 0, unit: 0, value: 256},
				{type: 'sodium', name: 0, unit: 0, value: 4},
				{type: 'zinc', name: 0, unit: 0, value: 0.2},
				{type: 'copper', name: 0, unit: 0, value: 0},
				{type: 'manganese', name: 0, unit: 0, value: 0},
				{type: 'selenium', name: 0, unit: 0, value: 0},
				{type: 'fluoride', name: 0, unit: 0, value: 0},
				{type: 'vit_c', name: 0, unit: 0, value: 5.8},
				{type: 'thiamin', name: 0, unit: 0, value: 0},
				{type: 'riboflavin', name: 0, unit: 0, value: 0},
				{type: 'niacin', name: 0, unit: 0, value: 1},
				{type: 'panthotenic_acid', name: 0, unit: 0, value: 0},
				{type: 'vit_b6', name: 0, unit: 0, value: 0},
				{type: 'folate', name: 0, unit: 0, value: 0},
				{type: 'vit_b12', name: 0, unit: 0, value: 0},
				{type: 'vit_a', name: 0, unit: 0, value: 0},
				{type: 'vit_e', name: 0, unit: 0, value: 0},
				{type: 'vit_d', name: 0, unit: 0, value: 0},
				{type: 'vit_k', name: 0, unit: 0, value: 1.7}
			]
		}, type: 'custom', chosen: false}
	],
	nutrients: [
		{id: 208, type: 'kcal', rdi: 2700, total: 0},
		{id: 208, type: 'protein', rdi: 70, total: 0},
		{id: 208, type: 'calcium', rdi: 800, total: 0},
		{id: 208, type: 'iron', rdi: 9, total: 0},
		{id: 208, type: 'magnesium', rdi: 375, total: 0},
		{id: 208, type: 'phosphorus', rdi: 700, total: 0},
		{id: 208, type: 'potassium', rdi: 2000, total: 0},
		{id: 208, type: 'sodium', rdi: 2400, total: 0},
		{id: 208, type: 'zinc', rdi: 9, total: 0},
		{id: 208, type: 'copper', rdi: 1, total: 0},
		{id: 208, type: 'manganese', rdi: 2, total: 0},
		{id: 208, type: 'selenium', rdi: 55, total: 0},
		{id: 208, type: 'fluoride', rdi: 3500, total: 0},
		{id: 208, type: 'vit_c', rdi: 80, total: 0},
		{id: 208, type: 'thiamin', rdi: 1.1, total: 0},
		{id: 208, type: 'riboflavin', rdi: 1.4, total: 0},
		{id: 208, type: 'niacin', rdi: 16, total: 0},
		{id: 208, type: 'panthotenic_acid', rdi: 6, total: 0},
		{id: 208, type: 'vit_b6', rdi: 1.4, total: 0},
		{id: 208, type: 'folate', rdi: 200, total: 0},
		{id: 208, type: 'vit_b12', rdi: 2.5, total: 0},
		{id: 208, type: 'vit_a', rdi: 800, total: 0},
		{id: 208, type: 'vit_e', rdi: 12, total: 0},
		{id: 208, type: 'vit_d', rdi: 5, total: 0},
		{id: 208, type: 'vit_k', rdi: 75, total: 0}
	],
	rdi: {
		kcal: 2700,
		protein: 70,
		calcium: 800,
		iron: 9,
		magnesium: 375,
		phosphorus: 700,
		potassium: 2000,
		sodium: 2400,
		zinc: 9,
		copper: 1,
		manganese: 2,
		selenium: 55,
		fluoride: 3500,
		vit_c: 80,
		thiamin: 1.1,
		riboflavin: 1.4,
		niacin: 16,
		panthotenic_acid: 6,
		vit_b6: 1.4,
		folate: 200,
		vit_b12: 2.5,
		vit_a: 800,
		vit_e: 12,
		vit_d: 5,
		vit_k: 75
	}
};

const store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();