// variables 
// naming convention camel case
// can't use spaces  
// every new word starts with uppercase
// can't start with num , special char
// except $ _
// var userName = "mohamed";
// var userFirstName = "mohamed";

// data types 
    // primitive
        // number string boolean null undefined
    // non-primitive
        // object array function
// typeof operator

// number string boolean null undefined
// var x=null;
// console.log(typeof x)

// operators +

// number + number sum operator
// console.log(5+5 )
// // string + string concat operator
// console.log("mohamed"+" "+"Farouk" )
// number + string 
// console.log("5"+5 )

// coercion change datatype due to operator
// arithmetic operators change data to number 

// console.log(typeof (5*"string"))
// NaN not a number 

// var x="10.25string"
// parseInt parseFloat Number
// console.log(Number(x))
// console.log(parseFloat(x))
// console.log(parseInt(x))

// operators
// arithmetic -- assignment -- logical -- comparison
// arithmetic + - * / %
// assignment = += -= *= /= %= ++ --
// var x = 5
// x=7
// console.log(x) //7
// x+=3 // x=x+3  
// console.log(x) //10
// x-=5 // x=x-5  
// console.log(x) //5
// x*=5 // x=x*5  
// console.log(x) //25
// x/=5 // x=x/5  
// console.log(x) //5
// x%=2 // x=x%2  
// console.log(x) //1

// postfix
// console.log(x++) //1
// console.log(x) //2

// // prefix
// console.log(++x) //2
// console.log(x) //2


// logical && || !

// !true //false
// !false //true

// true && true && true  //true
// true && true && false //false
// search for first false

// true || false || false //true
// false || false || false //false
// first true value


// short circuit 
// falsy values (false - 0 - "" - undefined - null - NaN)
// console.log(""||null||2)

// comparison operator
// > < >= <= == === != !==
// shallow comparison == compare only value
// shallow comparison != compare only value
// deep comparison === compares also datatype
// deep comparison !== compares also datatype
// var x = "5"
// var y = 5
// console.log(x!==y)

// condition statements
// if - else -- switch-case -- ternary operator
// var x=""

// if(x){
//     console.log("value gt than 5");
// }else if(x===0){
//     console.log("value is 0");
// }
// else if(x===""){
//     console.log("value is empty");
// }
// else{
//     console.log("value is not defined");
// }

// var x = "menna"

// switch (x) {
//     case "mohamed":
//         console.log("your age is 20")
//         break;
//     case "sara":
//     case "menna":
//         console.log("your age is 15")
//         break;

//     default:
//         console.log("I dont know your name")
//         break;
// }

// ternary operator 
// boolean ? true return : false return

// var x = true ? 20 : 10 //20
// var x= ""
// x =  x ? x : "default" //
// console.log(x)

// // loop statements
// // for while do-while
// // var i=10
// for(var i=5;i<=10;i++){
//     console.log(i);
// }
// // i++

// //5
// //6
// //7
// //8
// //9
// var count = prompt("enter a number")
// var egyptian = confirm("are you egyptian")
// console.log(egyptian)

// for(var i=0;i<count;i++){
//     document.write("<h1>hello"+(egyptian?" egyptian":" not egyptian</h1>"));   
// }

// communication with user
// input //prompt //confirm
// output //console.log //alert //document.write4
// var x = 5
// while(x%2 !== 0){
//     x=prompt("please enter an even value")
// }


// var x;
// do{
//     x=prompt("please enter an even value")
//     while(x==="" || !isFinite(x)){
//         x=prompt("please enter valid number")
//     }
// }
// while(x%2 !== 0)

// console.log(x);
// *******************************************************************

// Math object
// console.log(Math.cos(Math.PI/2))
// var x = 10.9832
// console.log(Math.floor(x))

// Math.ceil()
// Math.floor()
// Math.round()
// Math.cos()


// Math.sign()
// console.log(Math.sign(0))

// Math.abs()
// console.log(Math.abs(200))

