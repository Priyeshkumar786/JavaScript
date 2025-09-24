// -------------------------------------------------------------------------------------------------------------------------------------------- 
// ==============================================program to check greater number ====================================================




// let greatest1=parseInt(prompt("enter num"))
// let greatest2=parseInt(prompt("enter num"))

// if (greatest1>greatest2)
// {console.log("1 is greater")}

// else {
//     console.log("num 2 is greater")
// }


// num=parseInt(prompt("enter num"))

// if (num%2==0)
// {
//     console.log("num is even")
// }

// else {
//     console.log("odd")
// }

// -------------------------------------------------------------------------------------------------------------------------------------------- 
// ==============================================program to check Even or Odd ====================================================


// let num1=parseInt(prompt("enter num"))
// let num2=parseInt(prompt("enter num"))
// let num3=parseInt(prompt("enter num"))

// if (num2%2==0)
//      {
//          console.log(num1*num2*num3)
//     }
   


// else 
//     {console.log(num1+num2+num3)}

// -------------------------------------------------------------------------------------------------------------------------------------------- 
// =========================================================  Syntax ====================================================



// if(condition){
//     //
// }

// else if(condition){

//     //                              (can be multiple times)
// }

// else{
//     //

// }

// -------------------------------------------------------------------------------------------------------------------------------------------- 
// ==============================================Q no is positive or negative check ====================================================

// num=parseInt(prompt("enter num"))
// if (num>0){
//     console.log("num is positive")
// }

// else if (num==0){
//     console.log("num is N")
// }

// else {
//     console.log("num is negative")
// }


// num1=parseInt(prompt("enter num1"))
// num2=parseInt(prompt("enter num2"))

// if (num1>num2){
//     console.log("num1 is greater")
// }

// else if (num1==num2){
//     console.log("num1 is equal")
// }

// else {
//     console.log("num2 is greater")
// }




// ==================================HW=======================================
// user input of 5 sub find avg and provide grade





// 

// -------------------------------------------------------------------------------------------------------------------------------------------- 
// ==============================================program to check (total marks,average,grade)by input of 5 sub marks ====================================================




// let sub1 = parseInt(prompt("Enter Marks 1"))
// let sub2 = parseInt(prompt("Enter Marks 2"))
// let sub3 = parseInt(prompt("Enter Marks 3"))
// let sub4 = parseInt(prompt("Enter Marks 4"))
// let sub5 = parseInt(prompt("Enter Marks 5"))

// let subjects = console.log(sub1,sub2,sub3,sub4,sub5)

// let total = sub1+sub2+sub3+sub4+sub5
// console.log("total marks : ",total)

// let avg = (total/500)*100
// console.log("Total Average of all subjects are : ",avg)

// let grade 

// if (avg>=90 && avg<=100)
// console.log("Grade 'A' ")

// else if (avg>=80 && avg<=90)
//   console.log("Grade 'B' ")

// else if (avg>50)
//   console.log("Grade 'C' ")

// else 
//   console.log("Fail")



// done question of even and odd
// done question of greatest number among two numbers
// done question of postive and negative numbers
// done questions of 5 input marks through which we find total marks and its average

// ==========================================nested if=====================================================

// if (condition){
//   //
//   if(condition){
//     //
//   }
//   else {
//     //
//   }


// }
// else{

//   //
// }


// let age = parseInt(prompt("Enter age : "))
// if(age>=18){
//   b=parseInt(prompt("press 1 for indian"))
//   if (b==1){
//     alert("eligible for voting")
//   }
//   else{
//     alert("not eligible for voting")
//   }

// }
// else{
//   alert("you are underage")
// }

// ===================================================================================================================

// num= parseInt(prompt("enter num"))

// if (num>0){
//   if (num%2==0){
//     console.log(num*num)
//   }
//   console.log("num is positive")
//   else{
//     console.log("num is odd",3.14*num*num)
//   }


// }

// else{
//   console.log("num")
// }


// // ================================loops in javaScript=================================

// 1.do while
// 2. while
// 3. for
// 4. for in
// 5. for Of
// 6. for each 

// =================

// do while {

//   //


// } while (condition)

//   ===============
//   while (condition)
//   {

//     //
//   }



// let a=1
// do{
//   document.write("tv")
//   a++
// }while(a<10)


//   let a=1
// do{
//   console.log(a)
//   a++
// }while(a<16)

//   let a=10
// do{
//   console.log(a)
//   a--
// }while(a>=1)

// #enter num take continue input till get 0





// do {
//   num = parseInt(prompt("Enter a number ): "));
// } while (num !== 0);

// console.log("pragram off");



// let == local Scope 
// const == local scope 

// var == global 



// write a program to print a table of any number

// let num =  parseInt(prompt("white table number"))
// let a=1
// while (a<=10){

//   console.log(num,"x",a,"=",num*a)

//   a++
// }

// write a program to print sum of all numbers between 15 to 1

// let num=15
// let sum=0
// while (num>=1){
//   sum=sum+num
// console.log(sum)
//   num--

// }



// ======================================================For loop================================================================

    //  (syntax)
// for  (Init ; condition ;  increment / decrement){}


  // code//
  //in for loop increment decrement takes place after execution done



//write a program to print sum of all odd numbers between 1-15


// sum=0
// for (a=1;a<=15,a++)
//   {
//   if (a%2!=0){
//     sum+=a
//   }
//   }
  
// console.log(sum)

let sum = 0;

for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {   // check odd number
        sum += i;
    }
}

console.log("Sum of odd numbers between 1 and 15 is:", sum);
