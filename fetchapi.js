// fetch(url,{method})
//by default get method it takes
// post 

// whatever we want to do is from fetch in api

// promise have three stages --: reject, pending ,fulfill
//it is an object
// .then is used in fullfill promise   syntax--: .then( callback function() )
// .catch is used in reject promise    syntax--: .catch( callback function() )
// //sync   // async
// it excecutes code line by line 
// it excecutes code which takkes less tym 
//async and await (do jism ek jahan)
// JSON(javascript object notation)
// ------------------------------------11/11/2025-----------------------------------------

// await always works and present with async

// async function access() {
//     let data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let res = await data.json()
//     console.log(res);
    
    
// }

// access()

// ----------------------------------------------------------


// async function access() {
//     let data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let res = await data.json()
//     let result = res.map((e)=>`
//     <tr>
//     <td> ${e.userID} </td>
//     <td> ${e.id} </td>
//     <td> ${e.title} </td>

    
//     `).join("")

//     document.querySelector(#showdata)
    
    

// }

// access()
