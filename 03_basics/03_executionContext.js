//javascript execution context:

/* execution context-> apne jo bhi file bnayi h, usko javascript run kese kregi mtlb execute kese kregi-> run krne k liye js usko 2 phase mein run krti h */

/*  {}-> global EC, isko ek variable mein rakh diya jata hai(this) */


/* types:
1) global execution context     -> {}
2) function execution context
3) eval execution context
*/

/* 2 phases:
1) memory creation phase -> memory is allocated for declared variables.
2) execution phase
*/


let var1=10
let var2=5
function add(num1,num2){
    let total=num1+num2
    return total
}
let result1=add(val1,val2)
let result2=add(10,2)

/* 
execution phase for above code:

1) GLOBAL EXECUTION:
isko allocate kiya jata h "this" keyword ke andr

2)MEMORY PHASE:
var1-> undefined
var2-> undefined
add-> defination
result1-> undefined
result2-> undefined

3)EXECUTION PHASE:
var1 <-10
var2 <-5
add-> creates its own execution context(sandbox): new variable environment + execution thread. it has same phases->
 ____________________
|memory phase:       |
|var1-> undefined    | 
|var2-> undefined    |
|total-> undefined   |
|execution phase:    | 
|num1-> 10           |
|num2->5             |
|total-> 15          |
 ____________________

res->15

total is returned in global phase then.

execution context is created everytime for new function and DELETED afterwards.

*/














