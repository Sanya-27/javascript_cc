/*Immediately Invoked Function Expression(IIFE)->
1) to immediately execute function
2) to remove global scope pollution/declaration

*/

 
(function call(){
    //named IIFE
    console.log("IIFE");
})();                      //to write two IIFEs together use ; after the first one


(()=>{
    console.log("arrow func")
})()