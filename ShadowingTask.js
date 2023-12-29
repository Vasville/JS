var x = 1;

var foo = function() {
	var x = 2;

	let bar = function(x) {
		console.log("x in bar = ", x)
	};
	bar(99);

	console.log("x in foo = ", x);
}

foo();
console.log("x in main = ", x);