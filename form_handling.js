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

// function fun(){
//     let name = (document.querySelector('#1').value)                   
//     let age = (document.querySelector('#2').value)
//     let city = (document.querySelector('#3').value)
//     let course = (document.querySelector('#4').value)
//     let college = document.querySelector('#5').value

//     document.querySelector('#k1').innerHTML=name
//     document.querySelector('#k2').innerHTML=age
//     document.querySelector('#k3').innerHTML=city
//     document.querySelector('#k4').innerHTML=course
//     document.querySelector('#k5').innerHTML=college
 
//     return false
// }


// wap to take 5 input from user name,age,city,course,college and print print the datas below the form

// ------------------------------------------------------------------------------------

function validate(){
    let name = document.querySelector('#name').value 
    let address = document.querySelector('#address').value 
    let age = document.querySelector('#age').value 
    let batch = document.querySelector('#batch').value 
    let class = document.querySelector('#class').value 

    if(name == ""){
        document.querySelector('#error').innerHTML = "please input name"
        alert("please input name")
        document.querySelector('#name').focus()
        return false
    }

    
    else if(address == ""){
        alert("please input address")
        document.querySelector('#address').focus()
        return false
    }
    
    else if(age==""){
        alert("please input age")
        document.querySelector('#age').focus()    //  isNaN its is the function through which inputbox takes only any value in number nor any string.
        return false
    }

    else if(isNaN(age)){
         alert("please input age")
        document.querySelector('#age').focus()    
    }
    
    else if(batch==""){
        alert("please input batch")
        document.querySelector('#batch').focus()
        return false
    }
    else if{
        alert("please input class")
        document.querySelector('#class').focus()
        return false
    }
       
    
}
