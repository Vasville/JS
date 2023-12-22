function checkUserAge() {
    var inputsValues = getInputsValues();
	var userBirthYear = inputsValues.uBirth.year;
	var userName = inputsValues.uname;

	console.log(userBirthYear);
	console.log(typeof userBirthYear);
    console.log(userName);
    
    let userAge = 2022 - userBirthYear;
	let x = 18 - userAge;

	if (userAge >= 18) {
			console.log(`Добре дошли, ${userName}!`);
	} else if (userAge >= 12 && userAge < 18) {		
			console.log(`${userName}, ще имате достъп само до определена функционалност от този сайт.`);
	} else {
			console.log(`Съжaлявам ${userName}, отбий се тук след ${x} години!`);
	}
}
