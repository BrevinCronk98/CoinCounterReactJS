const num = 499;

// function Coins(num) {
// 	return function(quarts) {
// 		return function(dims) {
// 			return function(niks) {
// 				return function(pens) {
// 					return `Quarters: ${quarts}`;
// 				};
// 			};
// 		};
// 	};
// }

function Coins(qcounter) {
	if (num - qcounter * 25 >= 25) {
		return Coins(qcounter + 1);
	} else {
		console.log('Quarters: ', qcounter);
		return function Coins(dcounter) {
			if (num % 25 - dcounter * 10 >= 10) {
				return Coins(dcounter + 1);
			} else {
				console.log('Dimes: ', dcounter);
				return function Coins(ncounter) {
					if (num % 10 - ncounter * 5 >= 5) {
						return Coins(ncounter + 1);
					} else {
						console.log('Nickels: ', ncounter);
						return function Coins(pcounter) {
							if (num % 5 - pcounter >= 1) {
								return Coins(pcounter + 1);
							} else {
								console.log(
									'Quarters: ',
									qcounter,
									'Dimes: ',
									dcounter,
									'Nickels: ',
									ncounter,
									'Pennies: ',
									pcounter
								);
							}
						};
					}
				};
			}
		};
	}
}

const Dimes = Coins(0);
const Nickels = Dimes(0);
const Pennies = Nickels(0);
Dimes(0);
Nickels(0);
Pennies(0);

// Coins(0)(0)(0)(0);

// Nickles(0);
// Pennies(0);

// const incrementCounter = (counter) => {
//   if (counter >= 3) {
//     return counter;
//   } else {
//     console.log(counter);
//     return incrementCounter(counter + 1);
//   }
// }

// incrementCounter(0);
