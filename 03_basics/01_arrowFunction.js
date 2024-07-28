const user={
     username:"sanya",
     price:999,
     welcomeMessage:function(){
        console.log(`${this.username}, welcome`);    //this is used to refer to current context
     }
}
user.welcomeMessage()         //sanya,welcome
user.usernam="dingh"
user.welcomeMessage()        //dingh,welcome because this refers to current context only 




//global object in browser-> window
console.log(this)   //{} 




function func(){
   console.log(this);           //here it will not give {}, instead gives soo many values like global value, microtasks etc.
} 
func()



/*
function func2(){
   let username="abc"
   console.log(this.username);           //undefined, it can be used in objects, in function this cannot be used
}
func2()
*/


 const func2=()=>{
   let username="sanyaaa"
   console.log(this.username);       //undefined
   console.log(this)                 //{}
 }
 func2()

 
//*********************arrow function**************/
//ways of defining arrow functions:

/*
//method1:
const add=(num1,num2)=>{
   return num1+num2
}
console.log(add(3,4))
*/


//method2: implicit return
const add=(num1,num2)=> num1+num2
const add2=(num1,num2)=> (num1+num2)
console.log(add(3,4))

const obj=()=>({user:"sanya"})    //to return a object