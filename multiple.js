const salary = 25000;
const isBCS = true;
const height = 68;
const hasCar = false;
height = 71;

/**if(salary > 20000 && height > 66){
	console.log('su-----patro');
}
else{
	console.log('onno patro khuji');
}
*/

if(salary > 25000 || height > 72){
	console.log('eso baba kobul');
}
else{
	console.log('vaag tui mokbul');
}

//more and more condition
if(salary > 25000 || height > 72 || isBCS == true){
	console.log('eso baba kobul');
}
else{
	console.log('vaag tui mokbul');
}


//more and more condition
if(salary > 25000 && height > 72 && isBCS == true){
	console.log('eso baba kobul');
}
else{
	console.log('vaag tui mokbul');
}

//-------complex condition------
if((salary > 25000 && hasCar == true) || isBCS == true) {
	console.log('tomar 14 gosti raji');
}

if((salary > 25000 || hasCar == true) && isBCS == true) {
	console.log('tomar 14 gosti raji');
}


