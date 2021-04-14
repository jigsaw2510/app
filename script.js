
document.getElementById("submit").addEventListener("click", calculateChances);
function calculateChances() {

	// Metoda I
	let mja = 5;
	let victoriiG = parseInt(document.getElementById("victoriiG").value);
	let egaluriG = parseInt(document.getElementById("egaluriG").value);
	let mjd = 5;
	let victoriiO = parseInt(document.getElementById("victoriiO").value);
	let egaluriO = parseInt(document.getElementById("egaluriO").value);
	let puncteG = victoriiG * 3 + egaluriG * 1;
	let coeficientG = Math.round((puncteG / mja) * 1e2 ) / 1e2 * 100;
	let puncteO = victoriiO * 3 + egaluriO * 1;
	let coeficientO = Math.round((puncteO / mjd) * 1e2 ) / 1e2 * 100;
	let met1 = ((coeficientG - coeficientO) * 100);
	let met1Proc = Math.round((met1 / 300) * 1e2 ) / 1e2;

	// Metoda II
	let victorieAcasaG1 = parseInt(document.getElementById("victorieAcasaG1").value);
	let egalAcasaG1 = parseInt(document.getElementById("egalAcasaG1").value);
	let victorieDeplasareG1 = parseInt(document.getElementById("victorieDeplasareG1").value);
	let egalDeplasareG1 = parseInt(document.getElementById("egalDeplasareG1").value);
	let victorieAcasaG2 = parseInt(document.getElementById("victorieAcasaG2").value);
	let egalAcasaG2 = parseInt(document.getElementById("egalAcasaG2").value);
	let victorieDeplasareG2 = parseInt(document.getElementById("victorieDeplasareG2").value);
	let egalDeplasareG2 = parseInt(document.getElementById("egalDeplasareG2").value);
	let victorieAcasaG3 = parseInt(document.getElementById("victorieAcasaG3").value);
	let egalAcasaG3 = parseInt(document.getElementById("egalAcasaG3").value);
	let victorieDeplasareG3 = parseInt(document.getElementById("victorieDeplasareG3").value);
	let egalDeplasareG3 = parseInt(document.getElementById("egalDeplasareG3").value);
	let victorieAcasaO1 = parseInt(document.getElementById("victorieAcasaO1").value);
	let egalAcasaO1 = parseInt(document.getElementById("egalAcasaO1").value);
	let victorieDeplasareO1 = parseInt(document.getElementById("victorieDeplasareO1").value);
	let egalDeplasareO1 = parseInt(document.getElementById("egalDeplasareO1").value);
	let victorieAcasaO2 = parseInt(document.getElementById("victorieAcasaO2").value);
	let egalAcasaO2 = parseInt(document.getElementById("egalAcasaO2").value);
	let victorieDeplasareO2 = parseInt(document.getElementById("victorieDeplasareO2").value);
	let egalDeplasareO2 = parseInt(document.getElementById("egalDeplasareO2").value);
	let victorieAcasaO3 = parseInt(document.getElementById("victorieAcasaO3").value);
	let egalAcasaO3 = parseInt(document.getElementById("egalAcasaO3").value);
	let victorieDeplasareO3 = parseInt(document.getElementById("victorieDeplasareO3").value);
	let egalDeplasareO3 = parseInt(document.getElementById("egalDeplasareO3").value);
	let puncteGazdeM1 = victorieAcasaG1 * 3 + egalAcasaG1 * 1 + victorieDeplasareG1 * 5 + egalDeplasareG1 * 2;
	let puncteGazdeM2 = victorieAcasaG2 * 3 + egalAcasaG2 * 1 + victorieDeplasareG2 * 5 + egalDeplasareG2 * 2;
	let puncteGazdeM3 = victorieAcasaG3 * 3 + egalAcasaG3 * 1 + victorieDeplasareG3 * 5 + egalDeplasareG3 * 2;
	let puncteOaspetiM1 = victorieAcasaO1 * 3 + egalAcasaO1 * 1 + victorieDeplasareO1 * 5 + egalDeplasareO1 * 2;
	let puncteOaspetiM2 = victorieAcasaO2 * 3 + egalAcasaO2 * 1 + victorieDeplasareO2 * 5 + egalDeplasareO2 * 2;
	let puncteOaspetiM3 = victorieAcasaO3 * 3 + egalAcasaO3 * 1 + victorieDeplasareO3 * 5 + egalDeplasareO3 * 2;
	let puncteTotGMet2 = puncteGazdeM1 + puncteGazdeM2 + puncteGazdeM3;
	let puncteTotOMet2 = puncteOaspetiM1 + puncteOaspetiM2 + puncteOaspetiM3;
	let met2 = (puncteTotGMet2 - puncteTotOMet2) * 100;
	let met2Proc = Math.round((met2 / 15) * 1e2 ) / 1e2;

	// Metoda III
	let puncteTotGMet3 = puncteGazdeM1 * 1 + puncteGazdeM2 * 2 + puncteGazdeM3 * 3;
	let puncteTotOMet3 = puncteOaspetiM1 * 1 + puncteOaspetiM2 * 2 + puncteOaspetiM3 * 3;
	let met3 = (puncteTotGMet3 - puncteTotOMet3) * 100;
	let met3Proc = Math.round((met3 / 30) * 1e2 ) / 1e2;

	// Metoda IV
	let marcG = parseInt(document.getElementById("marcG").value);
	let primG = parseInt(document.getElementById("primG").value);
	let marcO = parseInt(document.getElementById("marcO").value);
	let primO = parseInt(document.getElementById("primO").value);
	let met4 = ((marcG + primO) - (marcO + primG)) * 100;
	let met4Proc = Math.round((met4 / 20) * 1e2 ) / 1e2;

	// Metoda V
	let medieGoluriG = marcG / 3;
	let medieGoluriO = marcO / 3;
	let met5 = (medieGoluriG - medieGoluriO) * 100;
	let met5Proc = Math.round((met5 / 3) * 1e2 ) / 1e2;

	// Metoda VI
	let victoriiGMD = parseInt(document.getElementById("victoriiGMD").value);
	let victoriiOMD = parseInt(document.getElementById("victoriiOMD").value);
	let met6 = (victoriiGMD - victoriiOMD) * 100;
	let met6Proc = Math.round((met6 / 5) * 1e2 ) / 1e2;

	// Metoda VII
	let pozG = parseInt(document.getElementById("pozG").value);
	let pozO = parseInt(document.getElementById("pozO").value);
	let totalEchipe = parseInt(document.getElementById("totalEchipe").value);
	let met7 = (pozO - pozG) * 100;
	let met7Proc = Math.round((met7 / totalEchipe) * 1e2 ) / 1e2;

	// Calcul final
	let mediaSanselor = ((met1Proc + met2Proc + met3Proc + met4Proc + met5Proc + met6Proc + met7Proc) / 7) / 2;
	let mediaSanselorProc = Math.round(mediaSanselor * 1e2 ) / 1e2;
	let sanseG = Math.round((50 + mediaSanselorProc) * 1e2 ) / 1e2;
	let sanseO = Math.round((50 - mediaSanselorProc) * 1e2 ) / 1e2;

	alert("Gazdele au sanse de castig de " + sanseG + "%, iar oaspetii au sanse de castig de " + sanseO + "%.");
}