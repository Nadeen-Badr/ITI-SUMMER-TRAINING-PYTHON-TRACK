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

// function addUserList(arr){
//     for(var i=0;i<arr.length;i++){
//         var newRow = document.createElement("tr")
//         var cell1 = document.createElement("td")
//         var cell2 = document.createElement("td")
//         cell1.innerHTML = arr[i].username
//         cell2.innerHTML = arr[i].email
//         newRow.append(cell1,cell2)
//         myTable.append(newRow)
//     }
// }

// function addUser(){
//     var newRow = document.createElement("tr")
//     var cell1 = document.createElement("td")
//     var cell2 = document.createElement("td")
//     cell1.innerHTML = userName.value
//     cell2.innerHTML = email.value
//     newRow.append(cell1,cell2)
//     myTable.append(newRow)
// }

// function getBEData (){
//     fetch('https://jsonplaceholder.typicode.com/users')
//           .then(response => response.json())
//           .then(data => addUserList(data))
// }


// BOM (window , location , history , navigator)


// window (open-close-focus-scroll-resize-move)By/To

// function getOffer (){
//     x.scrollBy(0,100)
// }

//     var x = window.open("","_blank","height=500,width=300")
//     x.document.write("you won 5000$ give me credentials")



// location
// assign()
// replace()
// href
// protocol
// host
// hostName
// port
// pathname
// hash
// search

// history********************
// length
// back()
// forward()
// go()


// navigator
// console.log(navigator.cookieEnabled)
// console.log(navigator.language)
// console.log(navigator.platform)
// function getOffer(){
//     navigator.geolocation.watchPosition(
//         function(pos){
//             // window.open("https://www.google.com/maps/@"+pos.coords.latitude+","+pos.coords.longitude+",15z?entry=ttu")
//             console.log(pos.coords.latitude,pos.coords.longitude);
//         }
//     )
// }

// setTimeOut - setInterval

// setInterval(function(){
//     console.log("hello");
// },500)


//  var imgs = [
//      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-r36Agi_i2Omb5rbsqzwVKuQwADxO6OrSfJM0cyQVA&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViuuHxOTX8TvcC9WNwLfrxvAs_SVeo_SY-8-UvxK25HpOq-M4yTtsyrIdBwLrat7-3fY&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEONrBY8msQw_BkaSgvkw7tDMoiQ79WPH0j-9sghAAfjbZ2Vm3OSewpL7OtRAzxz7h4zc&usqp=CAU"
//  ]
 
//  myImage.src = imgs[0]
//  var i = 0
 
// var myInt;
// function startSlideShow(){
//     myInt = setInterval(function(){
//         i=(i===imgs.length-1)?0:i+1
//         myImage.src = imgs[i]
//     },1000)
// }

// function stopSlideShow(){
//     clearInterval(myInt)
// }

// var myTimeOut = setTimeout(function(){
//     location.assign("https://www.google.com")
// },3000)

// function getOffer(){
//     clearTimeout(myTimeOut)
// }


// event (attribute - attachFunction - addEventlistener)

// function goodByeLogger (){
//     console.log("good bye")
// }
// function newLineLogger(){
//     console.log("new line")
// }
// getOffer.onclick = newLineLogger
// getOffer.onclick = goodByeLogger

// getOffer.addEventListener("click",goodByeLogger)
// getOffer.addEventListener("click",newLineLogger)

// stopEvent.addEventListener("click",function(){
//     getOffer.removeEventListener("click",newLineLogger)
// })

// getOffer.onclick = newLineLogger
// document.getElementById("getOffer").ondblclick = function(){
//     console.log("clicked twice")
// }

// document.body.onscroll = function(){
//     console.log(scrollY)
// }

// map
// gallery

//************************ */ 
// local and session storage

// sessionStorage.getItem("userName") || sessionStorage.setItem("userName",prompt("enter user name"))


// var savedUserName = sessionStorage.getItem("userName")

// myP.innerHTML = 'hello, '+savedUserName

// function logOut(){
//     sessionStorage.removeItem("userName")
//     myP.innerHTML = "hello world"
// }


// var users = JSON.parse(localStorage.getItem("users"))||[]

// function createTable(arr){
//     for(var i=0;i<arr.length;i++){
//         var newRow = document.createElement("tr")
//         var cell1 = document.createElement("td")
//         var cell2 = document.createElement("td")
//         cell1.innerHTML = arr[i].userName
//         cell2.innerHTML = arr[i].email
//         myTable.append(newRow)
//         newRow.append(cell1,cell2)

//     }

// }

// createTable(users)

