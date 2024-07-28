//Types of datatype: primitive & non-primitive

/* primitive:
string,number, boolean, null, undefined, symbol, bigInt
*/

/* Reference(Non Primitive)
array, objects, functions
*/

//javascript is dynamically typed language since we need not define the datatype while declaring variables.


// const arr=["one", "two", "three"] //array

// let myobject={                   //object
//     name:sanya,
//     age:21
// }

// const myfunc=function(){
//     console.log("hello");       //function
// }








//****************MEMORY****************************

//STACK-> Primitive(jo bhi variable declare kra uska ek copy milta h)

//HEAP-> Non Primitive (jo bhi object heap ke andr define hota uski original value ka reference milta h, toh jo bhi change krnge vo original value mein change hoga)


let var1="abc"           //goes into stack
let var2=var1            //gets copy of var1
var2="xyz";              //does not change var1
console.log(var1)        //abc
console.log(var2)        //xyz



let user1={                     //variable name user1 goes into stack
    email:"abc@gmail.com",      //object email,age goes in heap
    age:21
}
let user2=user2               //user2 has reference to original userOne
user2.email="xyz@gmail.com"   //changes original user1 also because both user1 and user2 is pointing to same location
console.log(user1.email)
console.log(user2.email)

