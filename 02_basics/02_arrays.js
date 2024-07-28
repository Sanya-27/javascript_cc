const A=new Array("a","b","c","d")
const B=new Array("x","y","z")
const C=A.concat(B);
console.log(C)     //merge both array into new array

//using spread-> 
const D=[...A, ...B]  //elements of arr are spread into indivi elements
console.log(D)


//arr.flat-> converts arr of (indv, array of array, etc.) into one arr

console.log(Array.isArray("Sanyaa"))  //false
console.log(Array.from ('sanyaa'))   //[ 's', 'a', 'n', 'y', 'a', 'a' ]
console.log(Array.from({name:"sanya"})) //[]

let num1=100
let num2=200
let num3=300
console.log(Array.of(num1,num2,num3)); //[100,200,300]
                                                                         