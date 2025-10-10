// ===========================================================H W================================================================

// have to put 10 items put green , padding 12px ,text white in every even numbers of items




// let list = document.getElementById("itemlist");

// for (let i = 1;i<=10;i++){
//     let li = document.createElement("li");
//     li.textContent = "ITEM " + i;

//     if(i%2===0){
//         li.style.backgroundColor = "green";
//         li.style.color = "white";
//         li.style.padding= "12px"
//     }

//     list.appendChild(li);
// }


// ======================================================================================================
                                //    08/10/25
                            // ---------------


//     let num = parseInt(prompt("enter number : "))

//     console.log("Original value:", num);

//     num++;  // increment
//     console.log("After increment:", num);

//     num--;  // decrement
//     console.log("After decrement:", num);


// let count=0
// document.getElementById='main'

// function increment(){
//     count++;
//     main.innerHTML=count;
// }

// function decrement(){
//     if(count>0){
//         count--;
//         main.innerHTML=count;
//     }
// }



// var n = 0
// var count = document.getElementById('count')
// function inc(){
//     count.innerHTML = ++n
// }

// function dec(){
//     if (n>0){
//         count.innerHTML = --n
//     }
//     else{
//         alert("not less than zero")
//     }
// }


// -------------------------------------------------------09/10/2025-------------------------------------------------------------


 function showImage(device) {
      let img = document.getElementById("deviceImage");

      if (device === "mobile") {
        img.src = "mobile.jpeg";
      } else if (device === "tablet") {
        img.src = "tablet.jpg"
      } else if (device === "laptop") {
        img.src = "laptop.jpeg";
      }

      img.alt = device + " image";
    }

    document.getElementById("deviceImage").style.height="250px"
