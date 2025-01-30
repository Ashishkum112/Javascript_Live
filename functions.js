// Functions in Javascript 


//First Class Functions
// In Languages where the fucntion can be used as variable 


function square(num)
    {
        return num*num;
    }

function displaySquare(fun){
    console.log("The square is : ",fun(5))
}

// displaySquare(square);

// What is IIFE ?
// Immediately Invoked Function - 

(function multiply(i){
    console.log(i*i);
})(2);


//Closures
// It is the ability of the function to access the variable and the fucntion which are outside its lexical scope.

//Arrow Function

function add(num1,num2){
    return num1 + num2;
}
console.log(add(3,4));

const addArrayFunction = (num1,num2) =>  num1 + num2 ;

console.log(addArrayFunction(3,4));
