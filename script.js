//Assignment code
var generateBtn = document.querySelector("#generate");

// Special Characters
const speCha = "!@#$%^&*()";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Event Listener
generateBtn.addEventListener("click", writePassword);

//Prompt that come up after click generate password 
function generatePassword() {
  var passwordLength = prompt("Enter how long you want this to be");
  var numbers = confirm("Do you want numbers in new password?");
  var lowerCases = confirm("Do you want lower case letters in new password?");
  var upperCases = confirm("Do you want upper case letters in new password?");
  var special = confirm("Do you want special characters in new password?");
  var minimumCount = 0;

  var minNum = "";
  var minLow = "";
  var minUp = "";
  var minSpe ="";

  //Generator 
  var functionArray = {
    getNum: function(){
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowCas: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97)); 
    },

    getUpCas: function(){
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpeCha: function(){
      return speCha[Math.floor(Math.random() * speCha.length)]
    }
  }
};

//Make sure selected is good

if (numbers === true) {
  minNum = functionArray.getNum();
  minimumCount++;
}

if (lowerCases === true) {
  minLow = functionArray.getLowCas();
  minimumCount++;
}

if (upperCases === true) {
  minUp = functionArray.getUpCas();
  minimumCount++;
}

if (special === true){
  minSpe = functionArray.getSpeCha();
  minimumCount++;
}

//Empty var for loop
var ranPasGen = "";

//loop to get char
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var ranNumPic = Math.floor(Math.random() * 4);
  ranPasGen += ranNumPic;

} 

//adding char to password
ranPasGen += minNum;
ranPasGen += minLow;
ranPasGen += minUp;
ranPasGen += minSpe;

return ranPasGen;