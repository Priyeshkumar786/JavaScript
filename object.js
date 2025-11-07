// object is unordered
//its collection of multiple element
//it store in the pair of key and value
// it denotes in {} not indexing

// let emp = {
//     name = "priyesh",
//     age = 23,
//     place = "bhopal"
// }
// console.log(emp.name)

// emp.age = 12                  //we can add  edit as well
// console.log(emp)


// let detail = {
//     name : "priyesh",
//     friend1:"tanish",
//     friend2:"taresh",
//     friend3:"krish",
//     friend4:"smriti",
//     friend5:"abhijeet",
//     friend6:"rohit",
//     friend7:"narayan",
//     friend8:"devansh",
//     friend9:"sonu",
//     friend10:"lucky",
// }
// console.log(detail)

// let emp = {
//     name:"priyesh",
//     emp_salary : [10000,13000,21000,28000,28500,5000],
//     add : function(){
//         return 2+3
//     },
//     emp_account : {
//         bank_name : "sbi",
//         acc_no: 123456558524
//     }
// }
// -------------------------------------------------------------------------------
// console.log(emp.add())       dot notation
//console.log(ob["name"])       bracket notation

// let ob = {
//     "full name" : "TV",
//     age : 29

// }
// console.log(ob["full name"])
// -------------------------------------------------------------

// let stname= prompt("enter name")
// let stage= prompt("enter age")
// let stcontact= prompt("enter contact")
// let student={
//     stname : "",
//     stage : "",
//     stcontact : ""
// }
// console.log(student)
// -----------------------------------------------------------------

//for in loop basically used to access the keys of object

// let stude4nt = {
//     stname:"priyesh",
//     stage:"22",
//     stcontact:"12345"
// }
// for (let k in student){
//     console.log(k)
//     console.log(student[k])                    //it prints the value nd said to be bracket notation with by using of for in loop

// }

// //functions

// // for printing the keys of any object:--

// let ky = Object.keys(student)                     // object O must be capital
// console.log(ky)

// // for printing the values of any object:--
// let vl=Object.values(student)
// console.log(vl)

// in  array it there should be stored of one person data
// array of object

// let student = [
//     {
//         name:priyesh,
//         age:22,
//         contact : 123456

//     },
//     {
//         name:taresh,
//         age:20,
//         contact : 123456

//     },
//     {
//         name:tanish,
//         age:22,
//         contact : 123456

//     },
//     {
//         name:smriti,
//         age:22,
//         contact : 123456

//     },
//       {
//         name:smriti,
//         age:22,
//         contact : 123456

//     }
    
// ]
// console.log(student)

// ------------------------------------------------------------------------------------------------------------------------------

//Map() is a high order function which is accesable as result in which access the new element of array and put in the new array
// Array.map(()=>{

//     return                                // map function is the function which callbacks any function
// })             //syntax

// let ar = [{
//     name:"priyesh",
//     age:"10"
// },
// {
//     name:"taresh",
//     age:"23"

// }]
// console.log(res)



// let res = ar.map((e)=>{
//     // return e.age>=18
//     return e.age+" "+e.name
// })
// console.log(res)
// it returns the value as bullion value             //this function always returns the value

// ------------------------------------------------------------
