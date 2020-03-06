let str = "";
var uprstr = document.querySelector('#uprstr');
var lwrstr = document.querySelector('#lwrstr');
var uprnum = 0;
var op = "";

function digitClicked(id){
	str = str + id;
	lwrstr.textContent = str;
}

function operatorClicked(id){
	op = id;
	switch(id){

		case "m":
		console.log("Multiplication");
		multiply();
		uprstr.textContent = uprnum.toString() + " * ";
		break;
		
		case "d":
		console.log("Division");
		divide();
		uprstr.textContent = uprnum.toString() + " / ";
		break;
		case "a":
		console.log("Addition");
		add();
		uprstr.textContent = uprnum.toString() + " + ";
		break;

		case "s":
		console.log("Subtraction");;
		subtract();
		uprstr.textContent = uprnum.toString() + " - ";
		break;

		case "p":
		console.log(id);
		uprstr.textContent = first + "*";
		break;

	}
}

function allClear(){
	str = "";
	uprnum = 0;
	lwrstr.textContent = "0";
	uprstr.textContent = "";
}

function equals(){
	if(str.length === 0){
		if(uprnum === 0){return;}
		else{
			str = uprnum.toString();
			uprnum = 0;
			uprstr.textContent = "";
			lwrstr.textContent = str;
		}
		return;
	}
	var num;
	switch(op){
		case "m":
			num = uprnum * parseInt(str,10);
			uprnum = 0;
			str = num.toString();
			lwrstr.textContent = str;
			uprstr.textContent = "";
			break;
		case "d":
			if(parseInt(str,10) === 0){
				uprnum = 0;
				str = "";
				lwrstr.textContent = "Error";
				uprstr.textContent = "";
			}
			else{
			num = uprnum / parseInt(str,10);
			num = num.toFixed(2);
			uprnum = 0;
			str = num.toString();
			lwrstr.textContent = str;
			uprstr.textContent = "";
			}
			break;
		case "a":
			num = uprnum + parseInt(str,10);
			uprnum = 0;
			str = num.toString();
			lwrstr.textContent = str;
			uprstr.textContent = "";
			break;
		case "s":
			num = uprnum - parseInt(str,10);
			uprnum = 0;
			str = num.toString();
			lwrstr.textContent = str;
			uprstr.textContent = "";
			break;
	}
}

function cleard(){
	if (str.length === 0) {
		return;
	}
	else {
		str = str.slice(0,-1);
		lwrstr.textContent = str;
	}
}

function multiply(){
	if(str.length !== 0){
		if(uprnum === 0){
			uprnum = parseInt(str,10);
			str = "";
			lwrstr.textContent = "";
		}
		else{
			uprnum = uprnum * parseInt(str,10);
			str = "";
			lwrstr.textContent = "";
		}
	}
	else{
		uprnum = 0;
	}
}

function divide(){
	if(str.length !== 0){
		if(uprnum === 0){
			uprnum = parseInt(str,10);
			str = "";
			lwrstr.textContent = "";
		}
		else{
			if(parseInt(str,10) === 0){
				uprnum = 0;
				str ="";
				lwrstr.textContent = "Error";
			}
			else{
			uprnum = uprnum / parseInt(str,10);
			uprnum = uprnum.toFixed(2);
			str = "";
			lwrstr.textContent = "";
			}
		}
	}
	else{
		uprnum = 0;
	}	
}

function add(){
	if(str.length !== 0){
		if(uprnum === 0){
			uprnum = parseInt(str,10);
			str = "";
			lwrstr.textContent = "";
		}
		else{
			uprnum = uprnum + parseInt(str,10);
			str = "";
			lwrstr.textContent = "";
		}
	}
	else{
		uprnum = 0;
	}
}

function subtract(){
	if(str.length !== 0){
		if(uprnum === 0){
			uprnum = parseInt(str,10);
			str = "";
			lwrstr.textContent = "";
		}
		else{
			uprnum = uprnum - parseInt(str,10);
			str = "";
			lwrstr.textContent = "";
		}
	}
	else{
		uprnum = 0;
	}
}