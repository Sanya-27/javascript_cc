const arr=new Array(1,2,3,4)

//array methods"
arr.push(6)
arr.pop()
console.log(arr);

arr.unshift(9)   //inserts in first place in arr & shifts the rest
arr.shift()     //removes from start
console.log(arr);

console.log(arr.includes(9))

const newarr=arr.join() //Adds all the elements of an array into a string, separated by comma.
console.log(newarr)

/*
push- inserts at last
pop- removes last
unshift- inserts at first
shift- removes from first
.join()- to convert elements of arr to string
slice- does not chance original array
splice- chances original arr, removes that portion from arr
*/
const A=new Array(1,2,3,4,5,6,7)
const B=A.slice(1,3)        //slice(s,e)-> prints from index s to e-1
console.log(B)              //[2,3]
console.log(A)              //[1,2,3,4,5,6,7]

const C=A.splice(1,3);      //splice(s,e)-> prints from index s to e
console.log(C)              //[ 2, 3, 4 ]
console.log(A)              //[ 1, 5, 6, 7 ] -> original array changed


/* DIFFERENCE BETWEEN SLICE AND SPLICE:
slice(s,e)-> 1)does not include e index element
             2)does not changes original array

splice(s,e)-> 1)includes e index element
              2)changes the original array, removes the portion from array.             
 */