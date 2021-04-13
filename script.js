
document.getElementById("submit").addEventListener("click", calculateChances);
function calculateChances() {
	let mja = parseInt(document.getElementById("mja").value);
	let victoriiG = parseInt(document.getElementById("victoriiG").value);
	let egaluriG = parseInt(document.getElementById("egaluriG").value);
	let infrangeriG = parseInt(document.getElementById("infrangeriG").value);
	let mjd = parseInt(document.getElementById("mjd").value);
	let victoriiO = parseInt(document.getElementById("victoriiO").value);
	let egaluriO = parseInt(document.getElementById("egaluriO").value);
	let infrangeriO = parseInt(document.getElementById("infrangeriO").value);
	let puncteG = victoriiG * 3 + egaluriG * 1 + infrangeriG * 0;
	let coeficientG = Math.round((puncteG / mja) * 1e2 ) / 1e2 * 100;
	let puncteO = victoriiO * 3 + egaluriO * 1 + infrangeriO * 0;
	let coeficientO = Math.round((puncteO / mjd) * 1e2 ) / 1e2 * 100;
	let fj = ((coeficientG - coeficientO) * 100);
	let fjProc = Math.round((fj / 300) * 1e2 ) / 1e2;
	let sanseG = 50 + fjProc;
	let sanseO = 50 - fjProc;
	alert("Gazdele au sanse de castig de " + sanseG + "%, iar oaspetii au sanse de castig de " + sanseO + "%.");
}