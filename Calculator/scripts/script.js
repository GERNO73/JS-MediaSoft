function numberOne() {
	let n1 = '';
	n1 = prompt('Введите первое число','');
	console.log(n1);
	n1 = +n1;
	console.log(n1);
	return n1;
}
function numberTwo() {
	let n2 = '';
	n2 = prompt('Введите второе число','');
	console.log(n2);
	n2 = +n2;
	console.log(n2);
	return n2;
}
function chooseAction() {
	let a = '';
	a = prompt('Выберите операцию: *, +, -, /, %','');
	console.log(a);
	return a;
}
function calc(i,j,act) {
	switch(act){
		case'*':
		alert(i * j);
		break;
		case'+':
		alert(i + j);
		break;
		case'-':
		alert(i - j);
		break;
		case'/':
		alert(i / j);
		break;
		case'%':
		alert(i % j);
		break;
		default:
		alert('Неизвестная операция, обновите страницу');
	}
}
let number1 = numberOne();
if (isNaN(number1)) {
	alert('Введите число' );
	number1 = numberOne();
}
let number2 = numberTwo();
if (isNaN(number2)) {
	alert('Введите число' );
	number2 = numberTwo();
}
let act = chooseAction();
calc(number1,number2,act);