let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet1 + holdCabinet2);
console.log(holdCabinet1); // it does not alter the original arrays
//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(holdCabinet1.slice(0, 2));
console.log(holdCabinet1); // It doesn't alter the original array
//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log(holdCabinet1.reverse());
console.log(holdCabinet2.sort());
// both rearange the order of the arrays but in different ways
console.log(holdCabinet1.reverse());
console.log(holdCabinet2.sort());
// sort does change the original