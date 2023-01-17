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

  // Check if the number provided is between the minimum length and maximum length specified, if it is not advise the user.

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

  // confirm the number provided sits between the minimum and maximum length

  if (requireLengthOfPassword > minLength || requireLengthOfPassword < maxLength) {
    if (env === "T") {
      console.log("The number input is between the minimum and max length");
    }
  }

  // ask the user what types of characters they require in their password

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

  // work out the amount of characters per type

  numberOfTypes = 0; // variable for keeping track of if there are 1, 2, 3, or 4 different types.

  //LowerCase
  if (requireLowerCase === true) {
    numberOfTypes = numberOfTypes +1;
    if (env ==="T") {
      console.log("Step 1: Number of Types Calculated: "+numberOfTypes);
    }
  }
  //UpperCase
  if (requireUpperCase === true) {
    numberOfTypes = numberOfTypes +1;
    if (env ==="T") {
      console.log("Step 2: Number of Types Calculated: "+numberOfTypes);
    }
  }
  //Numeric
  if (requireNumeric === true) {
    numberOfTypes = numberOfTypes +1;
    if (env ==="T") {
      console.log("Step 3: Number of Types Calculated: "+numberOfTypes);
    }
  }
  //Special
  if (requireSpecial === true) {
    numberOfTypes = numberOfTypes +1;
    if (env ==="T") {
      console.log("Step 4: Number of Types Calculated: "+numberOfTypes);
    }
  }

  // Calculate how many characters there should be per type e.g. LengthOfPassword / NumberOfTypes

  CharactersEachType = 0; // the amount of characters we will have per different type in the password

  // This whole section addresses the part that / may provide a decimal e.g. 2.75, which we could not work with,
  // this works out the remainder, and takes it off the first valid option. 

  CharactersEachType = requireLengthOfPassword % numberOfTypes;

  console.log("Characters Each Type Remainder :"+CharactersEachType);

  CalculatedCharactersEachType = CharactersEachType * numberOfTypes;

  console.log("Calculated Characters for Each Type :"+CalculatedCharactersEachType);
    
    // Uppercase = 0;
    // Lowercase = 0;
    // Numeric = 0;
    // Special = 0;
  
  console.log("Required Password Length :"+requireLengthOfPassword);
  
  if (CalculatedCharactersEachType > requireLengthOfPassword) {

    Remainder =  CalculatedCharactersEachType - requireLengthOfPassword;

    RemovedRemainder = false;
    


    if (requireUpperCase === true) {
      
      if (RemovedRemainder === false) {
        Uppercase = CharactersEachType - Remainder;
        RemovedRemainder = true;
      } else {
        Uppercase = CharactersEachType;
      }
      if (env ==="T") {
        console.log("Uppercase Characters :"+Uppercase);
      }
    }

    if (requireLowerCase === true) {
      
      if (RemovedRemainder === false) {
        Lowercase = CharactersEachType - Remainder;
        RemovedRemainder = true;
      } else {
        Lowercase = CharactersEachType;
      }
    if (env ==="T") {
      console.log("Lowercase Characters :"+Lowercase);
    }
    } 

    if (requireNumeric === true) {
      
      if (RemovedRemainder === false) {
        Numeric = CharactersEachType - Remainder;
        RemovedRemainder = true;
      } else {
        Numeric = CharactersEachType;
      }
    if (env ==="T") {
      console.log("Numeric Characters :"+Numeric);
    }
    } 

    if (requireSpecial === true) {
      
      if (RemovedRemainder === false) {
        Special = CharactersEachType - Remainder;
        RemovedRemainder = true;
      } else {
        Special = CharactersEachType;
      }
    if (env ==="T") {
      console.log("SpecialCharacters :"+Special);
    }
    } 


  }

  // if (env ==="T") {
  //   console.log("=========");
    
  //   console.log("Upper Case Characters :"+Uppercase);
  //   console.log("Lower Case Characters :"+Lowercase);
  //   console.log("Numeric Characters :"+Numeric);
  //   console.log("Special Characters :"+Special);
  //   totalChar = Uppercase + Lowercase + Numeric + Special;
  //   console.log("Total :"+totalChar);
  // }



  
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