// function addUser(){
//     var newRow = document.createElement("tr")
//         var cell1 = document.createElement("td")
//         var cell2 = document.createElement("td")
//         cell1.innerHTML = userName.value
//         cell2.innerHTML = email.value
//         myTable.append(newRow)
//         newRow.append(cell1,cell2)
//         users.push({userName:userName.value,email:email.value})
//         localStorage.setItem("users",JSON.stringify(users))
// }

// *************************** */
// var let const


// var function scoped
// reassign
// redeclare

// {
//     var x = 5
// }
// console.log(x);

// for(let i=0;i<3;i++){
//     console.log(i);
// }
// console.log(i);

// 0
// 1
// 2
// 3

// var x=5
// var x=7
// console.log(x)

// let - const block scoped

// let x = 7
// {
//     let x = 5
//     x=3
//     console.log(x)
// }

// console.log(x)

// const x=3;
// {
//     const x = 5
   
//     console.log(x)
// }

// console.log(x)


// console.log(x);

// pass by value and pass by reference 
// primitives pass by value
// non primitives pass by reference

// var arr1 = []
// var arr2 = []

// console.log(arr1 == arr2)

// var obj1 = {}
// var obj2 = {}

// console.log(obj1 == obj2)


// var arr1 = [1,2,3]
// var arr2 = arr1

// arr1.push(4)
// console.log(arr1)
// console.log(arr2)

// var obj1 = {name:"mohamed"}
// var obj2 = obj1

// obj1.age = 20
// console.log(obj1)
// console.log(obj2)

// var count = 5

// function incCount (value){
//     value += 5
//     console.log(value) 
// }

// incCount(count)
// console.log(count)

// var obj = {count:5}

// function incCount (valueObj){
//     valueObj.count += 5
//     console.log(valueObj) 
// }

// incCount(obj)
// console.log(obj)



// template literal
// var userName = "mahmoud"
// var age = "25"
// console.log("Hi, "+userName+", your age is "+age)
// console.log(`Hi, ${userName}, your age is ${age}`)

// destructuring arrays and objects
// var arr = [1,2,3,4]

// // var value1= arr[0]
// // var value2= arr[1]
// // var value3= arr[2]
// var [,,value3] = arr

// console.log(value3)


// var person = {
//     userName:"mohamed",
//     age:"20"
// }

// age = 50

// var age = person.age
// var userName = person.userName

// var {userName,age:userAge} = person

// console.log(age,userName)
// console.log(userAge)


// var userName = "manar"
// var userAge = "30"

// var person = {userName,userAge}
// // var person = {userName:userName,userAge:userName}
// console.log(person)

// spread operator and rest params 
// ...
// const arr = [10,20,30]
// arr.push(500)
// console.log(arr)
// console.log(...arr)
// console.log(Math.min(...arr))

// const arr1 = [10,20,30]
// const arr2 = [...arr1]
// arr1.push(40)
// console.log(arr1)
// console.log(arr2)

// const arr1 = [10,20,30]
// const arr3 = [700,800]
// const arr2 = [...arr1,40,...arr3]
// console.log(arr1)
// console.log(arr2)

// const obj1 = {userName:"mohamed",age:"20"}
// const obj2 = {...obj1,age:"15"}
// console.log(obj1)
// console.log(obj2)


// arrow function

// const testFunc = function(a,b){
//     return a+b
// }
// const testFunc = (a,b)=>{
//     // ************
//     // --code lines ---
//     // ************
//     // ************
//     return a+b
// }

// just returning
// const testFunc = (a,b)=> a+b

// one param only
// const testFunc = a=> a+5
// let result =  testFunc(5)
// console.log(result)

// array apis (every - some - map - filter - find - forEach)  


const arr = [10,20,30]
const users = [
    {userName:"mohamed",gender:"male",age:25},
    {userName:"mahmoud",gender:"male",age:15},
    {userName:"sara",gender:"female",age:30},
]

// let every = true
// for(let i=0;i<arr.length;i++){
//     if (arr[i]<=15){
//         every = false
//         break;
//     }
// }
// console.log(every)



// let res = arr.every(numb=>numb>15)
// let res = users.every(user=>user.age>14)
// let res = users.some(user=>user.gender==="female")
// let res = users.map(
//     ({userName,age})=>({userName,old:age>20})
// )

// let res = users.filter(
//     ({gender})=>gender==="male"
// )

// let res = users.find(
//     ({gender})=>gender==="male"
// )

// const inputs =[...document.getElementsByTagName("input")];



// inputs.forEach(
//     input=>input.onfocus = ()=>{
//         console.log("focused")
//     }
// )



// ... , rest params

// function display (userName,...phone){
//     console.log(`${userName} phone is ${phone.join(" ")}`)
// }

// // display("mohamed","0111")
// display("mohamed","0111","010","0150","012")






