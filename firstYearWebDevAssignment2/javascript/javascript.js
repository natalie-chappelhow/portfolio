//Skills Array
//This code is from the JavaScript and JQuery book by Jon Duckett - chapter 3 on Functions, Methods and Objects that also includes arrays. Also taken from the array that I successfully created for Assignment 1
var listSkills = ["HTML", " CSS", " JavaScript", " JQuery", " Can create and manipulate raster and vector images", " Knowledge of Adobe Suite such as Illustrator and Photoshop"]; //Lisiting my skills in an array called 'Skills'

var text = ""; //text. Is an empty string. Can be declared later

var i; //this variable called i in a loop means incrementer. This variable counts how many times the loop has been executed. This is needed because the condition of the loop would never be met, meaning an infinite loop 

for (i = 0; i < listSkills.length; i++) {  //loops through the items in the array. i++ means one will be added to the variable. A for loop runs through code for a specified number of times. A counter is oten used to tell the loop how many times it is to loop through the code.
  
   text += listSkills[i] + "</br>"; // this gets the text from the listSkills array
};


document.getElementById("skills").innerHTML = text;



//Local Storage

/*This code is from the JavaScript and JQuery book by Jon Duckett - chapter 9 on APIs and Local Storage. Also elements are taken from classwork on Local Storage
http://www.w3schools.com/jsref/event_onblur.asp - About onblur events*/
if (localStorage) {

  var txtName = document.getElementById('name'); // Get form elements

  txtName.value = localStorage.getItem('name');  // Elements populated by the localStorage data
  
  alert("Welcome back " + txtName.value);    //Alert the stored value
 
  txtName.addEventListener('blur', function () {    // Data saved on keyup. The blur event listener means that this code is excectued one the user leaves a field 

    localStorage.setItem('name', txtName.value);

  }, false);
 
};



//Calculation

//This code is from http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_number_value2
function costOfHire() {

    var daysHire = parseInt(document.getElementById("days").value);//parseInt() is used to parse a string and then a integer is returned

    document.getElementById("hireTotal").innerHTML = daysHire;

    var rate = 100; //Setting the rate per day

    var total = daysHire * rate; //Working out the total cost

    document.getElementById("hireTotal").innerHTML = ("Cost of hire: " + "&pound" + total); //Displaying the cost of hire using concatenation and the var total

};








//Form Validation

//This code is from http://www.tizag.com/javascriptT/javascriptform.php a website tutorial about form validation
//Form validation - checking that there are values in the fields marked required otherwise an alert message will appear asking to enter values into these fields
function noEmptyField(elem, helperMsg){ //A function called noEmptyField is created
  
  if(elem.value.length == 0){//If the length of the input is equal to 0 then
    
    alert(helperMsg);//An alert will appear telling the user to enter their name
    
    elem.focus(); //elem is a HTML text input
   
    return false;//If no characters are entered an error message appears
 
  };
 
  return true;//Otherwise the form can be submitted

};




//This code is from http://www.tizag.com/javascriptT/javascriptform.php a website tutorial about form validation
//Form validation - limiting the length of characters that can be entered into a field. in this case to limit the characters for the telephone and mobile number fields as they have 11 numbers
function restrictLength(elem, min, max){//A function called restrictlength is created
  
  var input = elem.value;
  
  if(input.length >= min && input.length <= max){ //If the characters entered are more than 1 (declared in the index.html file) and equal to or less than 11
    
    return true;//Then the form can be submitted
  
  }else{//Otherwise
    
    alert("Please enter between " +min+ " and " +max+ " characters without spaces");//An alert will appear asking for the correct amount of characters to be entered
    
    elem.focus();//elem is a HTML text input
    
    return false;//If the correct number of characters are not entered an error message appears
  };

};


//This code is from http://www.tizag.com/javascriptT/javascriptform.php a website tutorial about form validation
//Form validation - checking to see if an email that is entered is valid 
function emailValidation(elem, helperMsg){//A function called emailValidation is created
 
  var emailCharacters = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;//Listing the characters that are needed to create a valid email address. characters@characters.characters
 
  if(elem.value.match(emailCharacters)){//If the characters inputted into the textbox match the correct fromatting of an email address then
    
    return true;//The form can be submitted
 
  }else{//Otherwise
   
    alert(helperMsg);//An alert will appear telling the user to enter a valid email address
    
    elem.focus();//elem is a HTML text input
   
    return false;//If the correct combination of characters are not entered an error message appears
  
  };

};



//JQuery
//This bit of code is used to show the hireForm once the tickbox has been checked. It can be toggled so if the user then unticks the hireForm it will be hidden again
//This code is from http://www.w3schools.com/jquery/eff_toggle.asp
$(document).ready(function(){ //This detects whether the document is ready (Once the DOM is ready). If the document is then the function will be ran   

    $("#hire").click(function(){

        $(".hireForm").toggle();

    });

});