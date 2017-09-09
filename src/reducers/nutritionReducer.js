export default function nutritionReducer(nutrition = {}, action) {
	switch (action.type) {
		case 'ADD_NUTRIENTS':
			return {
				...nutrition,
				kcal: nutrition.kcal + 													action.amount * action.payload.kcal,
				protein: nutrition.protein + 										action.amount * action.payload.protein,
				calcium: nutrition.calcium + 										action.amount * action.payload.calcium.value,
				iron: nutrition.iron + 													action.amount * action.payload.iron.value,
				magnesium: nutrition.magnesium + 								action.amount * action.payload.magnesium.value,
				phosphorus: nutrition.phosphorus + 							action.amount * action.payload.phosphorus.value,
				potassium: nutrition.potassium + 								action.amount * action.payload.potassium.value,
				sodium: nutrition.sodium + 											action.amount * action.payload.sodium.value,
				zinc: nutrition.zinc + 													action.amount * action.payload.zinc.value,
				copper: nutrition.copper + 											action.amount * action.payload.copper.value,
				manganese: nutrition.manganese + 								action.amount * action.payload.manganese.value,
				selenium: nutrition.selenium + 									action.amount * action.payload.selenium.value,
				fluoride: nutrition.fluoride + 									action.amount * action.payload.fluoride.value,
				vit_c: nutrition.vit_c + 												action.amount * action.payload.vit_c.value,
				thiamin: nutrition.thiamin + 										action.amount * action.payload.thiamin.value,
				riboflavin: nutrition.riboflavin + 							action.amount * action.payload.riboflavin.value,
				niacin: nutrition.niacin + 											action.amount * action.payload.niacin.value,
				panthotenic_acid: nutrition.panthotenic_acid + 	action.amount * action.payload.panthotenic_acid.value,
				vit_b6: nutrition.vit_b6 + 											action.amount * action.payload.vit_b6.value,
				folate: nutrition.folate + 											action.amount * action.payload.folate.value,
				vit_b12: nutrition.vit_b12 + 										action.amount * action.payload.vit_b12.value,
				vit_a: nutrition.vit_a + 												action.amount * action.payload.vit_a.value,
				vit_e: nutrition.vit_e + 												action.amount * action.payload.vit_e.value,
				vit_d: nutrition.vit_d + 												action.amount * action.payload.vit_d.value,
				vit_k: nutrition.vit_k + 												action.amount * action.payload.vit_k.value
			};
		case 'REMOVE_NUTRIENTS':
			return {
				...nutrition,
				kcal: 							nutrition.kcal 					- (action.product.amount / 100) * action.product.fetched.kcal.value,
				protein: 						nutrition.protein 			- (action.product.amount / 100) * action.product.fetched.protein.value,
				calcium: 						nutrition.calcium 			- (action.product.amount / 100) * action.product.fetched.calcium.value,
				iron: 							nutrition.iron 					- (action.product.amount / 100) * action.product.fetched.iron.value,
				magnesium: 					nutrition.magnesium 		- (action.product.amount / 100) * action.product.fetched.magnesium.value,
				phosphorus: 				nutrition.phosphorus 		- (action.product.amount / 100) * action.product.fetched.phosphorus.value,
				potassium:					nutrition.potassium 		- (action.product.amount / 100) * action.product.fetched.potassium.value,
				sodium: 						nutrition.sodium 				- (action.product.amount / 100) * action.product.fetched.sodium.value,
				zinc: 							nutrition.zinc 					- (action.product.amount / 100) * action.product.fetched.zinc.value,
				copper: 						nutrition.copper 				- (action.product.amount / 100) * action.product.fetched.copper.value,
				manganese: 					nutrition.manganese 		- (action.product.amount / 100) * action.product.fetched.manganese.value,
				selenium: 					nutrition.selenium 			- (action.product.amount / 100) * action.product.fetched.selenium.value,
				fluoride: 					nutrition.fluoride 			- (action.product.amount / 100) * action.product.fetched.fluoride.value,
				vit_c: 							nutrition.vit_c 				- (action.product.amount / 100) * action.product.fetched.vit_c.value,
				thiamin: 						nutrition.thiamin 			- (action.product.amount / 100) * action.product.fetched.thiamin.value,
				riboflavin: 				nutrition.riboflavin 		- (action.product.amount / 100) * action.product.fetched.riboflavin.value,
				niacin: 						nutrition.niacin 				- (action.product.amount / 100) * action.product.fetched.niacin.value,
				panthotenic_acid: 	nutrition.panthotenic_a - (action.product.amount / 100) * action.product.fetched.panthotenic_acid.value,
				vit_b6: 						nutrition.vit_b6 				- (action.product.amount / 100) * action.product.fetched.vit_b6.value,
				folate: 						nutrition.folate 				- (action.product.amount / 100) * action.product.fetched.folate.value,
				vit_b12: 						nutrition.vit_b12 			- (action.product.amount / 100) * action.product.fetched.vit_b12.value,
				vit_a: 							nutrition.vit_a 				- (action.product.amount / 100) * action.product.fetched.vit_a.value,
				vit_e: 							nutrition.vit_e 				- (action.product.amount / 100) * action.product.fetched.vit_e.value,
				vit_d: 							nutrition.vit_d 				- (action.product.amount / 100) * action.product.fetched.vit_d.value,
				vit_k: 							nutrition.vit_k 				- (action.product.amount / 100) * action.product.fetched.vit_k.value
			};
		case 'RECALCULATE_NUTRIENTS':
			action.payload.map((product) => {
				if (product.fetched) {
					return {
						...nutrition,
						kcal: 							nutrition.kcal 					+ (product.amount / 100) * product.fetched.kcal.value,
						protein: 						nutrition.protein 			+ (product.amount / 100) * product.fetched.protein.value,
						calcium: 						nutrition.calcium 			+ (product.amount / 100) * product.fetched.calcium.value,
						iron: 							nutrition.iron 					+ (product.amount / 100) * product.fetched.iron.value,
						magnesium: 					nutrition.magnesium 		+ (product.amount / 100) * product.fetched.magnesium.value,
						phosphorus: 				nutrition.phosphorus 		+ (product.amount / 100) * product.fetched.phosphorus.value,
						potassium:					nutrition.potassium 		+ (product.amount / 100) * product.fetched.potassium.value,
						sodium: 						nutrition.sodium 				+ (product.amount / 100) * product.fetched.sodium.value,
						zinc: 							nutrition.zinc 					+ (product.amount / 100) * product.fetched.zinc.value,
						copper: 						nutrition.copper 				+ (product.amount / 100) * product.fetched.copper.value,
						manganese: 					nutrition.manganese 		+ (product.amount / 100) * product.fetched.manganese.value,
						selenium: 					nutrition.selenium 			+ (product.amount / 100) * product.fetched.selenium.value,
						fluoride: 					nutrition.fluoride 			+ (product.amount / 100) * product.fetched.fluoride.value,
						vit_c: 							nutrition.vit_c 				+ (product.amount / 100) * product.fetched.vit_c.value,
						thiamin: 						nutrition.thiamin 			+ (product.amount / 100) * product.fetched.thiamin.value,
						riboflavin: 				nutrition.riboflavin 		+ (product.amount / 100) * product.fetched.riboflavin.value,
						niacin: 						nutrition.niacin 				+ (product.amount / 100) * product.fetched.niacin.value,
						panthotenic_acid: 	nutrition.panthotenic_a + (product.amount / 100) * product.fetched.panthotenic_acid,
						vit_b6: 						nutrition.vit_b6 				+ (product.amount / 100) * product.fetched.vit_b6.value,
						folate: 						nutrition.folate 				+ (product.amount / 100) * product.fetched.folate.value,
						vit_b12: 						nutrition.vit_b12 			+ (product.amount / 100) * product.fetched.vit_b12.value,
						vit_a: 							nutrition.vit_a 				+ (product.amount / 100) * product.fetched.vit_a.value,
						vit_e: 							nutrition.vit_e 				+ (product.amount / 100) * product.fetched.vit_e.value,
						vit_d: 							nutrition.vit_d 				+ (product.amount / 100) * product.fetched.vit_d.value,
						vit_k: 							nutrition.vit_k 				+ (product.amount / 100) * product.fetched.vit_k.value
					};
				} else {
					return {
						...nutrition,
						kcal: 							nutrition.kcal 					+ 0,
						protein: 						nutrition.protein 			+ 0,
						calcium: 						nutrition.calcium 			+ 0,
						iron: 							nutrition.iron 					+ 0,
						magnesium: 					nutrition.magnesium 		+ 0,
						phosphorus: 				nutrition.phosphorus 		+ 0,
						potassium:					nutrition.potassium 		+ 0,
						sodium: 						nutrition.sodium 				+ 0,
						zinc: 							nutrition.zinc 					+ 0,
						copper: 						nutrition.copper 				+ 0,
						manganese: 					nutrition.manganese 		+ 0,
						selenium: 					nutrition.selenium 			+ 0,
						fluoride: 					nutrition.fluoride 			+ 0,
						vit_c: 							nutrition.vit_c 				+ 0,
						thiamin: 						nutrition.thiamin 			+ 0,
						riboflavin: 				nutrition.riboflavin 		+ 0,
						niacin: 						nutrition.niacin 				+ 0,
						panthotenic_acid: 	nutrition.panthotenic_a + 0,
						vit_b6: 						nutrition.vit_b6 				+ 0,
						folate: 						nutrition.folate 				+ 0,
						vit_b12: 						nutrition.vit_b12 			+ 0,
						vit_a: 							nutrition.vit_a 				+ 0,
						vit_e: 							nutrition.vit_e 				+ 0,
						vit_d: 							nutrition.vit_d 				+ 0,
						vit_k: 							nutrition.vit_k 				+ 0
					};
				}
			});
			break;
		default:
			return nutrition;
	}
}