

                            // Find the EVEN ELEMENTS from the array.


// function evenElements (arr){

//     let result = []

//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] % 2 === 0){
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// console.log(evenElements([2,8,3,6,5,1]))








// function sumZero (arr){


//     arr.sort((a,b)=>{
//         return a-b
//     })

//     let  left = 0, right = arr.length - 1

//     while(left <= right){

//         let sum = arr[left] + arr[right]

//        if(sum === 0){
//         return [arr[left], arr[right]]
//        }else if(sum < 0 ){
//         left++
//        }else{
//         right--
//        }
// }
// return arr
// }

// console.log(sumZero([-1,9,8,-8,7]))





// function moveZeroes (arr){

//     let left = 0, right = 1

//     while(left < arr.length && right < arr.length){
//         if(arr[left] === 0 && arr[right] !== 0){

//             // swapping

//             let temp = arr[left]
//             arr[left] = arr[right]
//             arr[right] = temp
//             left++
//             right++
//         }else if(arr[left] === 0  && arr[right] === 0){
//             right ++
//         }else{
//             left++
//             right++
//         }
//     }
//     return arr
// }

// console.log(moveZeroes([2,0,7,0,6,0,8,4]))    // [2,7,6,8,4,0,0,0]



// function primeEle(arr){

//     let result = []

//     arr.forEach((ele)=>{
        
//         let factor = 0

//         for(let i = 0; i<= ele; i++){

//             if(ele % i === 0){
//                 factor++
//             }
//         }

//         if(factor === 2){
//             result.push(ele)
//         }
//     })
//     return result
// }

// console.log(primeEle([3,6,7,8,9,10]))





// function flatternArr (arr){

//     let result = []

//     for(let i of arr){
//         if(Array.isArray(i)== false){
//             result.push(i)
//         }else{
//             result = result.concat(flatternArr(i))
//         }
//     }
//     return result
// }

// console.log(flatternArr([2,3,[5,6,7],8,9]))  // [2,3,5,6,7,8,9]




function missingElement (arr){

    let result = []
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    

    for(let i = min; i< max; i++){
        if(arr.indexOf(i) < 0){
            result.push(i)
        }
    }
    return result
}

console.log(missingElement([3,6,7,9,11])) // [4,5,8,10]

