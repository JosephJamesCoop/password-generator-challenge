
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  sessionStorage.clear()
    var minimumLength = window.prompt("type in a MINIMUM character length for your password; 4, 8, 12, 16, or 20"
    );
    switch (minimumLength) {
      case "4":
        sessionStorage.setItem("min", "4")
        // maximumPasswordLength();
      case "8":
        sessionStorage.setItem("min", "8")
        // maximumPasswordLength();
      case "12":
        sessionStorage.setItem("min", "12")
        // maximumPasswordLength();
      case "16":
        sessionStorage.setItem("min", "16")
        // maximumPasswordLength();
      case "20":
        sessionStorage.setItem("min", "20")
        // maximumPasswordLength();
        break;
      default:
        window.alert("Please type a numeric value that corresponds with the listed minimum number of characters you would like. For example: Enter '4' to select 4 characters");
        writePassword();
        break;
    }





    
function generatePassword(){
  return "40"
};



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


console.log("hello");
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
