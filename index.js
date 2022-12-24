// let myAge = 25;
// let yourAge = 30;   
// let ourAge = myAge + yourAge;
// console.log(yourAge);

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 100;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 25;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 70;
// console.log(bonusPoints);

// function boolean() {
//     console.log(32+5);
// }   
// boolean();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLaps() {
   
//     let allLaps = lap1 + lap2 + lap3;
// console.log(allLaps);
// }

// console.log(totalLaps());

// let lapCompleted = 0

// function incrementLap() {
// lapCompleted = lapCompleted + 1
    
// }
//  incrementLap()
//  incrementLap()
//  incrementLap()

// console.log(lapCompleted)

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)


 function increment() {
    count = count + 1
    countEl.textContent = count
     
 }

function save() {
let countStr = count + " - "
saveEl.textContent += countStr
    console.log(count)
 }

// let username = "Per"

// let Message = "You have 3 new notifications"

// let messageToUser = Message + ", " + username + "!"

// console.log(messageToUser)

// let name = "Tobi Rino"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting) 