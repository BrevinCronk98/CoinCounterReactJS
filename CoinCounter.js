const num = 499;

const Quarters = (qcounter) => {
	if (num - qcounter * 25 >= 25) {
		Quarters(qcounter + 1);
	} else {
		console.log(qcounter);
		Dimes(0);
	}
};

const Dimes = (dcounter) => {
	if (num % 25 - dcounter * 10 >= 10) {
		Dimes(dcounter + 1);
	} else {
		console.log(dcounter);
		Nickles(0);
	}
};

const Nickles = (ncounter) => {
	if (num % 10 - ncounter * 5 >= 5) {
		Nickles(ncounter + 1);
	} else {
		console.log(ncounter);
		Pennies(0);
	}
};

const Pennies = (pcounter) => {
	if (num % 5 - pcounter >= 1) {
		Pennies(pcounter + 1);
	} else {
		console.log(pcounter);
	}
};

Quarters(0);

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
