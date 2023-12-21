function bmi(тегло, височина) {
    let bmi = тегло / (височина ** 2)

    if (bmi <= 18.5) {

        return "Поднормено тегло";
    } else if (bmi <= 25.0) {

        return "Нормално"
    } else if (bmi <= 30.0) {

        return "Наднормено тегло"
    } else if (bmi > 30) {
        return "Затлъстяване"
    }  
}

console.log(bmi(60, 1.60))

        

