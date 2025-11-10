// local storage is the storage present in server 
// mainly 3-20 mb can be saved
// it is used as user


//keypoint:- stored in key and value format 
//format type:-- string
//bydefault cant be deleted but can be deleted forcefully

// -----------------------------imp funtions used------------------------

//to convert any object or element in string format use function --->  JSON.stringyfy
//used parse to convert any string in object

//   4 main functions:--   
                //       setItem()    --> save
                //       getItem ()   --> fetch 
                //      removeItem()  --> at time one element
                //      clear()       --> delete (permanently)

            //     localStorage.setItem("username","nikhil")
            //     localStorage.setItem("userage",90)

            //     localStorage.setItem("city","bhopal")
            //     localStorage.setItem("area",56)

            //     localStorage.setItem("town","shanj")
            //     localStorage.setItem("state",90)

            //   //getitems-------

            //     localStorage.getItem("state")
            //     localStorage.getItem("state")

            // //removeitem()----------
            // localStorage.removeItem("city")

            // // localStorage.clear()

            // // ---------------------------------------
    //         let person = {
    //             name:"raj",age:45,city:"bhopal"
    //         }

    //     localStorage.setItem("userdata",JSON.stringify(person))

    //    let vl=  localStorage.getItem("userdata")
    //    let vb=  JSON.parse(localStorage.getItem("userdata"))                  //used parse to convert any string in object
    //    console.log(vl);
    //    console.log(vl.name);
       

    //    let per1 ={
    //     name:"raj",age:45,city:"bhopal"
    //    }
    //    localStorage.setItem("userdata".Json)

    // ---------------------------------------------------------------------------

// let name = "ritik singh"
// let city= "BHOPAL"
// // console.log(name[4])             //for finding index value in string
// let newname= name.toUpperCase()
// console.log(newname)

// console.log(city.toLowerCase());   // 

// let name1 = " Ritik Singh  "
// console.log(name1.trim());              // it trims the spaces
//                                         // match and include are also similar functions
                                        // trimstart  trims the spaces before the words
                                        // trimend()
                                        //charat


    let faculty = "by Qasim sir"
    let st ="this is \n js class" + " " + faculty

    // template literals

    let st1=`THIS IS SJAVSCRIPT 
    class ${faculty}`

    console.log(st1)

    //API 



    //fetch(url,{method})             // fetch is used to call any url or API

    //http can be get 

    // methods = get,post,delete,put,patch 

              //access,insert,del,update

              //many more function are to be used of string
              //more question for practice h.w