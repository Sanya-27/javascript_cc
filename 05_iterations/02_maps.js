//maps:
const map=new Map()
map.set('IN', "INDIA")
map.set('Fr', "France")
map.set('Gr', "Germany")
console.log(map);


//for of loop:
for(const [key,value] of map){
    console.log(key, ':-', value)
}



//object:
const myobj={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift'
}



//for in
for(const key in myobj){
    console.log(key, ':', myobj[key])
}


arr=["js", "rb", "py", "java"]
//for in loop in arrays:
for(const key in arr){
    console.log(key);
}

for(const key in arr){
    console.log(arr[key]);
}



//for each loop in functions:
const coding=["js", "ruby","java","cpp"]
coding.forEach(function(val){
    console.log(val);
})
















           