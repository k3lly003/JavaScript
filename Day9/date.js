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

//Conversions

//Tue Apr 25 2023 21:27:35 GMT+0200
date.toString(); // 21:27:23   GMT+0200

date.toDateString(); // Tue Apr 25 2023   GMT+0200

//2023-04-25T19:27:35.363Z
date.toIDOSString();

date.toLocaleString(); // 9:27:35 PM

date.toLocaleTimeString(); // 9:27:35 PM

date.getTime(); // 1682450855363

//Set Methods
date.setFullYear(2023); // sets Year

date.setMonth(11); // sets Month

date.setDate(1); // sets date

date.setHours(20); // sets hour

date.setSeconds(20); // sets seconds

date.setMilliseconds(20); // sets ms

//number of ms from Jan 1st 1970

date.setTime(1681051613351);
