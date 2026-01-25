// document.getElementById('head1').textContent = "from js 1"
// document.getElementById('head2').textContent = "from js 2"
// document.getElementById('head3').textContent = "from js 3"
// document.getElementById('head4').textContent = "from js 4"
// document.getElementById('head5').textContent = "from js 5"
// document.getElementById('head6').textContent = "from js 6"

// // we store in a variable through which we can use it multiple times

// let a = document.getElementById('demo')
// a.textContent ="another way"


// // innerhtml command can change text as well as inner html also.

// let b = document.getElementById('LILY')
// b.innerHTML = "<i> LILY BHAI </i>"              // if we have to change only a single element we putting innerhtml
// b.setAttribute('align','center')                // we can directly change body by applying directly set attribute

// let c =document.getElementById('line')
// c.innerHTML = "<u>this is priyesh</u>"

    
// //            (function) (att.name)      (att.value)
// document.body.setAttribute('bgcolor',    'yellow')

// document.getElementById('head').removeAttribute('style')   // we will remove any css and styling through javascript.


// added additional funtion 
// added more
// more functions
// again another functions
// again
// done expression related to arrow functions

// document.getElementById('image')
// setAttribute('src','image')


// ========================================================================

//if user want to add single property  in inner html we have to give one css as in single line with the help of js

// document.getElementById('head').style.backgroundColor="yellow"

// let head= document.getElementById('demo')
// head.style.backgroundColor="lightblue"
// head.style.padding="20px"


// let one=document.getElementById('cybrom')
// one.style.backgroundColor="red"
// one.style.padding="15px"
// one.style.textAlign="center"

// let two= document.getElementById('para')
// two.style.backgroundColor="lightgreen"
// two.style.padding="15px"
// two.style.textAlign="center"

// let three= document.getElementById('button')
// three.style.backgroundColor="blue"
// three.style.padding="5px"
// three.style.textAlign="center"



// let head1 = document.getElementById('chair')
// head1.style.cssText = "background-color:'red;color:white;padding:20px"


// element

// let tag = document.createElement('h1')

// tag.textContent = "new element from js file"
// console.log(tag);

// document.getElementById('parent').append(tag)


// ===========================


// let joy = document.createElement('p')

// joy.textContent = "new element from js file"
// console.log(joy);

// document.getElementById('new').append(joy)

// ===========================================================H W================================================================

// have to put 10 items put green , padding 12px ,text white in every even numbers of items

// ==================================================================================\

// document.getElementById('image').scr="img2.jpeg"

//event are said to be "action" which's performed by user itself on a webpage.

//-------------------mouse events----------------

// function fun(){
//     alert ("working.... please wait....")
// }
// --------------------------------------------------------------------------------------

// function red(){

// document.body.style.backgroundColor="red"}


// function blue(){
//     document.body.style.backgroundColor="blue"

// }



// function yellow(){
//     document.body.style.backgroundColor="yellow"

// }


// function orange(){
//     document.body.style.backgroundColor="orange"

// }

// --------------------------------------------------------------------------------

// function color(cl){
//     document.body.style.backgroundColor="cl"
// }


// function green(){
//     let a = document.getElementById('head')
    
// }

// function change(){
//     document.getElementById('text').textContent = "Get Lost"
//     document.getElementById('text').style.backgroundColor = "red"
// }

// function change1(){
//     document.getElementById('text').textContent = "Tap here"
//     document.getElementById('text').style.backgroundColor="green"
// }

//  function showImage(device) {
//       let img = document.getElementById("deviceImage");

//       if (device === "mobile") {
//         img.src = "mobile.jpeg";
//       } else if (device === "tablet") {
//         img.src = "tablet.jpg"
//       } else if (device === "laptop") {
//         img.src = "laptop.jpeg";
//       }

//       img.alt = device + " image";
//     }

//     document.getElementById("deviceImage").style.height="250px"


    // ------------------------------------------by sir-------------------

    // function fun1(){
    //   document.getElementById('image').src="mobile.jpeg"
    // }

    
    // function fun2(){
    //   document.getElementById('image').src="tabletjpg"
    // }

    
    // function fun3(){
    //   document.getElementById('image').src="laptop.jpeg"
    // }


// --------------------------------------------------------------------------------

// array denoted by []
// array means many multiple variable or data we can store


// {/* <h1>welcome</h1> */}

// let h = document.getElementsByTagName('h1')
// console.log(h[0])
// h[0].style.color="red"


//everything in dom is node==========================================

// console.log(h[0])
// let a = document.getElementById('h2').style.color="red"
// let b= document.getElementById('h2').style.color="blue"
// let c = document.getElementsByTagName('h2').style.color="black"
// let d = document.getElementsByTagName('h2').style.color="green"       //doo
// let e= document.getElementsByTagName('h2').style.color="yellow"
// let f = document.getElementsByTagName('h2').style.color="pink"


// let z=document.getElementsByClassName('a')
// console.log(z[0])
// z[0].style.color="red"
// z[1].style.color="blue"
// z[2].style.color="green"
// z[3].style.color="yellow"
// z[4].style.color="black"

// ------------------------------------------------------------------------------------------------
// =========================================Query Selector ===========================================

// . is for class
// # is for id 

