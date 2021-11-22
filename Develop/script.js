
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // clears saved data
  sessionStorage.clear()
  // select minimum length
  var minimumLength = window.prompt("please select a password length between 8 and 128 characters.");
  if (minimumLength >= 8 && minimumLength < 129) {
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
    var one = "abcdefghijklmnopqrstuvwxyz"
    var lower = one.split("").sort(
      function () {
        return 0.5 - Math.random()
      }).join("");
    sessionStorage.setItem("1", lower)
    var oneOne = lower[4]
  }
  else {
    sessionStorage.setItem("1", "")
    var oneOne = ""
  }
  //do you want uppercase
  var uppercase = window.confirm("Would you like to include UPPERCASE letters?");
  if (uppercase) {
var two = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var upper = two.split("").sort(
      function () {
        return 0.5 - Math.random()
      }).join("");
    sessionStorage.setItem("2", upper);
      var twoOne = upper[4]
  }
  else {
    sessionStorage.setItem("2", "");
    var twoOne = ""
  }
  // do you want numeric values
  var numericValues = window.confirm("Would you like to include Numeric Values?");
  if (numericValues) {
var three = "0123456789"
    var numeric = three.split("").sort(
      function () {
        return 0.5 - Math.random()
      }).join("");
    sessionStorage.setItem("3", numeric);
    var threeOne = numeric[4]
  }
  else {
    sessionStorage.setItem("3", "")
    var threeOne =""
  }
  // do you want special characters
  var specialCharacters = window.confirm("Would you like to include Special Characters?");
  if (specialCharacters) {
var four = "!@#$%^&*()"
    var special = four.split("").sort(
      function () {
        return 0.5 - Math.random()
      }).join("");
    sessionStorage.setItem("4", special);
      var fourOne = special[4]
  }
  else {
    sessionStorage.setItem("4", "");
    var fourOne = ""
  }


  //generates results
  function generatePassword() {
    var first = sessionStorage.getItem("1");
    var second = sessionStorage.getItem("2");
    var third = sessionStorage.getItem("3");
    var fourth = sessionStorage.getItem("4");
    var value = sessionStorage.getItem("min");

    
    // first = ("" || null)
    // if (first)
    // console.log()
      
    //   lower[3]
    // var second = upper[3]
    // var third = numeric[3]
    // var fourth = special[3]


    console.log(fourOne) 

    console.log(third) 
    console.log(fourth) 

    var quantity = oneOne + twoOne + threeOne + fourOne;

    console.log(quantity)

    var choice = first + second + third + fourth;
    console.log(choice) 

    
    var length = value - 1 - quantity.length

    var longChoice = choice + choice + choice + choice + choice + choice + choice + choice + choice + choice + choice + choice + choice;

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

    let radnom = mixThree[66];
    for (let i = 0; i < length; i++) {
      var mixed = radnom += mixThree.substr()[i];
    }



    var shuffle = mixed + first + second + third + fourth;






    var answer = shuffle.split("").sort(
      function () {
        return 0.5 - Math.random()
      }).join("");


    return answer
  };



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
