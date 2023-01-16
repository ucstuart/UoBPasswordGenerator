// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// setting minimum and maximum values, providing a single place to edit if we wished to change the parameters. 

const minLength = 10;
const maxLength = 64;

// Use of env variable to define Testing or Production Environment to allow for effective debugging.

var env = "T"; // sets the environment to T for Testing or P for Production

// Function to prompt user for password options
function getPasswordOptions() {

  var requireLengthOfPassword = prompt("What length of Password do you wish to Generate between 10 - 64 Characters?");

  // Convert requireLengthOfPassword to integer

  if (env ==="T") {
    console.log("Length of Password as Supplied :"+requireLengthOfPassword);

  }

  requireLengthOfPassword = parseInt(requireLengthOfPassword);

  if (env ==="T") {
    console.log("Converted to Integer Length of Password :"+requireLengthOfPassword);
  }

  // validate the input

  // using the isNan function to identify the supplied information is not a number this also covers if the entry is BLANK/NULL.
  if (isNaN(requireLengthOfPassword)) {
    if (env ==="T") {
      console.log("The user has not entered a number for the password length, they entered :"+requireLengthOfPassword);
    }
    alert("You have not entered a Number, try again!");
    return;

  }

  if (requireLengthOfPassword < minLength || requireLengthOfPassword > maxLength) {
    
    // Testing Debug Code
    if (env === "T") {
      console.log("Minimum Expected :"+minLength);
      console.log("Maximum Expected :"+maxLength);
      console.log("Password Length out of Parameters either Less than / Or Greater Than, Number Entered: "+requireLengthOfPassword);
    }

    // Display alert messages if the password is below or above the minimum / maximum requirements. 

    if (requireLengthOfPassword <10) {
      alert ("You have entered a number less than the minimum requirement, try again");
      return;
    }

    if (requireLengthOfPassword >64) {
      alert ("You have entered a number greater than the Maximum requirement, try again");
      return;
    }

  }


  var requireLowerCase = confirm("Do you require Lower Case Characters?");
  var requireUpperCase = confirm("Do you require Uppoer Case Characters?");
  var requireNumeric = confirm("Do you require Numeric Characters?");
  var requireSpecial = confirm("Do you require Special Characters?");

  // Output testing information to the console if we are in the Testing mode
  if (env ==="T") {
    console.log("Length of Password: "+requireLengthOfPassword);6
    console.log("Lower Case: "+requireLowerCase);
    console.log("Upper Case: "+requireUpperCase);
    console.log("Numeric :"+requireNumeric);
    console.log("Special :"+requireSpecial);
  }





  
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



// Testing Code not to be used in production

if (env === "T") {

  // call the following functions to Test

  getPasswordOptions();  

}