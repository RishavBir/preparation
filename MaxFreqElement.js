
                         // Find the maximum frequency element from the array

function maxOccurEle (arr) {
    
    let obj ={}, maxCount = 1
for(let i in arr){
    if(obj[arr[i]] == null){
        obj[arr[i]] = 1
    }else{
        obj[arr[i]]++
    }
    if(obj[arr[i]] > maxCount){
        arr[0] = arr[i]
        maxCount = obj[arr[0]]
    }
}
return arr[0]    // here i will get the number that has higest frequency.
// return maxCount    // here i get the count of the number of frequncy that the number has recieve.
}

console.log(maxOccurEle([2,2,4,6,6,6,6,6,7,9,3,9,9,9]))  // 6 


