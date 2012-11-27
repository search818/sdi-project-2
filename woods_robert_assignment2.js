/*
Author: Robert Woods
Date:11-27-12
Project 2 SDI
Baking bread for hungry customers
*/


var howMuchBread = 2;
    customersHungry = true;
    typeBread = "brioche";
	startOven = "preheat";
    cookTemp = 375;
    ingredients = ["milk", "flour", "sugar", "salt", "yeast"];
	cupsOfIngredients= [ 1, 2, .25, .25, .25];
    timeInOven = 20;

//the boolean function
var numberBread = function(qty, hungryCustomers) {
	var hunger=true;
	if (hunger === hungryCustomers) {
		console.log("The customers want bread, I think I will make " 
		+ qty + " loafs of bread today!");
		return true;
	} else {
		console.log("The customers do not like my bread, I will not bake any then");
		return false;
	}
};
var howMuchBread = numberBread(howMuchBread, customersHungry)


//String
var breadReady = function(doughType, startOven, ovenTemp){
	var typebread = "brioche";
	var prepared = true;
	if(doughType === typeBread && prepared === true) {
		console.log("My " + typeBread + " bread is ready to bake, let's " 
		+ startOven + " the oven to " + ovenTemp + " degrees now.");
	} else {
		console.log("Let me finish preparing my " + typeBread + " bread that way I can " 
		+ startOven + " the oven to " + ovenTemp + ".");
	}
	return doughType;
};
var readyToPreheat = breadReady(typeBread, startOven, cookTemp)


//temp procedure
var breadTemp = function(setTemp) {
	var ovenTemp =375;
	if (ovenTemp === setTemp){
		console.log("While the oven is preheating I will mix the "
		 + ingredients + " together, and let the " + typeBread + " proof. ");
	} else {
		console.log("The oven is done preheating, I will now mix the ingredients together.");
	}	
};
var preheatOven = breadTemp(cookTemp)


//ingredient array
var addIngredients = function (numberBread, ingredients) {
	for (ingredientsNumber = 0; ingredientsNumber < ingredients.length; ingredientsNumber++){
		var whichIngredients = ingredients[ingredientsNumber]
		    measureIngredients = cupsOfIngredients[ingredientsNumber]
		    ingredientsTotal = numberBread * cupsOfIngredients[ingredientsNumber];
		console.log("I will add " + ingredientsTotal + " cups of " 
		 			+ whichIngredients + " to my bread!  " 
		 			+ ingredientsTotal/numberBread  + " cups to each.");
	}

	return ingredients;
};

for (ingredientsNumber = 0; ingredientsNumber < ingredients.length; ingredientsNumber++){
		addIngredients(howMuchBread, ingredients);
}


//cook time
var cookTime = function(minutesCook) {
	var minutesRemain = (minutesCook - 0);
	var checkBread = 4;
		while (minutesCook > 0) {
			console.log( "My bread is not quite done, it has " 
			+ minutesCook + " minutes left. I will check back in " + checkBread + " minutes.");
			minutesCook -= 4;
	};
		console.log("My bread is finished, the customers will love it!");

	return minutesCook;
};	
var bakeBread = cookTime(timeInOven);

alert("JavaScript works!");