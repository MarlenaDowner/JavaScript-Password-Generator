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

// Function to prompt user for password options
function getPasswordOptions() {
let length = parseInt(
    prompt("How many characters would you like your password to contain?")
  )

  if(isNaN(length) === true){
    alert(`Password length must be provided as number`);
    return;
  }

  if(length < 10) {
    alert(`Password length needs to be at least 10 characters`);
    return;
  }

  if(length > 64) {
    alert(`Password length must be less then 65 characters`);
    return;
  }

  let hasSpecialCharacters = confirm
  ("Click OK to include special characters")

  let hasNumericCharacters = confirm
  ("Click OK to include numeric characters")

  let haslowerCasedCharacters = confirm
  ("Click OK to include lower cased characters")

  let hasUpperCasedCharacters = confirm
  ("Click OK to include upper cased characters")

  if(haslowerCasedCharacters === false &&
    hasUpperCasedCharacters === false &&
    hasSpecialCharacters === false &&
    hasNumericCharacters === false) {
      alert("Must select at least one character type");
      return;
    }

  let passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
    haslowerCasedCharacters: haslowerCasedCharacters,
    hasNumericCharacters: hasNumericCharacters
  }

  return passwordOptions;

}


// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomIndex];

  return randomElement;
}



// Function to generate password with user input.....Button/Genertate Password
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);

  let result = []
  let possibleCharacter = []
  let guarabteedCharacter = []

  if(options.hasSpecialCharacters) {
    possibleCharacter = possibleCharacter + specialCharacters
    guarabteedCharacter.push(getRandom(specialCharacters))
  }

  if(options.haslowerCasedCharacters) {
    possibleCharacter = possibleCharacter + lowerCasedCharacters
    guarabteedCharacter.push(getRandom(specialCharacters))
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacter = possibleCharacter + upperCasedCharacters
    guarabteedCharacter.push(getRandom(upperCasedCharacters))
  }

  if(options.hasNumericCharacters) {
    possibleCharacter = possibleCharacter + numericCharacters
    guarabteedCharacter.push(getRandom(numericCharacters))
  }

  console.log(possibleCharacter);

  for(let index = 0; index < options.length; index++) {
    var generate = getRandom(possibleCharacter);
    console.log(generate);
    result.push(generate);
  }

  console.log(result);

  return result.join("")


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