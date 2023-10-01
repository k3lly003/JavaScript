//Javascript Date methods
//constructors
const date = new Date();
console.log(date); //Thu Jan 01 2022 13:56:47 GMT+08

new Date(1682452849453);

new Date("2023-04-25");

new Date("2023-04-25T01:10:00");

new Date("2023, 3, 25, 1, 0, 0, 0");

//Get Method
date.getFullYear(); // 2023

date.getMonth(); // 10

date.getDate(); // 1

date.getDay(); // 7

date.getHours(); //  10

date.getMinutes(); // 58

date.getseconds(); // 45

date.getMilliSeconds(); // 65

date.getTime(); // 1682455363

date.getTimezoneOffset(); //-120
