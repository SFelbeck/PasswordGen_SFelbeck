function generatePassword() {
  // declares strings that will be used as character values
  var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
  var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var special = "!@,=+-`~#$%&*?";
  var numbers = "1234567890"

  // Initial prompt determining password length values
  let passLength = prompt("How long would you like your password? (min 8, max 20)");
  
  // blank variables that will store final strings and final randomized password
  var passString = "";
  var results = "";
  
  // While loop that will ask user for a password length until valid value is given
  while(passLength < 8 || passLength > 20){
    alert = "Invalid password length"
    passLength = prompt ("How long would you like your password? (min 8, max 20)");
  }

  // confirm events that determine if password includes uppercase of special characters
  var chooseUpper = confirm("Include uppercase characters?");
  var chooseSpecial = confirm("Include special characters?");

  // if statement that determines what kind of string will be used for result with lowercase letters used as a default
  if (chooseUpper && chooseSpecial) {
    passString += lowerCase.concat(upperCase, special, numbers);
  } else if (!chooseUpper && !chooseSpecial) {
    passString += lowerCase;
  } else if (chooseUpper && !chooseSpecial) {
    passString += lowerCase.concat(upperCase);
  }else if (!chooseUpper && chooseSpecial) {
    passString += lowerCase.concat(special, numbers);
  }else {
    results = ("invalid password values")
  }

  // for loop that randomizes each character until total number of characters used is equal to passLength
  for(var i = 0; i < passLength; i++){
    results += passString.charAt(Math.floor(Math.random() * passString.length));
  }

  // returns results for display
  return results;
}



// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
