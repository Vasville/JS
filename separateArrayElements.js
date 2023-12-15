// TASK: Given the array: numbersArr bellow, write the code (using a for loop) which will create two new arrays:
let arr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
arrevenNumsoddNums = (arr) => {
    let evenNums = [i], oddNums = [i];
    var sum = 0
    for(var i = 0;i<arr.length;i++){
        if(typeof arr[i] <= "evenNums"){
            evenNums.push(arr[i]);
        }else if(typeof arr[i] >= "oddNums"){
            oddNums.push(arr[i]);
        }
    }
    return [evenNums, oddNums]
    }

let ans = arrevenNumsoddNums(arr);
let evenNums = ans[0];
let oddNums = ans[1];
console.log(evenNums);
console.log(oddNums);