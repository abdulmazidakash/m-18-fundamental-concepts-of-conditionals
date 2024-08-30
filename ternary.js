/**
 * Ternary ---> Three parts
 * 
 * 		?   :
 * 
 * Condition ? do something when true : do something when false
 */

const age = 112;
//----Normal if-else-----
// if (age >= 18){
// 	console.log('You can vote.');
// }
// else{
// 	console.log('ghumai thako');
// }


//---simple ternary ----------
// age >= 18 ?  console.log('vote dio') : console.log('ghumai thako');

let price = 500;
const isLeader = false;

if (isLeader === true){
	price = 0;
}
else{
	price = price + 100;
}
// console.log(price);

price = isLeader === true ? 0 : price + 100;

// optional semi-advanced ternary 
if (isLeader === true){
	if (price > 1000) {
		price = price / 2;
	}
	else {
		price = 0;
	}
}
else {
	price = price + 1000;
}

price > 1000 ? price / 2 : 0

//feel free to ignore this one

price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;
price = isLeader === true ? 
			price > 1000 ? 
				price / 2 : 0 
       : price + 1000;
