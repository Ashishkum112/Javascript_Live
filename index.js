// var vs let vs const 
// Scope 

//Global Scope
// Ex : 


// Functional Scope

// function name() {

// }

//Block Scope

// {
//     let l = 10;
//     const c = 100;
//     console.log(l,c);
// }

// var

// var v = 5;


// Variable Shadowing 

// function text(){
//     var name = "Ashish"
//     if(true)
//     {
//         let name = "Kumar"
//         console.log(name);
//     }
// }
// text()

//Illegal Shadowing 

// function text(){
//     let name  = "Ashish";
//     if(true)
//     {
//         var name  = "Kumar";
//         console.log(name);
            
//     }
// }

//Redeclaration

// var a;//Var can be redeclared in the same scope
// var a;//Var can be redeclared in the same scope

// let l;//Both let and const cannot be redeclared in the same scope;
// let l;//Both let and const cannot be redeclared in the same scope;
// const c//Both let and const cannot be redeclared in the same scope;
// const c;//Both let and const cannot be redeclared in the same scope;

//Declaration with Initialisatoin

// let a;
// var v;

// But in const we can not declare without initialisation

// const c = 10;
// console.log(c);

// Execution Context

// let k = 10;
// function multiply(x){
//     function divide(){
//         //


//         //
//     }
//     return x*10;
// } 
// let b = multiply(10);
// console.log(b);

// Creation Phase
// k;
// multiply();
// b;

//Execution Phase

// k =10;
// multiply //
// -->  
// b =100
// console.log(); --> 100

//Hoisting 
// During the Creation Phase the javascript engine moves the variables and function declaration to the top of the code is called Hoisting;
// I can only use var for hoisting


// console.log(count);
// var count  = 100;

//Javascript Engine --> Hositing

// var count;
// console.log(count)
// count = 100;

 //let and const will have error as it will be hoisting the value in temporal dead zone
 //temporal dead zone - The temporal dead zone (TDZ) is the period between the declaration of a variable and its initialization, during which accessing the variable results in a ReferenceError.

 function abc(){
    console.log(v,le,co);

    var v = 10;
    let le = 100;
    const co = 1000;
    
 }
 abc()
;

