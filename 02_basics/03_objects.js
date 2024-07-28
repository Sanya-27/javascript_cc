// agr constructor se bnayega object toh singleton bnayega
// literals ki trh declare krte toh singleton nhi bnta h

//object literals->

const mySymb= Symbol("key1")   //declaring symbol

const obj={
    name: "sanya",              //key:name, value:sanya
    "full name":"sanya singh",
    [mySymb]:"mykey",           //to add symbol as a key
    age: 18,
    location:"jaipur",
    email:"abc@gmail.com"

}
//to access objects->
console.log(obj.email)
console.log(obj["email"]);
console.log(obj["full name"]) //cannot be accessed by obj. notation
console.log(obj[mySymb])    //to print value of symbol

//to change value of object->
obj.email="xyz@gmail.com"
console.log(obj["email"]);
//to lock value of object->
//Object.freeze(obj)

obj.greeting=function(){
    console.log("hello js user");
}
obj.greeting2=function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(obj.greeting());
console.log(obj.greeting2());


