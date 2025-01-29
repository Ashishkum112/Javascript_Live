//map,filter,reduce

// What is Map() Method ?
// the map function is an array method. It's used to transform each element in an array and create a new array from the results. 
// That's the key point: it doesn't modify the original array

const nums = [1,2,3,4,5];

const newArray = nums.map((current_Element,index,array)=>{
    return current_Element*index + 5;
})
console.log(newArray);

// Filter() Method ?
// Filter method takes each element of an array and applies a conditional statement against it.
// If the condition returns true the element gets pushed inside the element array and if its false it doesnt get pushed inside the array.

const moreThanTwo = nums.filter((num,index,array)=>{
    return num > 2;
})
console.log(moreThanTwo);

//Reduce() Method ?
//The reduce() function processes an array and combines all its elements into a single value

const sumOfAll = nums.reduce((sum,current_Element)=>{
    return sum + current_Element;
},0)
console.log(sumOfAll);

// Foreach Method
//The forEach() method executes a provided function once for each element in an array (like looping through items), 
// but does not return a new array (unlike map()/filter()).

const forEachMethod =  nums.forEach((current_Element,index)=>{
 nums[index] = current_Element*2;
})
console.log(nums);


//Question 
// Return name in Capital only

let students = [
    { name : "Piush",roll:31,marks : 80},
    { name : "jeny",roll:15,marks : 69},
    { name : "kaushal",roll:15,marks : 35},
    { name : "Dilpreet",roll:7,marks : 55},
]
// Easy Way
let temp = []
for(let i=0;i<students.length;i++)
{
    temp.push(students[i].name.toUpperCase());
}
console.log("Using the for loop Method",temp);

//Map

const newArray1 = students.map((student)=>{
    return student.name.toUpperCase();
})
console.log("Using the Map() Method ",newArray1);

// Question-2 Return only details of those who scored more than 60 marks

const newArray2 = students.filter((student)=>{
    return student.marks > 80;
})
console.log("Using the Filter Method",newArray2);


//Q3 more than 80 and roll is also more than 21

const newArray3 = students.filter((stud)=> stud.marks > 80 && stud.roll > 21);
console.log(newArray3);

//Sum of all students mark

const sumMarks = students.reduce((acc,cur)=> acc + cur.marks,0);
console.log(sumMarks);

//Return the name of the students who are having marks more than 90.(Only Names)

const newArray4 = students.filter((stud)=>stud.marks > 60).map((stud)=>stud.name);
console.log(newArray4);

//Total question

const totalMarks = students.map((stud)=>{
    if(stud.marks < 60){
        stud.marks+=20;
    }
    return stud
}).
filter((stud)=>stud.marks > 60).reduce((acc,cur)=>acc+cur.marks,0);

console.log(totalMarks)
