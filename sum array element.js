// TASK: given the array numbers, write the code which will print in console the sum of all positive  even numbers in the array:


let numbers = [-2, 3, 7, 8, -1, 4, 2];
var sum = 0;
for (var x = 3; x <= 6; x++) {
  if (numbers[x] > 0) {
  sum += x; 
}
}
console.log("sum = " + sum);