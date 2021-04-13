document.getElementById("submit").addEventListener("click", calculateChances);
function calculateChances() {
	let mja = document.getElementById("mja").value;
	let victoriiG = document.getElementById("victoriiG").value;
	let egaluriG = document.getElementById("egaluriG").value;
	let infrangeriG = document.getElementById("infrangeriG").value;
	let puncteG = victoriiG * 3 + egaluriG * 1 + infrangeriG * 0;
	let coeficientG = puncteG / mja;
	let mjd = document.getElementById("mjd").value;
	let victoriiO = document.getElementById("victoriiO").value;
	let egaluriO = document.getElementById("egaluriO").value;
	let infrangeriO = document.getElementById("infrangeriO").value;
	let puncteO = victoriiO * 3 + egaluriO * 1 + infrangeriO * 0;
	let coeficientO = puncteO / mjd;
	let fj = (coeficientG - coeficientO) * 100;
	alert(fj);
}