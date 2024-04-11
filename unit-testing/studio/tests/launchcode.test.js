// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

 test ('should have key called oganization with the value of nonprofit', function () {
    expect(launchcode.organization).toEqual('nonprofit');
 })
 test ('should have key called executiveDirector with the value of Jeff', function () {
  expect(launchcode.executiveDirector).toEqual('Jeff');
 })
 test ('should have key called percentageCoolEmployees with the value of 100', function () {
  expect(launchcode.percentageCoolEmployees === 100).toEqual(true);
 })
 test ('should have key called programsOffered that stores an array of "Web Development", "Data Analysis", and "Liftoff"', function () {
  expect(launchcode.programsOffered.length).toBe(3);
  expect(launchcode.programsOffered[0]).toBe("Web Development");
  expect(launchcode.programsOffered[1]).toBe("Data Analysis");
  expect(launchcode.programsOffered[2]).toBe("Liftoff");
 })
 test ('should have key called percentageCoolEmployees with the value of 100', function () {
  expect(launchcode.percentageCoolEmployees === 100).toEqual(true);
 })
 test ('should have a method called launchOutput() which returns a string', function () {
  expect(typeof(launchcode.launchOutput)).toEqual("function");
  expect(typeof(launchcode.launchOutput(Math.random()*100))).toEqual("string");
 })
 test ('When launchOutput() is passed a number that is ONLY divisible by 2, return "Launch!"', function () {
  expect(launchcode.launchOutput(2)).toEqual("Launch!");
  expect(launchcode.launchOutput(4)).toEqual("Launch!");
  expect(launchcode.launchOutput(8)).toEqual("Launch!");
 })
 test ('When launchOutput() is passed a number that is ONLY divisible by 3, return "Code!"', function () {
  expect(launchcode.launchOutput(3)).toEqual("Code!");
  expect(launchcode.launchOutput(9)).toEqual("Code!");
  expect(launchcode.launchOutput(21)).toEqual("Code!");
 })
 test ('When launchOutput() is passed a number that is ONLY divisible by 5, return "Rocks!"', function () {
  expect(launchcode.launchOutput(5)).toEqual("Rocks!");
  expect(launchcode.launchOutput(25)).toEqual("Rocks!");
  expect(launchcode.launchOutput(35)).toEqual("Rocks!");
 })
 test ('When launchOutput() is passed a number that is divisible by 2 & 3 return "LaunchCode!"', function () {
  expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
  expect(launchcode.launchOutput(12)).toEqual("LaunchCode!");
  expect(launchcode.launchOutput(18)).toEqual("LaunchCode!");
 })
 test ('When launchOutput() is passed a number that is divisible by 3 & 5 return "Code Rocks!"', function () {
  expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
  expect(launchcode.launchOutput(45)).toEqual("Code Rocks!");
  expect(launchcode.launchOutput(75)).toEqual("Code Rocks!");
 })
 test ('When launchOutput() is passed a number that is divisible by 2 & 5 return "Launch Rocks!"', function () {
  expect(launchcode.launchOutput(10)).toEqual("Launch Rocks!");
  expect(launchcode.launchOutput(20)).toEqual("Launch Rocks!");
  expect(launchcode.launchOutput(40)).toEqual("Launch Rocks!");
 })
 test ('When launchOutput() is passed a number that is divisible by 2, 3, & 5 return "LaunchCode Rocks!"', function () {
  expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
  expect(launchcode.launchOutput(60)).toEqual("LaunchCode Rocks!");
  expect(launchcode.launchOutput(90)).toEqual("LaunchCode Rocks!");
 })
 test ('When launchOutput() is passed a number that is not divisible by 2, 3, & 5 return "Rutabagas! That doesnt work."', function () {
  expect(launchcode.launchOutput(0)).toEqual("Rutabagas! That doesn't work.");
  expect(launchcode.launchOutput(1)).toEqual("Rutabagas! That doesn't work.");
  expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
 })
});