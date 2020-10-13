let credits = 23580;
const pricePerDroid = 3000;
const userDroid = prompt('Сколько дроидов хотите купить?')
const totalPrice = userDroid * pricePerDroid
if(userDroid == null){
    console.log('Отменено пользователем!')
} else if(totalPrice > credits){
    console.log('Недостаточно средств на счету!')
} else {
    credits = credits - totalPrice;
    console.log(`Вы купили ${userDroid} дроидов, на счету осталось ${credits} кредитов.`)
}