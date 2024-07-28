let mydate=new Date()
console.log(mydate)                  //2024-02-25T12:20:49.807Z
console.log(mydate.toString())       //Sun Feb 25 2024 17:50:49 GMT+0530 (India Standard Time)
console.log(mydate.toDateString())   //Sun Feb 25 2024
console.log(mydate.toISOString())     //2024-02-25T12:20:49.807Z
console.log(mydate.toLocaleString())  //25/2/2024, 5:52:46 pm


console.log(typeof mydate) //object

let mycreatedDate=new Date(2024,2,23)
console.log(mycreatedDate.toLocaleString()); //month starts from 0 in js
let mycreatedDate2=new Date(2024,2,23,5,3)
console.log(mycreatedDate2.toLocaleString());

let mycreatedDate3=new Date("01-14-24")

let mytimeStamp=Date.now()
console.log(mytimeStamp);  //1708864150172 comes in millisec
console.log(Math.floor(Date.now()/1000));  //to convert into seconds

let anydate=new Date()
console.log(anydate);
console.log(anydate.getMonth());