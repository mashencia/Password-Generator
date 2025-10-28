//arrays containing the characters that can be used in the password (customizable by the user)
const lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z"];
const uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y", "Z"];
const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

//function that allows the user to choose password length from given options
function getLength(){
    let length = document.getElementById("length").value;
    return length;
}

//functinos that allows thre user to choose to include/exclude uppercase letters, numbers and special characters
function getIncludeUppercase(){
    let includeUppercase = document.getElementById("uppercase").checked;
    return includeUppercase;
}

function getIncludeNumbers(){
    let includeNumbers = document.getElementById("numbers").checked;
    return includeNumbers;
}

function getIncludeSpecChars(){
    let includeSpecChars = document.getElementById("specchars").checked;
    return includeSpecChars;
}

//function that will generate the passwords based on user preferences
function generatePassword(){
    let passwordLength = getLength();
    let includeUppercase = getIncludeUppercase();
    let includeNumbers = getIncludeNumbers();
    let includeSpecChars = getIncludeSpecChars();

}