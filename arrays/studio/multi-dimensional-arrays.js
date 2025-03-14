const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

let cabinetChoice = 0;
let itemChoice = "";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
    let foodCabinet = food.split(",").sort();
    let equipmentCabinet = equipment.split(",").sort();
    let petsCabinet = pets.split(",").sort();
    let sleepAidsCabinet = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
    let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet];
    // console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
    // cabinetChoice = input.question("Please Select a Cabinet (0. Food, 1. Equipment, 2. Pets, 3. Sleep Aids): ");
    
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
    // if (cabinetChoice > cargoHold.length-1){
    //     console.log("ERROR SELECTED DRAWER DOESN'T EXIST");
    // }else{
    //     console.log(cargoHold[`${cabinetChoice}`]);
    // }
    
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
    cabinetChoice = input.question("Please select a cabinet (0. Food, 1. Equipment, 2. Pets, 3. Sleep Aids): ");

    if (cabinetChoice > cargoHold.length-1){
        console.log("ERROR SELECTED DRAWER DOESN'T EXIST");
    }else{
        console.log(cargoHold[`${cabinetChoice}`]);

        itemChoice = input.question("Please select an item: ");

        if (cargoHold[`${cabinetChoice}`].includes(itemChoice)) {
            console.log(`Cabinet ${cabinetChoice} DOES contain ${itemChoice}.`);

        }else{
            console.log(`Cabinet ${cabinetChoice} DOES NOT contain ${itemChoice}.`);
        }

    }