document.getElementById('head1').textContent = "from js 1"
document.getElementById('head2').textContent = "from js 2"
document.getElementById('head3').textContent = "from js 3"
document.getElementById('head4').textContent = "from js 4"
document.getElementById('head5').textContent = "from js 5"
document.getElementById('head6').textContent = "from js 6"

// we store in a variable through whic h we can use it multiple times

let a = document.getElementById('demo')
a.textContent ="another way"


// innerhtml command can change text as well as inner html also.

let b = document.getElementById('LILY')
b.innerHTML = "<i> LILY BHAI </i>"              // if we have to change only a single element we putting innerhtml
b.setAttribute('align','center')                // we can directly change body by applying directly set attribute

let c =document.getElementById('line')
c.innerHTML = "<u>this is priyesh</u>"

    
//              (function) (att.name)(att.value)
document.body.setAttribute('bgcolor','yellow')

document.getElementById('head').removeAttribute('style')   // we will remove any css and styling through javascript.


added additional funtion 
