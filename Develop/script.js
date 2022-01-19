//user input variables
var passwordLength;
var lowerCase;
var upperCase;
var numericChar;
var specialChar;
var criteria;

//password variable values 
lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numbers = [1,2,3,4,5,6,7,8,9];
characters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", ",", ".", ":", ";", ">", "<", "~"]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//password generator function
function generatePassword(){
 //first we need to prompt the user for all criteria of the password they need 
  passwordLength = window.prompt("What is the length of your password? Choose a number greater than 8 and no more than 128 characters"); //prompt user for password length
  if (!passwordLength){
    window.alert("Please enter a value"); // if the user does not input anything it will alert them to enter a value
  } else if (passwordLength < 8 || passwordLength > 126) {
    window.alert("Please choose a number between 8 and 128"); // if the value does not meet the requirements it will ask them to enter the length again
  } else {
    lowerCase = window.confirm("Do you want to include lower case characters?"); // if the user inputs the correct length then if will prompt user for criteria
    upperCase = window.confirm("Do you want to include upper case characters?"); // if the user inputs the correct length then if will prompt user for criteria
    numericChar = window.confirm("Do you want to include numeric characters?"); // if the user inputs the correct length then if will prompt user for criteria
    specialChar = window.confirm("Do you want to include special characters?"); // if the user inputs the correct length then if will prompt user for criteria
  }
  
  //once the criteria is chosen, then we need to put all wanted criteria into a variable 
  if (!lowerCase && !upperCase && !numericChar && !specialChar){
    window.alert("You must select at least 1 criteria for your password") // if the user chose no criteria they will be alerted to choose a criteria 
  } else if (lowerCase && upperCase && numericChar && specialChar){

    criteria = lowerAlpha.concat(upperAlpha, numbers, characters); // if they choose all 4 criteria then those four options will be stored under criteria variable
  
  } else if (lowerCase && upperCase && numericChar){ // if they chose only 3 critieria then those options will be stored under criteria variable 
  
    criteria = lowerAlpha.concat(upperAlpha, numbers);
  
  } else if (lowerCase && upperCase && specialChar){ // if they chose only 3 critieria then those options will be stored under criteria variable 
  
    criteria = lowerAlpha.concat(upperAlpha, characters);
  
  } else if (lowerCase && numericChar && specialChar){ // if they chose only 3 critieria then those options will be stored under criteria variable 
  
    criteria = lowerAlpha.concat( numbers, characters);
  
  }else if (upperCase && numericChar && specialChar){ // if they chose only 3 critieria then those options will be stored under criteria variable 
  
    criteria = upperAlpha.concat( numbers, characters);
  
  } else if (lowerCase && upperCase){ // if they chose only 2 criteria then those options will be stored under criteria variable 

    criteria = lowerAlpha.concat( upperAlpha);

  } else if (lowerCase && numericChar){  // if they chose only 2 criteria then those options will be stored under criteria variable 

    criteria = lowerAlpha.concat(numbers);
    
  } else if (lowerCase && specialChar){  // if they chose only 2 criteria then those options will be stored under criteria variable 

    criteria = lowerAlpha.concat(characters);

  } else if (upperCase && numericChar){  // if they chose only 2 criteria then those options will be stored under criteria variable 

    criteria = upperAlpha.concat(numbers);

  } else if (upperCase && specialChar){  // if they chose only 2 criteria then those options will be stored under criteria variable 

    criteria = upperAlpha.concat(characters);

  } else if (numericChar && specialChar){  // if they chose only 2 criteria then those options will be stored under criteria variable 

    criteria = numbers.concat(characters);

  } else if (lowerCase){ // if they chose only 1 criteria then those options will be stored under criteria variable

    criteria = lowerAlpha;
    
  } else if (upperCase){ // if they chose only 1 criteria then those options will be stored under criteria variable

    criteria = upperAlpha;

  } else if (numericChar){ // if they chose only 1 criteria then those options will be stored under criteria variable

    criteria = numbers;
    
  } else if (specialChar){ // if they chose only 1 criteria then those options will be stored under criteria variable

    criteria = characters;
    
  }

  var password = []; // create a password variable that will store the genereted password 

  for (var i = 0; i < passwordLength; i++){ //for loop that iterates based on the password length that the user inputs 
    var randomVariable = criteria[Math.floor(Math.random() * criteria.length)]; //random variable chosen from the criteria array using the math.random function
    password.push(randomVariable); // whatever value that returns to randomVariable will be pushed into the password array.
  }

 
  var psString = password.join(""); // this is done to remove the commas that were seen in my password after it was generated
  return psString;



}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 



