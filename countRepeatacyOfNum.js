

// function print(arr) {

//     let count = {}

//     for (let i of arr) {
//        count[i] = count[i] ? count[i] + 1:1  
//     }
//     return count
// }
// console.log(print([2, 6, 5, 8, 9, 3, 9, 5, 3, 35, 3, 2, 1, 6, 2, 2, 6, 2, 6, 8, 2, 7, 55, 45, 23, 98, 5, 68]))\



///////////////////////////////////////////////////////////////////////////



function count(str){
    let obj ={}

    for(let i in str){
        obj[str[i]]=(obj[str[i]]||0)+1
    }
    return obj
}
console.log(count([2, 6, 5, 8, 9, 3, 9, 5, 3, 35, 3, 2, 1, 6, 2, 2, 6, 2, 6, 8, 2, 7, 55, 45, 23, 98]))

