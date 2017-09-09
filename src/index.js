import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { Provider } from 'react-redux';

const initialState = {
	products: [
		{
			id: '09298',
			name: 'Raisins',
			amount: 32,
			fetched: false
		},
		{
			id: '20035',
			name: 'Quinoa',
			amount: 130,
			fetched: false
		},
		{
			id: '16120',
			name: 'Soymilk',
			amount: 500,
			fetched: false
		},
		{
			id: '12585',
			name: 'Cashews',
			amount: 32,
			fetched: false
		},
		{
			id: '18064',
			name: 'Bread',
			amount: 240,
			fetched: false
		},
		{
			id: '11376',
			name: 'Canned potatoes',
			amount: 50,
			fetched: false
		},
		{
			id: '09040',
			name: 'Banana',
			amount: 100,
			fetched: false
		},
		{
			id: '12108',
			name: 'Shredded coconut',
			amount: 32,
			fetched: false
		},
		{
			id: '11124',
			name: 'Carrot',
			amount: 100,
			fetched: false
		},
		{
			id: '11167',
			name: 'Corn',
			amount: 142,
			fetched: false
		},
		{id: '11457', name: 'Spinach', amount: 32, fetched: false},
		{id: '11233', name: 'Kale', amount: 32, fetched: false},
		{id: '11052', name: 'Green beans', amount: 32, fetched: false},
		{id: '11090', name: 'Broccoli', amount: 32, fetched: false},
		{id: '11821', name: 'Red bell pepper', amount: 32, fetched: false},
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
		{id: '12061', name: 'Almonds', amount: 32, fetched: false},
		{id: '12006', name: 'Chia seeds', amount: 32, fetched: false},
		{id: '12220', name: 'Flaxseeds', amount: 32, fetched: false},
		{id: '04053', name: 'Olive oil', amount: 32, fetched: false},
		{id: '04047', name: 'Coconut oil', amount: 32, fetched: false},
		{id: '04581', name: 'Avocado oil', amount: 32, fetched: false},
		{id: '42231', name: 'Flaxseed oil', amount: 32, fetched: false},
		{id: '09195', name: 'Olives', amount: 32, fetched: false},
		{id: '09037', name: 'Avocados', amount: 32, fetched: false},
		{id: '04501', name: 'Cocoa butter', amount: 32, fetched: false},
		{id: 'custom1', name: 'Bjäst', amount: 16, fetched: {
			kcal: 0,
			protein: 0,
			calcium: 					{name: 0, unit: 0, value: 0},
			iron: 						{name: 0, unit: 0, value: 0},
			magnesium: 				{name: 0, unit: 0, value: 0},
			phosphorus: 			{name: 0, unit: 0, value: 0},
			potassium: 				{name: 0, unit: 0, value: 0},
			sodium: 					{name: 0, unit: 0, value: 0},
			zinc: 						{name: 0, unit: 0, value: 0},
			copper: 					{name: 0, unit: 0, value: 0},
			manganese: 				{name: 0, unit: 0, value: 0},
			selenium: 				{name: 0, unit: 0, value: 0},
			fluoride: 				{name: 0, unit: 0, value: 0},
			vit_c: 						{name: 0, unit: 0, value: 0},
			thiamin: 					{name: 0, unit: 0, value: 0},
			riboflavin: 			{name: 0, unit: 0, value: 0},
			niacin: 					{name: 0, unit: 0, value: 0},
			panthotenic_acid: {name: 0, unit: 0, value: 0},
			vit_b6: 					{name: 0, unit: 0, value: 0},
			folate: 					{name: 0, unit: 0, value: 0},
			vit_b12: 					{name: 0, unit: 0, value: 0},
			vit_a: 						{name: 0, unit: 0, value: 0},
			vit_e: 						{name: 0, unit: 0, value: 0},
			vit_d: 						{name: 0, unit: 0, value: 0},
			vit_k: 						{name: 0, unit: 0, value: 0}
		}}
	],
	nutrition: {
		kcal: 0,
		protein: 0,
		calcium: 0,
		iron: 0,
		magnesium: 0,
		phosphorus: 0,
		potassium: 0,
		sodium: 0,
		zinc: 0,
		copper: 0,
		manganese: 0,
		selenium: 0,
		fluoride: 0,
		vit_c: 0,
		thiamin: 0,
		riboflavin: 0,
		niacin: 0,
		panthotenic_acid: 0,
		vit_b6: 0,
		folate: 0,
		vit_b12: 0,
		vit_a: 0,
		vit_e: 0,
		vit_d: 0,
		vit_k: 0
	},
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