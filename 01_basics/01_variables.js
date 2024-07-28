const accId=144    //to declare constants

let accEmail="sanya@gmail.com" 
var accPsswrd="123"
//to declare variables, there are 2 methods: let and var. but let is preferred.

accCity="kanpur" //a method to declare variable but this is not a good practice.

// accId=2  (not allowed because cannot change constant)

accEmail="ss@gmail.com"
accPsswrd="567"
accCity="lucknow"

let accHolder; //undefined
console.log(accId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accId,accEmail,accPsswrd,accCity,accHolder])

/*
┌─────────┬────────────────┐
│ (index) │ Values         │
├─────────┼────────────────┤
│ 0       │ 144            │
│ 1       │ 'ss@gmail.com' │
│ 2       │ '567'          │
│ 3       │ 'lucknow'      │
│ 4       │ undefined      │
└─────────┴────────────────┘
*/