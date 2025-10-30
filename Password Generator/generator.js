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
    let password = "";
    let passwordLength = getLength();
    let pswdArray = [passwordLength];
    //filling the password array with lowercase characters by default
    for (let i=0; i < passwordLength; i++){
        pswdArray[i] = lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)];
    }
    //adding random number of uppercase letters (must be at least 1 but less than length-1)
    let includeUppercase = getIncludeUppercase();
    let numOfUppercase = Math.random() * (passwordLength - 1) + 1;
    if (includeUppercase){
        for (let i=0; i < numOfUppercase; i++){
            let randomIndex = Math.floor(Math.random() * passwordLength);
            pswdArray[randomIndex] = uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)];
        }
    }
    let includeNumbers = getIncludeNumbers();
    let numOfNumbers = Math.random() * (passwordLength - 2) + 1;
    if (includeNumbers){
        for (let i=0; i < numOfNumbers; i++){
            let randomIndex = Math.floor(Math.random() * passwordLength);
            pswdArray[randomIndex] = numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
        }   
    }
    let includeSpecChars = getIncludeSpecChars();
    let numOfSpecChars = Math.random() * (passwordLength - 3) + 1;
    if (includeSpecChars){
        for (let i=0; i < numOfSpecChars; i++){
            let randomIndex = Math.floor(Math.random() * passwordLength);
            pswdArray[randomIndex] = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        }   
    }
}