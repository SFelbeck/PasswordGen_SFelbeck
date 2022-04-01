function generatePassword() {
  
  var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
  var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var special = "!@,=+-`~#$%&*?";
  var numbers = "1234567890"

  let passLength = prompt("How long would you like your password? (min 8, max 20)");
  
  var passArray = "";
  var results = "";
  
  while(passLength < 8 || passLength > 20){
    alert = "Invalid password length"
    passLength = prompt ("How long would you like your password? (min 8, max 20)");
  }

  var chooseUpper = confirm("Include uppercase characters?");
  var chooseSpecial = confirm("Include special characters?");

  if (chooseUpper && chooseSpecial) {
    passArray += lowerCase.concat(upperCase, special, numbers);
    console.log(passArray);
  } else if (!chooseUpper && !chooseSpecial) {
    passArray += lowerCase;
    console.log(passArray);
  } else if (chooseUpper && !chooseSpecial) {
    passArray += lowerCase.concat(upperCase);
    console.log(passArray);
  }else if (!chooseUpper && chooseSpecial) {
    passArray += lowerCase.concat(special, numbers);
    console.log(passArray);
  }else {
    results = ("invalid password values")
  }

  for(var i = 0; i < passLength; i++){
    results += passArray.charAt(Math.floor(Math.random() * passArray.length));
  }
  console.log(results);

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
