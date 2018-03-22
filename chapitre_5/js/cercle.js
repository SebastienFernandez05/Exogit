function perimetre(r) {
	var result = 2 * Math.PI * r;
	return result;
}

function aire(r) {
	var result = Math.PI * r * r;
	return result;
}

var rayon = Number(prompt("Indiquer le rayon du cercle en cm :"));

console.log("Le cercle a un périmètre de " + perimetre(rayon) + " cm et une aire de " + aire(rayon) + " cm²");

console.log("Clin d'oeil pour Git");