// Math.min()
// Math.max()
// console.log(Math.max(10,20,5,18))
// Math.PI
// Math.sqrt()
// console.log(Math.sqrt(4))
// Math.pow()

// console.log(Math.pow(125,1/3))

// Math.random()
// console.log(Math.random())


// functions //reusability //more testable
// readability //maintainability

// function logger(){
//     console.log("hello1")
//     console.log("hello2")
//     console.log("hello3")
//     console.log("hello4")
//     console.log("hello7")
//     console.log("hello6")
// }

// logger()
// logger()
// logger()
// console.log("hello1")
//     console.log("hello2")
//     console.log("hello3")
//     console.log("hello4")
//     console.log("hello7")
//     console.log("hello6")
    
//     console.log("hello1")
//     console.log("hello2")
//     console.log("hello3")
//     console.log("hello4")
//     console.log("hello7")
//     console.log("hello6")
    
//     console.log("hello1")
//     console.log("hello2")
//     console.log("hello3")
//     console.log("hello4")
//     console.log("hello7")
//     console.log("hello6")

// function statement
// function logger(){
//     console.log("hello")
// }
//logger()

// var logger = function (){
//         console.log("hello")
// }
//logger()

// (function (){
//             console.log("hello")
//     })()




// var logger = function (name="mohamed"){
//         console.log("hello"+" "+name)
// }
// logger("test")
// logger("mohamed")
// logger("mazen")


// var logger = function (name="mohamed"){
//         var z = "hello"+" "+name
//         console.log("hello");
//         return 5
//         console.log("hello after return");

// }
// var x = logger()

// console.log(x);

// hoisting 
// execution context
// console.log(x);
// console.log(y);
// console.log("hello");
// console.log("hello");
// console.log("hello");

// console.log("hello");
// console.log("hello");
// console.log("hello");
// var x = 5;
// var y = 2;


// var logger = function(){
//     console.log("hello");
// }
// logger()


// function logger (){
//     console.log("hello");
// }
// logger()
// logger()

// execution context

// var x = 5

// function test(){
//     x=3
//     function test2(){
//         var x=10
//         console.log(x);
//     }
//     test2()
//     console.log(x);
// }

// test()

// console.log(x)


// 10
// 3
// 3





// array methods
// length-join-pop-push-shift-unshift-splice-slice
// var arr = ["string",10,null,5]
// arr[2] = 3
// console.log(arr.length)

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// pop-push-shift-unshift
// var arr = [1,2,3,4]
// console.log(arr);

// add elements
//  arr.push(5)
// arr.unshift(5)

// remove element
// var returnValue = arr.pop()
// var returnValue =arr.shift()
// console.log(returnValue)

// console.log(arr)

// splice-slice
// var returnValue = arr.splice(1,2,"newItem")
// console.log(returnValue)
// console.log(arr)

// var arr = ["yohanna","kerollos"]

// arr.reverse()
// var name =  arr.join(" ")
// console.log(name)










// string methods
// length trim trimStart trimEnd padStart padEnd
// charAt indexOf startsWith toUpperCase toLowerCase split

// var str = "  daad  "
// str = str.trim()
// str = str.toLowerCase()
// var strArr = str.split("")
// strArr.reverse()
// var reversedStr = strArr.join("")
// console.log(reversedStr===str?"palindrome":"not palindrome")

var numbers = [];
for (var i = 0; i < 3; i++) {
  var num = parseInt(prompt(`Enter number ${i+1}:`));
  numbers.push(num);
}

var sum = numbers[0] + numbers[1] + numbers[2];
var product = numbers[0] * numbers[1] * numbers[2];
var quotient = numbers[0] / numbers[1] / numbers[2];

console.log(`sum of the 3 values ${numbers.join('+')} = ${sum}`);
console.log(`multiplication of the 3 values ${numbers.join('*')} = ${product}`);
console.log(`division of the 3 values ${numbers.join('/')} = ${quotient}`);