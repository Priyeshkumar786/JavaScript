// function fun(){
//     let num1 = parseInt(document.querySelector('#num1').value)
//     let num2 = parseInt(document.querySelector('#num2').value)

//     alert(num1+num2)
// }

// ---------------------------------------------------------------------



// function fun(){
//     let num1 = parseInt(document.querySelector('#num1').value)                   //input parseint for converting integeral value
//     let num2 = parseInt(document.querySelector('#num2').value)

//     document.querySelector('#result').innerHTML = num1+num2
//     return false
// }

function fun(){
    let name = (document.querySelector('#1').value)                   
    let age = (document.querySelector('#2').value)
    let city = (document.querySelector('#3').value)
    let course = (document.querySelector('#4').value)
    let college = document.querySelector('#5').value

    document.querySelector('#k1').innerHTML=name
    document.querySelector('#k2').innerHTML=age
    document.querySelector('#k3').innerHTML=city
    document.querySelector('#k4').innerHTML=course
    document.querySelector('#k5').innerHTML=college
 
    return false
}


// wap to take 5 input from user name,age,city,course,college and print print the datas below the form