// let h = document.querySelector('amit')
// ------------------------------------------------
// class = 'tv'*3 
//it always target single element
// for selecting multiple elements we have to write:-  //let li = querySelectorAll('tv)

// for selecting individual elements we have to give indexing
// li[1]



// let li = document.querySelectorAll(1)

// --------------------------------------------------------------------------------

// function fun(){
//     let warpper = document.querySelector('#container')
//     warpper.classList.add('wrapper')

// }


// function fun1(){
//     let container = document.querySelector('#container')    //# is used for container in js
//     container.classList.remove('wrapper')

// }

// function both(){
//     let cn = document.querySelector('#container')
//     cn.classList.toggle                                  //toggle for one tym true and false both
// }

// function fun1(){
//     document.body.classList.toggle('color')
//     if(dark== true){

        
//     }


// }

// function change(){
//     let g = document.getElementById('again').textCon
// }
// ------------------------------------------------------------
// function theme(){
//     let an= document.body.classList.toggle('theme')
//     console.log(an);

//     if(an==true){
//         document.querySelector('#btn').textContent="light"


// }
// else{
//     document.querySelector('#btn').textContent="dark"
// }
// }


// function fun(){
//     let j=document.querySelector('body')
//     let an = j.classList.toggle('pic')
//     console.log(an)
    
//     if(an==true){
//       document.querySelector('#imp').textContent="light"
//     }
//     else{
//         document.querySelector('#imp').textContent="dark"
//     }

// }

//add remove toggle

//=====================================================callback funtion================================================================

//setInterval ( )  - it is process through which  in a perticular time duration we have to pass any function
// setInterval(function,timer)  // could be written in miliseconds everytime... it will run infinite..

// setInterval(()=>{document.write("hi...")},3000)

// function fun(let i = 1; i<=10;i++){
//     if i
//     setInterval((h1)=>{document.write(h1)},1000)


// }


// let a= 0
// let h1 = document.querySelector('#count')
// let st
// function fun(){
//     st= setInterval(()=>{
//         h1.innerHTML= ++a
//     },1000)
// }

// function stop(){

//     clearInterval(st)
// }

// function resett(){
//     a=0
//     h1.innerHTML = a
//     clearInterval(st)

// }
// -------------------------------------------------------------------------------

// hw is designing the counter 

// ---------------------------------------------------------------------------------------

// set setTimeout is a funtion which call the working any performance only for one time

// setTimeout(()=>{
//     alert("working ....")
// },3000)

// document.getElementById('img').setAttribute('src','form.webp')
// Timeout(()=>{
    
// },3000)

// setTimeout(()=>{
//     document.querySelector('form').style.display="block"
// },5000)

// -------------------------------------------------------------------------


// function fun1()
// setTimeout(()=>{
//     document.querySelector('#head').style.display="block"
// },5000)

// -------------------------------------------------------------------------------


// have 3 buttons start stop reset in the middle of the page


// function querySelectorAll
// let a = 0
// let h1 = document.querySelector('#count')
// let st
// function fun(){
//     st= setInterval(()=>{
//         h1.innerHTML= ++a
//     },1000)
// }

// function stop(){

//     clearInterval(st)
// }

// function resett(){
//     a=0
//     h1.innerHTML = a
//     clearInterval(st)

// }


// -------------------------------------------------------------------------------------------

// let count = 1
// let gap = setInterval(()=>{
  
//   alert(`This is {count} alert`+1)
//   count++
//   if(count > 5) {
//     (gap)
//   }
// },3000)


///ig fb snapchat telegram buttons if click on ig text occur like ig open will be red in color if user click on button fb text occure like fb open in blue if snapchat text will yellow

// -------------------------------------------------





//   function what(){
//     let a = document.getElementById('h1')
//     a.style.backgroundColor='green'
//     a.style.color='white'

// }

// function insta(){
//     let b = document.getElementById('h2')
//     b.style.backgroundColor='lightpink'
//     b.style.color='black'

// }

// function face(){
//     let c = document.getElementById('h3')
//     c.style.backgroundColor='royalblue'
//     c.style.color='white'

// }

// function snap(){
//     let d = document.getElementById('h4')
//     d.style.backgroundColor='yellow'
//     d.style.color='black'

// }

// function twit(){
//     let e = document.getElementById('h5')
//     e.style.backgroundColor='blue'
//     e.style.color='grey'

// }

// ==============================================================

// <button> should be targeted in js
// addeventlistener( , )
//     it have two paramenters (event,funtion)


// let three= document.getElementById('button')
// three.style.backgroundColor="blue"
// three.style.padding="5px"
// three.style.textAlign="center"

// ------------------------


// function twit(){
//     let e = document.getElementById('h5')
//     e.style.backgroundColor='blue'
//     e.style.color='grey'

// function snap(){
//     let e = document.getElementById('h5')
//     e.style.backgroundColor='blue'
//     e.style.color='grey'

// type of operators
// var a;
// typeof a;				// "undefined"

// a = "hello world";
// typeof a;				// "string"

// a = 42;
// typeof a;				// "number"

// a = true;
// typeof a;				// "boolean"

// a = null;
// typeof a;				// "object" -- weird, bug

// a = undefined;
// typeof a;				// "undefined"

// a = { b: "c" };
// typeof a;				// "object"