console.log("iife-xhr.js loaded");
var animals = document.getElementById("animals");
function showCarnivores (carnivores) {
  console.log("in main.js", carnivores);
  for (n=0; n<carnivores.length; n+=1) {
  	animals.innerHTML += `<p>`+carnivores[n].name+`</p>`;
  }
}

function showHerbivores (herbs) {
	console.log("in main.js", herbs);
	for(i=0; i<herbs.length; i+=1) {
		animals.innerHTML += `<p>`+herbs[i].name+`</p>`;
	}
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);