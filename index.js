// for (let i = 1; i <= 100; i++) {
//   console.log("Hello", i);
// }

// //table of 13
// for (let i = 1; i <= 10; i++) {
//   console.log(`13 * ${i}=${13 * i}`);
// }
// //
// let countEven = 0;
// let sumofEvens = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     countEven++;
//   }
// }
// console.log(countEven);

// // while loop
// let i = 0;
// let sumofOdd = 0;
// while (i <= 100) {
//   if (i % 2 !== 0) {
//     sumofOdd = sumofOdd + i;
//   }
//   i++;
// }
// console.log(sumofOdd);

// // to check temprature range
// function checkTemp(temp) {
//   if (temp >= 15 && temp <= 25) {
//     console.log("comfortable");
//   } else {
//     console.log("not comfortable");
//   }
// }

// //check square number
// function checkSquare(num) {
//   let squareRoot = Math.squareRoot(num);
//   if (squareRoot === Math.floor(squareRoot)) {
//     console.log(num, "is a square number");
//   } else {
//     console.log(num, "is not a square number");
//   }
// }
// //function  let ,var,const block scope and global scope
// function test() {}
// test(12, 30);

// // by using let
// let x = 100;
// let y = 200;
// console.log(x);
// console.log(y);

// // by using var
// var a = 100;
// var b = 200;
// console.log(a);
// console.log(b);
// function test()
// function test(b,a){
//     let c= a+b;
//     return c;
// }
// let val =test(100,200)
// let newVAL = val+100
// console.log(newVAL);
// multiplicatin
// function multiply(b, a) {
//   let c = a * b;
//   return c;
// }
// let val = multiply(10, 10);
// console.log(multiply);

// // write a functions to print 100 to 1
// function rev() {
//   for (let i = 100; i >= 1; i--) {
//     console.log(i);
//   }
// }
// rev();

// // write a function to print 1 to 100
// function print() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// }
// print();

// // take a two number and print between them
// function printBetween(a, b) {
//   for (let i = a + 1; i < b; i++) {
//     console.log(i);
//   }
// }
// printBetween(10, 20);

// arrow function
// let test=()=>{
//     console.log("hello world");
// } test()

// // // add two number using arrow function
//  let addSum = (a, b) => {
//    let c=a+b
//    console.log('iuyg')
//  }

//  addSum(10,20);

//  //Normal Function
//  const test = function(){
//     console.log("Normal Function");
//  }
//  test();

//  const sum =a=>a+5
//  let x=sum(100);
//  console.log(x);

// using aarrow function between two number find sum  of even number

// const sumBetweenEvenNumber = (a, b) => {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     if (i % 2 === 0) {
//       sum = sum + i;
//     }
//   }

//   console.log(sum);
// };
// sumBetweenEvenNumber(1,10);

// //restoperator
// function app(a,b=10){
//     console.log(a+b);
// }
// app(100,50);


// //rest operator
// function app(...a){
//     console.log(a);
// }
// app(1,2,3,4,5,6,7,8,9);


// // Array

// const arr=[1,2,3,4,5,6]
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// //array method push and  pop shift and unshift
// const  arr=[1,2,3,4,5,6]
// const arr2=[]
// arr2.push(arr.pop)
// console.log(arr2)
// const arr =[1,2,3,4,5,6]
// //  let x= arr.slice(1);
// let x=arr.splice(3,3,102,103);
//  console.log(x);
//  console.log(arr)

// // concatination of array 
// const arr=[1,2,3,4,5,6]
// const arr2=[10,11,12,23]
// const arr3=[20,30,40,50]
// let x=arr.concat(arr2,arr3)
// console.log(x)
// console.log(arr)

// calcullate  the square of the number using array method

// let nums = [1,2,3,4,5,6]
// let calcSquare = (num) =>{
//     console.log(num * num);
// };
// nums.forEach(calcSquare);


// reduce method 
// let arr = [1,2,3,4];

// const output = arr. reduce((res,curr)=>{
//     return res + curr;

// });
// console.log(output);

// topper sutudent of the college
// let marks =[97,64,32,49,99,96,86];
// let toppers = marks.filter((val)=>{
//     return val>90;
// });
// console.log(toppers);

// let n = prompt(" enter a number: ");

// let arr = [];
// for (let i = 1; i <=n; i++) {
//     arr[i-1] = i;
// }
// console.log(arr);

// string method 

// let fullName ="madam"
// console.log(fullName.length);
// console.log(fullName[6]);
// for (let i = 0; i < fullName.length; i++) {
//     console.log(fullName[i]);
// };

// let val = ""
// for ( let i=fullName.length-1;i>=0; i--){
//     val += fullName[i];
// }
// console.log(val);
// if ( val === fullName){
//     console.log("yes")
// } else{
//     console.log("no")
// }

// if the array is peledrom then say yes otherwise no


// let fullName ="madam"
// console.log(fullName.length);
// console.log(fullName[6]);
// for (let i = 0; i < fullName.length; i++) {
//     console.log(fullName[i]);
// };

// const pl = (a)=>{
// let val = ""
// for ( let i=a.length-1;i>=0; i--){
//     val += fullName[i];
// }
// console.log(val);
// if ( val === a){
//     console.log("yes")
// } else{
//     console.log("no")
// }
// };

// //to upper case
// let fullName = "Hello world";
// // console.log(fullName.toUpperCase())
// console.log(fullName.toLocaleLowerCase())
// console.log(fullName.trim())
// console.log(fullName.endsWith("H"))
// console.log(fullName.startsWith("world"))
 

// let val = fullName.slice(fullName.length-1)
// console.log(val)

// replace method 

// let x= fullName.replaceAll("1", "z")
// console.log(x)


// split method  method in sting 
// let fullName = "Hello world";
// let x = fullName.split ("") [4]
// console.log(x)

// let name = "Kiran";
// console.log (`My name is ${name}`);


// callback function and foreach loop 

// const sum = () => {
//     console.log("sum");
// };

// function test (x){
//     // console.log ("test");
//     // console.log(x)
//     let arr = [1,2,3,4,5];
//    for( let i=0; i< arr.length; i++){
//     x(arr[i])
//    }
// }

// test( (a) => {
//     console.log(a);
// });

// foreach loop
//  let arr = [1,2,3,4];
// let sum = 0;
//  arr.forEach((x) => {
//     if (x %2 === 0){
//         sum += x
//     }
// });
// console.log(sum);



