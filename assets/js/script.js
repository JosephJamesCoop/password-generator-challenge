
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  // select minimum length
  var minimumLength = window.prompt("please select a password length between 8 and 128 characters.");
  if (minimumLength >= 8 && minimumLength < 129) {
    var value = Math.floor(minimumLength);
  }
  else {
    window.alert("Please type a numeric value that corresponds with the number of characters you would like. For example: Enter '34' to select 34 characters");
    writePassword();
  }
  // do you want lowercase?
  var lowercase = window.confirm("Would you like to include LOWERCASE letters?");
  if (lowercase) {
    var one = "abcdefghijklmnopqrstuvwxyz"
    var lower = one.split("").sort(
      function () {
        return 0.5 - Math.random()
      }).join("");
    var oneOne = lower[4]
    var lowerValue = "It will include Lowercase Charcters. "
  }
  else {
    var lower = ""
    var oneOne = ""
    var lowerValue = "It will NOT include Lowercase Charcters. "
  }
  //do you want uppercase
  var uppercase = window.confirm("Would you like to include UPPERCASE letters?");
  if (uppercase) {
    var two = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var upper = two.split("").sort(
      function () {
        return 0.5 - Math.random()
      }).join("");
    var twoOne = upper[4]
    var upperValue = "It will include Uppercase Charcters. "
  }
  else {
    var upper = ""
    var twoOne = ""
    var upperValue = "It will NOT include Uppercase Charcters. "
  }
  // do you want numeric values
  var numericValues = window.confirm("Would you like to include Numeric Values?");
  if (numericValues) {
    var three = "0123456789"
    var numeric = three.split("").sort(
      function () {
        return 0.5 - Math.random()
      }).join("");
    var threeOne = numeric[4]
    var numericValue = "It will include Numeric Values. "
  }
  else {
    var numeric = ""
    var threeOne = ""
    var numericValue = "It will NOT include Numeric Values. "
  }
  // do you want special characters
  var specialCharacters = window.confirm("Would you like to include Special Characters?");
  if (specialCharacters) {
    var four = "!@#$%^&*()"
    var special = four.split("").sort(
      function () {
        return 0.5 - Math.random()
      }).join("");
    var fourOne = special[4]
    var specialValue = "It will include Special Charcters. "
  }
  else {
    var fourOne = ""
    var special = ""
    var specialValue = "It will NOT include Special Charcters. "
  };
  // combines all charcters in charter selected option
  var choice = lower + upper + numeric + special;
  if (choice.length > 1) {
    var confirmSelection = window.confirm("Your password will be " + minimumLength + " charcters long. " + lowerValue + upperValue + numericValue + specialValue + "Does this look correct?");
    if (confirmSelection) {
      window.alert("Thank you for your confirmation. Here is your password!")
    }
    else {
      writePassword();
    };
  }
  else {
    window.alert("Please select at least one option.")
    writePassword();
  };
  //generates results
  function generatePassword() {
    //collects one character from each item slected to guarantee one of each
    var quantity = oneOne + twoOne + threeOne + fourOne

    //selects number of charcters slected then adds all additional till number chosen is reached.
    var length = value - 1 - quantity.length
    // guartees you can have 128 charcters in your passcode. Also allows for individual charcters to be used multiple times.
    var longChoice = choice + choice + choice + choice + choice + choice + choice + choice + choice + choice + choice + choice + choice;
    //shuffles all selectsions 3 times
    var mixOne = longChoice.split("").sort(
      function () {
        return 0.5 - Math.random()
      }).join("");

    var mixTwo = mixOne.split("").sort(
      function () {
        return 0.5 - Math.random()
      }).join("");

    var mixThree = mixTwo.split("").sort(
      function () {
        return 0.5 - Math.random()
      }).join("");
    //selects quantity selected - however many choices were made
    let random = mixThree[66];
    for (let i = 0; i < length; i++) {
      var mixed = random += mixThree.substr()[i];
    }
    //generates one of each selction plus random then mixes again
    var shuffle = mixed + quantity;
    var answer = shuffle.split("").sort(
      function () {
        return 0.5 - Math.random()
      }).join("");
    // returns the password with the specified qualifications
    return answer
  };
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
