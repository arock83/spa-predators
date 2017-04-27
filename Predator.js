console.log("predator.js loaded");

var Predator = (function () {
  var carnivores = [];
  var herbs = [];
  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText).carnivores;

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        console.log(carnivores);
        callbackToInvoke(carnivores);
      });
      loader.open("GET", "carnivores.json");
      loader.send();
      
    },
    loadHerbivores: function(callbackToInvoke) {
    	var herbLoader = new XMLHttpRequest();

    	herbLoader.addEventListener("load", function() {
    		herbs = JSON.parse(this.responseText).herbivores;
        console.log(herbs);
        callbackToInvoke(herbs);
    	});
      herbLoader.open("GET", "herbivores.json");
      herbLoader.send();
      
    }
  }
})(Predator || {});