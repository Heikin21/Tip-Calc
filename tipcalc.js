function showNum1(){
	if (document.getElementById('iinput').value === ' ') {
		document.getElementById('iinput').value = '1'
	}else {
		var newtext = document.getElementById('iinput').value;
		document.getElementById('iinput').value += '1';
	}
}
function showNum2(){
if (document.getElementById('iinput').value === ' ') {
		document.getElementById('iinput').value = '2'
	}else {
		var newtext = document.getElementById('iinput').value;
		document.getElementById('iinput').value += '2';
	}
}
function showNum3(){
if (document.getElementById('iinput').value === ' ') {
		document.getElementById('iinput').value = '3'
	}else {
		var newtext = document.getElementById('iinput').value;
		document.getElementById('iinput').value += '3';
	}
}
function showNum4(){
if (document.getElementById('iinput').value === ' ') {
		document.getElementById('iinput').value = '4'
	}else {
		var newtext = document.getElementById('iinput').value;
		document.getElementById('iinput').value += '4';
	}
}
function showNum5(){
if (document.getElementById('iinput').value === ' ') {
		document.getElementById('iinput').value = '5'
	}else {
		var newtext = document.getElementById('iinput').value;
		document.getElementById('iinput').value += '5';
	}
}
function showNum6(){
if (document.getElementById('iinput').value === ' ') {
		document.getElementById('iinput').value = '6'
	}else {
		var newtext = document.getElementById('iinput').value;
		document.getElementById('iinput').value += '6';
	}
}
function showNum7(){
if (document.getElementById('iinput').value === ' ') {
		document.getElementById('iinput').value = '7'
	}else {
		var newtext = document.getElementById('iinput').value;
		document.getElementById('iinput').value += '7';
	}
}
function showNum8(){
if (document.getElementById('iinput').value === ' ') {
		document.getElementById('iinput').value = '8'
	}else {
		var newtext = document.getElementById('iinput').value;
		document.getElementById('iinput').value += '8';
	}
}
function showNum9(){
if (document.getElementById('iinput').value === ' ') {
		document.getElementById('iinput').value = '9'
	}else {
		var newtext = document.getElementById('iinput').value;
		document.getElementById('iinput').value += '9';
	}
}
function showNum0(){
if (document.getElementById('iinput').value === ' ') {
		document.getElementById('iinput').value = '0'
	}else {
		var newtext = document.getElementById('iinput').value;
		document.getElementById('iinput').value += '0';
	}
}
function deleteall(){
if (document.getElementById('iinput').value != ' ') {
	document.getElementById('iinput').value = ' ';
	}
}

function entertotal(){
	var first = document.getElementById('iinput').value;
	var second = document.getElementById('TIP').value;
	var z = first * second;
	document.getElementById('total').innerHTML = z;
}

