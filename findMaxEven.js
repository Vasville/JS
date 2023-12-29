// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.
function max_even(arra) {

    arra.sort((x, y) => y - x);

    for(var i = 0; i < arra.length; i++) {
        if(arra[i] % 2 == 0)
        return arra[i];
    }
}

console.log(max_even([2, -4, 5, 3, 9, 0, 1]));