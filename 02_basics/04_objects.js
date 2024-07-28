const obj1=new Object() //singleton object
const obj2={}           //non singleton object

obj2.id="123abc"
obj2.name="rohit"
obj2.email="aaa2gmail.com"
console.log(obj2)

const reg={
    email:"abc@gmail.com",
    fullname:{
        fname:"san",
        lname:"singh"
    }
}


const obj3={1:"a", 2:"b"}
const obj4={3:"c", 4:"d"}
const obj5={...obj3,...obj4};       //combining objects
console.log(obj5)


console.log(Object.keys(obj2))        //[ 'id', 'name', 'email' ]
console.log(Object.values(obj2));      //[ '123abc', 'rohit', 'aaa2gmail.com' ]
console.log(Object.entries(obj2));      //[[ 'id', '123abc' ],[ 'name', 'rohit' ],[ 'email', 'aaa2gmail.com' ]]





const course={
    coursename: "js",
    price: 999,
    teacher:"abc"
}

//object de-structuring->
const {price :pri}=course        //to extract price from course
console.log(pri)          //now no need to write course.price


//*************FUNCTIONS***************/
function add(num1,num2){           //num1,num2-> parameters
    return h=num1+num2;
}

add(3,4) //7                   //3,4->arguments
add(3,"4") //34
const res=add(3,5)
console.log(res);

function loggedIn(name){
    return `${name} just logged in`
}
loggedIn("sanya")            //won't print anything
console.log(loggedIn("sanya") );        //prints
console.log(loggedIn() );               //undefined just logged in


function calcCartPrice(...num1){        //... is rest operator, packs the items in bundle
    return num1
}
console.log(calcCartPrice(200,300,340));      //[200,300,340]



//***********************************************/
//to pass objects into function->
//method1:
const user={
    username:"sanya",
    age:21
}
function handleObj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObj(user)

//method2:
handleObj({
    username:"sanya",
    age:21
})



