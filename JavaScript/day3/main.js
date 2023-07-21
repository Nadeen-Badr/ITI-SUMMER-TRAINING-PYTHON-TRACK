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


//objects

// var name1 = "ahmed"
// var age1 = "20"
// var phone1 = "012"

// var obj1 = {
//     name:"ahmed",
//     age:"20",
//     phone:"012",
//     display:function(){
//         console.log(this)
//     }
// }

// var obj2 = {
//     name:"sara",
//     age:"15",
//     phone:"012",
//     display:function(){
//         console.log(this)
//     }
// }

// dot natation . -- bracket notation []
// console.log(obj1.phone)
// obj1.address = "new value"

// obj1.display()
// obj2.display()



// DOM (document object)

// access element
// id - class - tag -name - query - queryAll
// var p =  document.getElementById("p")
// var p =  document.getElementsByClassName("green")
// var p =  document.getElementsByTagName("p")
// var p =  document.getElementsByName("userName")
// var p =  document.querySelector("p")
// var p =  document.querySelectorAll("input")


// change data (innerHTML - innerText - value)
// p[0].innerHTML = "<a href='https://www.google.com' >google</a>"
// p[1].innerText = "<a href='https://www.google.com' >google</a>"

// function test (){
//     console.log(p[0].value , p[1].value)
// }


// change style

// function test (){
//     p[0].style.height = "20px"
//     p[0].style.background = "green"
//     p[0].style.border = 0
//     p[0].style.outline = 0
//     p[0].style.color = "white"

// }

// className -- classList
function test (){
    // p[0].className += " border"
    // p[0].classList.add("border")
    // p[0].classList.remove("green")
    // p[0].classList.toggle("lg")

    // p[0].classList.toggle("green")
}

// attributes (getAttribute -- setAttribute)


// p[1].hidden = true
// function test (){
//     // p[1].setAttribute("type",p[1].getAttribute("type")==="text"?"password":"text")
//     p[1].type = p[1].type==="text"?"password":"text"
//     p[1].title = "test"
//     p[1].hidden = false
// }

// var newRow = document.createElement("tr")
// var cell1 = document.createElement("td")
// var cell2 = document.createElement("td")
// cell1.innerHTML = "data"
// cell2.innerHTML = "data"


// newRow.append(cell1,cell2)
// myTable.append(newRow)


// var users = [
//     {
//         userName:"mahmoud",
//         email:"mahmoud@gmail.com"
//     },
//     {
//         userName:"sara",
//         email:"sara@gmail.com"
//     },{
//         userName:"mazen",
//         email:"mazen@gmail.com"
//     },{
//         userName:"manar",
//         email:"manar@gmail.com"
//     },{
//         userName:"yousry",
//         email:"yousry@gmail.com"
//     },
    
// ]

function addUserList(arr){
    for(var i=0;i<arr.length;i++){
        var newRow = document.createElement("tr")
        var cell1 = document.createElement("td")
        var cell2 = document.createElement("td")
        cell1.innerHTML = arr[i].username
        cell2.innerHTML = arr[i].email
        newRow.append(cell1,cell2)
        myTable.append(newRow)
    }
}

function addUser(){
    var newRow = document.createElement("tr")
    var cell1 = document.createElement("td")
    var cell2 = document.createElement("td")
    cell1.innerHTML = userName.value
    cell2.innerHTML = email.value
    newRow.append(cell1,cell2)
    myTable.append(newRow)
}

function getBEData (){
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => addUserList(data))
}




