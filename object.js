// object is unordered
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

let emp = {
    name:"priyesh",
    emp_salary : [10000,13000,21000,28000,28500,5000],
    add : function(){
        return 2+3
    },
    emp_account : {
        bank_name : "sbi",
        acc_no: 123456558524
    }
}
console.log(emp.add())
