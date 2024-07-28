let A=33
console.log(typeof A);
console.log(typeof(A));     //number

let B="33"
console.log(typeof B);     //string

let C=Number(B);
console.log(typeof C)      //number


let D="33abc"
let E=Number(D);
console.log(typeof(E));     //number
console.log(E);            //NaN: Not a Number, 33abc cannot be converted to number

let F=null
console.log(Number(F));     //0

let G=undefined
console.log(Number(G));    //undefined

let H=true
console.log(Number(H));    //1

let I="sanya"
console.log(Number(I));    //NaN

//"33"-> 33
//"33abc"-> NaN
//true-> 1, false->0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);        //true

let check=""
console.log(Boolean(check));            //false

let check2="sa"
console.log(Boolean(check2));          //true


//""-> false
//"abc"-> true

let nn=33
let str=String(nn)
console.log(typeof str)              //string
console.log(str)                    //33


//********************  Operations******************

console.log("1" + 2)                 //12
console.log(1 + "2")                 //12
console.log("1"+ 2 + 2)              //122
console.log(1 + 2 + "2")             //32

console.log("2">1)                   //true,converts "2" itself to number 2       
console.log("02">1)                 //true

comsole.log(null>0)                 //false,converts null itself to 0
console.log(null==0)                //true
