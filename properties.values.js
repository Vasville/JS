let logArray = {
	evens: function (arr) {
		console.log(`The even numbers are:`);
		for (let i = 0; i < arr.length; i++) {
			const element = arr[i];
			if (element % 2 === 0) {
				console.log(element);
			}
		}
	},
	odds: function (arr) {
		console.log(`The odd numbers are:`);
		for (let i = 0; i < arr.length; i++) {
			const element = arr[i];
			if (element % 2) {
				console.log(element);
			}
		}
	}
};

let numbers = [1, 2, 3, 4, 5];
logArray.evens(numbers);
logArray.odds(numbers);
