// Declare and assign the variables below
let nameOfShuttle = "Determination";
let shuttleSpeed = 17500;
let marsKilometer = 225000000;
let moonKilometer = 384400;
let milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(nameOfShuttle));
console.log(typeof(shuttleSpeed));
console.log(typeof(marsKilometer));
console.log(typeof(moonKilometer));
console.log(typeof(milesPerKilometer));


// Calculate a space mission below
let marsMiles = marsKilometer * milesPerKilometer;

let hoursToMars = marsMiles / shuttleSpeed;

let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(nameOfShuttle, "will take", daysToMars,"days to reach Mars.");

// Calculate a trip to the moon below
let daysToMoon =  ((moonKilometer * milesPerKilometer) / shuttleSpeed) / 24;

// Print the results of the trip to the moon below
console.log(nameOfShuttle, "will take", daysToMoon,"days to reach the moon.");


/*




console.log("Coding Rocks"); */