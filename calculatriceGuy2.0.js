// recolter tous les valeur button
function getValueButtons(val) {
	setValueButton = document.querySelector(".contenu>.monitorCalc").value += val;

	// condition petit jeu pour enfant
	let getBgCalcColor = document.querySelector('.contenu');
	let tableButton = ["#19FC03","#0321FC","#A1FC03","#FC0328","#07FC03","#ED03FC","#F4FC03","#ED4339","#F9CB2D","#2DF930","#425940","#99F590","#EAF590","#F7FB04"]
	getBgCalcColor.style.backgroundColor = tableButton[val];
}

// function calcul
function calculEr() {
	//recupéré la valeur sur l'ecran
	let getValueMonitor = document.querySelector('.monitorCalc').value;	

	// faire le calcul
	let evalGetValueMonitor = eval(getValueMonitor);

	//renvoyer la valeur à l'ecran
	document.querySelector('.monitorCalc').value = evalGetValueMonitor;
}

// function reinitialisation
function reinits() {
	
	monitorCalcs = "";
	let setValueButton = document.querySelector(".contenu>.monitorCalc").value = monitorCalcs;
}