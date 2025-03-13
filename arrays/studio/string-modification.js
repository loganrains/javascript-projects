const input = require('readline-sync');
let string = "LaunchCode";
let pigLatinString = "";
let stringLength = 0;

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

    // Answer
    // pigLatinString = string.slice(3).concat(string.slice(0, 3));
    // console.log(pigLatinString);

//Use a template literal to print the original and modified string in a descriptive phrase.

    // Answer
    // console.log(`In our secret language "${string}" becomes "${pigLatinString}"`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

    // Answer
    // string = input.question("welcome to the Pig Latin Encoder. Please select a word to encode: ");
    // index = input.question("Now please select how many characters you would like to shuffle: ");

    // pigLatinString = string.slice(`${index}`).concat(string.slice(0, `${index}`));
    // console.log(`In our secret language "${string}" becomes "${pigLatinString}"`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

    // Answer
    string = input.question("Welcome to the Pig Latin Encoder. Please select a word to encode: ");
    stringLength = string.length;
    index = input.question("Now please select how many characters you would like to shuffle: ");
    
    if(stringLength < index) {
        console.log("Hey silly goose, you picked a larger number than there are characters in the word. I guess I'll have to decide for you. I choose 3 characters!");

        pigLatinString = string.slice(3).concat(string.slice(0, 3));
        console.log(pigLatinString);
    } 
    else {
        pigLatinString = string.slice(`${index}`).concat(string.slice(0, `${index}`));
        console.log(`In our secret language "${string}" becomes "${pigLatinString}"`);
    }