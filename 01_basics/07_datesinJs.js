//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON);
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2025,11,9)  {month start 0 to 11}
//let myCreatedDate = new Date(2025,11,9,9,15)
//let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-14-2024")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

 newDate.toLocaleString('default', {
    weekday: "long",
    
 })