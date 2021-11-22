
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // clears saved data
  sessionStorage.clear()
  // select minimum length
  var minimumLength = window.prompt("please select a password length between 8 and 128 characters.");
 if (minimumLength >= 8 && minimumLength < 129 ) {
    var pickedLength = Math.floor(minimumLength);
      sessionStorage.setItem("min", pickedLength)
 }
    else {
      window.alert("Please type a numeric value that corresponds with the number of characters you would like. For example: Enter '34' to select 34 characters");
      writePassword();
    }
  // do you want lowercase?
  var lowercase = window.confirm("Would you like to include LOWERCASE letters?");
  if (lowercase) {
    sessionStorage.setItem("1", "abcdefghijklmnopqrstuvwxyz")
  }
  else {
    sessionStorage.setItem("1", "")
  }
  //do you want uppercase
    var uppercase = window.confirm("Would you like to include UPPERCASE letters?");
    if (uppercase) {
      sessionStorage.setItem("2", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    else {
      sessionStorage.setItem("2", "");
    }
    // do you want numeric values
    var numericValues = window.confirm("Would you like to include Numeric Values?");
    if (numericValues) {
      sessionStorage.setItem("3", "0123456789");
    }
    else {
      sessionStorage.setItem("3", "")
    }
    // do you want special characters
    var specialCharacters = window.confirm("Would you like to include Special Characters?");
    if (specialCharacters) {
      sessionStorage.setItem("4", "!@#$%^&*()");
    }
    else {
      sessionStorage.setItem("4", "");  
    }


//generates results
function generatePassword(){
  var upper = sessionStorage.getItem("1");
  var lower = sessionStorage.getItem("2");
  var numeric = sessionStorage.getItem("3");
  var special = sessionStorage.getItem("4");
  var value = sessionStorage.getItem("min");
  var choice = upper + lower + numeric + special;
  var length = value - 1
var longChoice = choice + choice + choice + choice + choice + choice + choice + choice + choice + choice + choice + choice + choice;

var mixOne = longChoice.split("").sort(
  function(){return 0.5-Math.random()
  }).join("");

var mixTwo = mixOne.split("").sort(
  function(){return 0.5-Math.random()
  }).join("");

var mixThree = mixTwo.split("").sort(
  function(){return 0.5-Math.random()
  }).join("");

let seventh = mixThree[6];
  for (let i = 0; i < length; i++) {
  var answer = seventh += mixThree.substr()[i];
      }
  return answer
};



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


console.log("hello");
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
