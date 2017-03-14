	var amountCows = 2; //A new variable called amountCows is created and given the value of 2
	var amountSheep = 5; //A new variable called amountSheep is created and given the value of 5
	var amountDucks = 2; //A new variable called amountDucks is created and given the value of 2
	var amountHorses = 1; //A new variable called amountHorses is created and given the value of 1
	var amountRabbits = 4; //A new variable called amountRabbits is created and given the value of 4
	var animalTotal = amountCows + amountSheep + amountDucks + amountHorses + amountRabbits; //A new variable called animalTotal is created. The value of the variable is the amount of the variables at the top of the page all added together.
	document.getElementById("animalTotal").innerHTML = "The total number of animals in the field is: " + animalTotal; //The getElementById returns the element that has that ID attribute (animalTotal in this instance) with the specified value. The innerHTML returns the HTML content.



	//This code has been taken from wwww.w3schools.com/js/js_unfctions.asp
	//A function is code that is written to perform a task. They are useful if code is used to repeat tasks as you can reuse the function by calling it later on in your code.
	var food = 8; //A new variable called food is created and given the value of 8
	function sheepFood() {   //A function called sheepFood has been created.   
		return amountSheep * food; //The value of amountSheep * food will be returned.
	}
	document.getElementById("food").innerHTML = "Food for the sheep is being worked out here: " + sheepFood(food, amountSheep);//The getElementById returns the element that has that ID attribute (food in this instance) with the specified value. The innerHTML returns the HTML content.







	//This code is from the JavaScript and JQuery book by Jon Duckett - chapter 3 on Functions, Methods and Objects and chapter 6 on Events
	function clickHorse() {    //This creates a function called clickHorse. 
	var user = prompt("What is your name?", "Please enter your name"); //A variable called user is created. The variable makes a prompt appear on the screen asking the user to enter their name. In the input box it has 'Please enter your name' in it. This reminds the user what is to be typed in the box
		if (user){  //Conditional logic. If the user has inputted their name in the prompt then...
			alert("Nice to meet you, " + user + " .Can I have a sugar cube?"); // ... an alert will appear saying Nice to meet you can i have a sugar cube?. The + user means that the name the user inputted will also appear in the alerted message. Concatenation has been used to combine the strings together to make one string. The alert is also an output method as it allows the user to see the output of the javascript.

			console.log(user); //console.log is used to write text into the browser console so the user is able to see the data. This bit of code allows the variable user to be displayed. console.log(variable name) is used as a debugging tool.
		
			document.getElementById("horse").src = "horse.jpg"; //The getElementById returns the element that has that ID attribute (horse in this instance) with the specified value. The function is used on the image of the horse.

	}
}

	




	//This code is from the JavaScript and JQuery book by Jon Duckett - chapter 3 on Functions, Methods and Objects that also includes arrays. Also from www.w3schools.com/js/js_math.asp
	//An array is used to hold a list of values that are related to each other.
	function animalFunction() {   //This creates a function called animalFunction
		var animals = ["cow", "sheep", "duck", "horse", "rabbit"]; //Creating an array called animals.  This array is used to hold the names of some farm animals.
		var randomAnimal = animals[Math.floor(animals.length * Math.random())]; //a new variable called randomAnimal is created. The value given to this variable is random animal from the array called animals. A calculation is done to randomate an animal. animals.length is used to find out what the length of the array is which is 4. Math.random is used to find a random number between 0 and 1. The Math.floor is a method and it is used to round a number down to its nearest integer.
		document.getElementById("farm").innerHTML = randomAnimal; 
		var text = ""; //text
		var i; //this variable called i in a loop means incrementer. This variable counts how many times the loop has been executed. This is needed because the condition of the loop would never be met, meaning an infinite loop 
		for (i = 0; i < animals.length; i++) {      //loops through the items in the array. i++ means one will be added to the variable. A for loop runs through code for a specified number of times. A counter is oten used to tell the loop how many times it is to loop through the code.
   	 	text += animals[i] + "<br>";       // this gets the text from the animals array
		console.log(text); //console.log is used to write text into the browser console so the user is able to see the data. This bit of code allows the variable user to be displayed. console.log(variable name) is used as a debugging tool.
		document.getElementById("demo").innerHTML = text;
	}
 }








//This code is from the JavaScript and JQuery book by Jon Duckett - chapter 3 on Functions, Methods and Objects which includes the Date Object. Also from www.w3schools.com/js/js_dates.asp, wwww.w3schools.com/js/js_date_fromats.asp and www.w3schools.com/js/js_date_methods.asp
 // A switch statement is like an IF statement - it is a logical condition. It works by evaluating one block of code with the expression set. If there is a match then the block of code will be executed. 
	var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"); //An array is created to hold the name of the months of the year.
	var dateNow = new Date(); //A date object has been created with the current date and time
	var yearNow = dateNow.getFullYear(); //This gets the current year and puts it into a variable called yearNow
	var monthNow = months[dateNow.getMonth()]; //This gets the current month and takes this from the months array and puts it into a variable called monthNow. 
	var dayNow = dateNow.getDate(); //This gets the current day and returns it in the dayNow variable
	var dayEnding;  //A new variable is created where the value of the switch statement will be held.

	switch (dayNow) {       
	case 1:
	case 21:
	case 31:
   		dayEnding = "st";  
   		break; //Break means that the code wil break out of the switch block. The switch then selects only one of the blocks of code to be excecuted
	case 2:
	case 22:
  	 dayEnding = "nd";
  	 break;
	case 3:
	case 23:
  	 dayEnding = "rd";
   	break;
	default:
   dayEnding = "th";
   	break;
	}  //This switch statement is working out what the day ending for the current date6 is. If the date is 1, 21 or 31 then the ending will be 'st' and this will be added to the dayNow. If the day is 1, 21 or 31 then the other blocks of code do not need to be ran because the criteria has been matched.

var salutation;

var date = new Date(); //A date object has been created.
var hour = date.getHours(); //This gets the current hours and returns it in a variable called hour
var minute = date.getMinutes(); //This gets the current minutes and returns it in a variable called minute


if (minute < 10) {
   minute = "0" + minute; //If the minute is less than 10 then minute will be zero plus the minute.
}

if (hour < 12) {
   salutation = "Good Morning";  //If the hour is before midday (12 noon) then the string 'Good Morning' will be displayed
}
else if (hour < 18) {
   salutation = "Good Afternoon"; //If the hour is before 18 (6pm) but after 12 then the string 'Good Afternoon' will be displayed
}
else {
   salutation = "Good Evening"; //Otherwise then the string 'Good Evening' will be displayed
}
   
document.getElementById("date").innerHTML = salutation + " .Welcome to the webpage. " + "The time is " + hour + ":" + minute + " .Today is the " + dayNow + dayEnding + " of " + monthNow + " " + yearNow; //This is writing out the different variables and strings out to the webpage using concatenation
//concatenation - This joins more than one string together. It basically means joining two things together.








