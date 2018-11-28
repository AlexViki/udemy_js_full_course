let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let t1 = "Введите обязательную статью расходов в этом месяце",
    t2 = "Во сколько обойдется?";

for(let i = 0; i < 2; i++ ) {
    let q1 = prompt(t1, '');
    if( (typeof(q1) != null) && (q1 != "") ) { 
        for( let j = 0; j < 2; j++) {
            let q2 = +prompt(t2, '');
            if( (typeof(q2) != null) && (q2 != "") && (!isNaN(q2)) ) {
                appData.expenses[q1] = q2;
                j++;
            } else {
                console.log('Try again q2...' + j);
                j--;
            }
            console.log('Done q2');
        }
        console.log('Done q1');
    } else {
        console.log('Try again q1...');
        i--; 
    }
}
moneyPerDay = appData.budget / 30;

console.log(moneyPerDay);
console.log(appData);
