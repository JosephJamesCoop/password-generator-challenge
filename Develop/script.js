
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
      case "8":
        sessionStorage.setItem("min", "8")
      case "12":
        sessionStorage.setItem("min", "12")
      case "16":
        sessionStorage.setItem("min", "16")
      case "20":
        sessionStorage.setItem("min", "20")
        break;
      default:
        window.alert("Please type a numeric value that corresponds with the listed minimum number of characters you would like. For example: Enter '4' to select 4 characters");
        writePassword();
        break;
    }
    var maximumLength = window.prompt("Type in a MAXIMUM character length for your password; 40, 60, 80, 100, or 128"
  );
  switch (maximumLength) {
    case "40":
      sessionStorage.setItem("max", "40")
    case "60":
      sessionStorage.setItem("max", "60")
    case "80":
      sessionStorage.setItem("max", "80")
    case "100":
      sessionStorage.setItem("max", "100")
    case "128":
      sessionStorage.setItem("max", "128")
    default:
      sessionStorage.setItem("max", "128")
      break;
  }
  var lowercase = window.confirm("Would you like to include LOWERCASE letters?");
  if (lowercase) {
    sessionStorage.setItem("1", "abcdefghijklmnopqrstuvwxyz")
  }
  else {
    sessionStorage.setItem("1", "")
  }
    var uppercase = window.confirm("Would you like to include UPPERCASE letters?");
    if (uppercase) {
      sessionStorage.setItem("2", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    else {
      sessionStorage.setItem("2", "");
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
