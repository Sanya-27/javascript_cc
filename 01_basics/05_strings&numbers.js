const name="sanya"
const repcount=50
//console.log(name +repcount+ "value"); //outdated, don't use

//string interpolation:
console.log(`hello my name is ${name} and my repo count is ${repcount}`);

const str=new String('sanyaa')
console.log(str[0]); //s
console.log(str.__proto__); //{}
console.log(str.length); //6
console.log(str.toUpperCase());
console.log(str.charAt(2));
console.log(str.indexOf('y'));


//************NUMBERS *******************/

const num=100
const num2= new Number(100);
console.log(num2.toString()); //value:100, type:string
console.log(num.toFixed(1));   //after decimal 1 digit only


/****************MATH *********************/

console.log(Math);  //Object [Math] {}
console.log(Math.abs(-4)); 
console.log(Math.round(4.6)); 
console.log(Math.floor(4.6)); 
console.log(Math.min(3,5,7,2)); 

console.log(Math.random());  // b/w 0 & 1
console.log(Math.random()*10);

































