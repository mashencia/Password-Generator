//arrays containing the characters that can be used in the password (customizable by the user)
const lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z"];
const uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y", "Z"];
const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

//function that allows the user to choose password length from given options
function getLength(){
    let length = document.getElementById("length").value;
    return length; //the length options will be 8+, 12+, 16+
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
    let includeSpecChars = document.getElementById("specChars").checked;
    return includeSpecChars;
}

//function for random integer generation
//using crypto API is safer instead of Math.random()
function randomInt(maximum){
    let array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % maximum;
}

//function that will generate the passwords based on user preferences
function generatePassword(){

    let password = ""; //string for the final password
    let passwordLength = getLength(); //getting the desired password length from user
    let pswdArray = new Array(passwordLength); //array that will be used as temp to build the password
    let allowedChars = []; //array that will contain all characters allowed based on user preferences

    //filling the password array with lowercase characters by default
    //default option that will ensure a password is generated even if no other options are selected
    for (let i=0; i < passwordLength; i++){
        pswdArray[i] = lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)];
    }
    
    //if users selects certain character types, adding them to the allowed characters set
    if(getIncludeUppercase())allowedChars = allowedChars.concat(uppercaseCharacters);
    if(getIncludeNumbers())allowedChars = allowedChars.concat(numberCharacters);
    if(getIncludeSpecChars())allowedChars = allowedChars.concat(specialCharacters);

    //now the set is filled with allowed characters, but prior at least one of each selected is added
    //this ensures that the password meets the user criteria
    if(getIncludeUppercase()){
        //since the password will be shuffled, adding to first index 
        pswdArray[0] = uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)];
    }
    if(getIncludeNumbers()){
        //adding to second index
        pswdArray[1] = numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
    }
    if(getIncludeSpecChars()){
        //adding to third index
        pswdArray[2] = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
    //from indecies > 3, filling the password array with rnadom chars from allowed set
    for(let i = 4; i< passwordLength; i++){
        //getting a random index from allowed characters set
        let index = randomInt(allowedChars.length);
        //adding the allowed character at random index to the password
        pswdArray[i] = allowedChars[index];
    }
    //shuffling the password using Fisher-Yates alg.
    for(let i = pswdArray.length - 1; i > 0; i--){
        let j = Math.random() * (i + 1);
        //swapping elements at indecies i and j
        [pswdArray[i], pswdArray[j]] = [pswdArray[j], pswdArray[i]];
    }
}
