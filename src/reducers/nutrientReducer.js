export default function nutrientReducer(nutrients = {}, action) {
	switch (action.type) {
		case 'ADD_NUTRIENTS':
			return nutrients.map((nutrient, i) => {
				return Object.assign({}, nutrient, {total: nutrient.total + action.amount * action.payload[i].value})
			});
		case 'REMOVE_NUTRIENTS':
			return {
				...nutrients,
				kcal: 							nutrients.kcal 					- (action.product.amount / 100) * action.product.fetched.kcal.value,
				protein: 						nutrients.protein 			- (action.product.amount / 100) * action.product.fetched.protein.value,
				calcium: 						nutrients.calcium 			- (action.product.amount / 100) * action.product.fetched.calcium.value,
				iron: 							nutrients.iron 					- (action.product.amount / 100) * action.product.fetched.iron.value,
				magnesium: 					nutrients.magnesium 		- (action.product.amount / 100) * action.product.fetched.magnesium.value,
				phosphorus: 				nutrients.phosphorus 		- (action.product.amount / 100) * action.product.fetched.phosphorus.value,
				potassium:					nutrients.potassium 		- (action.product.amount / 100) * action.product.fetched.potassium.value,
				sodium: 						nutrients.sodium 				- (action.product.amount / 100) * action.product.fetched.sodium.value,
				zinc: 							nutrients.zinc 					- (action.product.amount / 100) * action.product.fetched.zinc.value,
				copper: 						nutrients.copper 				- (action.product.amount / 100) * action.product.fetched.copper.value,
				manganese: 					nutrients.manganese 		- (action.product.amount / 100) * action.product.fetched.manganese.value,
				selenium: 					nutrients.selenium 			- (action.product.amount / 100) * action.product.fetched.selenium.value,
				fluoride: 					nutrients.fluoride 			- (action.product.amount / 100) * action.product.fetched.fluoride.value,
				vit_c: 							nutrients.vit_c 				- (action.product.amount / 100) * action.product.fetched.vit_c.value,
				thiamin: 						nutrients.thiamin 			- (action.product.amount / 100) * action.product.fetched.thiamin.value,
				riboflavin: 				nutrients.riboflavin 		- (action.product.amount / 100) * action.product.fetched.riboflavin.value,
				niacin: 						nutrients.niacin 				- (action.product.amount / 100) * action.product.fetched.niacin.value,
				panthotenic_acid: 	nutrients.panthotenic_a - (action.product.amount / 100) * action.product.fetched.panthotenic_acid.value,
				vit_b6: 						nutrients.vit_b6 				- (action.product.amount / 100) * action.product.fetched.vit_b6.value,
				folate: 						nutrients.folate 				- (action.product.amount / 100) * action.product.fetched.folate.value,
				vit_b12: 						nutrients.vit_b12 			- (action.product.amount / 100) * action.product.fetched.vit_b12.value,
				vit_a: 							nutrients.vit_a 				- (action.product.amount / 100) * action.product.fetched.vit_a.value,
				vit_e: 							nutrients.vit_e 				- (action.product.amount / 100) * action.product.fetched.vit_e.value,
				vit_d: 							nutrients.vit_d 				- (action.product.amount / 100) * action.product.fetched.vit_d.value,
				vit_k: 							nutrients.vit_k 				- (action.product.amount / 100) * action.product.fetched.vit_k.value
			};
		case 'RECALCULATE_NUTRIENTS':
			action.payload.map((product) => {
				if (product.fetched) {
					return {
						...nutrients,
						kcal: 							nutrients.kcal 					+ (product.amount / 100) * product.fetched.kcal.value,
						protein: 						nutrients.protein 			+ (product.amount / 100) * product.fetched.protein.value,
						calcium: 						nutrients.calcium 			+ (product.amount / 100) * product.fetched.calcium.value,
						iron: 							nutrients.iron 					+ (product.amount / 100) * product.fetched.iron.value,
						magnesium: 					nutrients.magnesium 		+ (product.amount / 100) * product.fetched.magnesium.value,
						phosphorus: 				nutrients.phosphorus 		+ (product.amount / 100) * product.fetched.phosphorus.value,
						potassium:					nutrients.potassium 		+ (product.amount / 100) * product.fetched.potassium.value,
						sodium: 						nutrients.sodium 				+ (product.amount / 100) * product.fetched.sodium.value,
						zinc: 							nutrients.zinc 					+ (product.amount / 100) * product.fetched.zinc.value,
						copper: 						nutrients.copper 				+ (product.amount / 100) * product.fetched.copper.value,
						manganese: 					nutrients.manganese 		+ (product.amount / 100) * product.fetched.manganese.value,
						selenium: 					nutrients.selenium 			+ (product.amount / 100) * product.fetched.selenium.value,
						fluoride: 					nutrients.fluoride 			+ (product.amount / 100) * product.fetched.fluoride.value,
						vit_c: 							nutrients.vit_c 				+ (product.amount / 100) * product.fetched.vit_c.value,
						thiamin: 						nutrients.thiamin 			+ (product.amount / 100) * product.fetched.thiamin.value,
						riboflavin: 				nutrients.riboflavin 		+ (product.amount / 100) * product.fetched.riboflavin.value,
						niacin: 						nutrients.niacin 				+ (product.amount / 100) * product.fetched.niacin.value,
						panthotenic_acid: 	nutrients.panthotenic_a + (product.amount / 100) * product.fetched.panthotenic_acid.value,
						vit_b6: 						nutrients.vit_b6 				+ (product.amount / 100) * product.fetched.vit_b6.value,
						folate: 						nutrients.folate 				+ (product.amount / 100) * product.fetched.folate.value,
						vit_b12: 						nutrients.vit_b12 			+ (product.amount / 100) * product.fetched.vit_b12.value,
						vit_a: 							nutrients.vit_a 				+ (product.amount / 100) * product.fetched.vit_a.value,
						vit_e: 							nutrients.vit_e 				+ (product.amount / 100) * product.fetched.vit_e.value,
						vit_d: 							nutrients.vit_d 				+ (product.amount / 100) * product.fetched.vit_d.value,
						vit_k: 							nutrients.vit_k 				+ (product.amount / 100) * product.fetched.vit_k.value
					};
				} else {
					return {
						...nutrients,
						kcal: 							nutrients.kcal 					+ 0,
						protein: 						nutrients.protein 			+ 0,
						calcium: 						nutrients.calcium 			+ 0,
						iron: 							nutrients.iron 					+ 0,
						magnesium: 					nutrients.magnesium 		+ 0,
						phosphorus: 				nutrients.phosphorus 		+ 0,
						potassium:					nutrients.potassium 		+ 0,
						sodium: 						nutrients.sodium 				+ 0,
						zinc: 							nutrients.zinc 					+ 0,
						copper: 						nutrients.copper 				+ 0,
						manganese: 					nutrients.manganese 		+ 0,
						selenium: 					nutrients.selenium 			+ 0,
						fluoride: 					nutrients.fluoride 			+ 0,
						vit_c: 							nutrients.vit_c 				+ 0,
						thiamin: 						nutrients.thiamin 			+ 0,
						riboflavin: 				nutrients.riboflavin 		+ 0,
						niacin: 						nutrients.niacin 				+ 0,
						panthotenic_acid: 	nutrients.panthotenic_a + 0,
						vit_b6: 						nutrients.vit_b6 				+ 0,
						folate: 						nutrients.folate 				+ 0,
						vit_b12: 						nutrients.vit_b12 			+ 0,
						vit_a: 							nutrients.vit_a 				+ 0,
						vit_e: 							nutrients.vit_e 				+ 0,
						vit_d: 							nutrients.vit_d 				+ 0,
						vit_k: 							nutrients.vit_k 				+ 0
					};
				}
			});
			break;
		default:
			return nutrients;
	}
}