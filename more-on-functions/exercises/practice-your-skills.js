//Create an anonymous function and set it equal to a variable.
let practice = function (Arg) {
    if(typeof(Arg) === "number"){
        return Arg * 3;
    } else if (typeof(Arg) === "string"){
        return "ARRR";
    }
    return Arg;
};
/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

// for (let i = 0; i < arr.length; i++){
//     console.log(practice(arr[i]));
// }

let mappedArr = arr.map(practice);

console.log(mappedArr);
