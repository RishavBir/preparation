
// Check whether the subarray are valid or not

function validSubArray (arr,subArr){

    if(arr == subArr){
        return true
    }
    let i = 0
    for(let j = 0; j< arr.length; j++){
        if(subArr[i] == arr[j]){
            i++
        }
    }
    return i == subArr.length
}

console.log(validSubArray([1,2,3,4,5,6], [1,5]))  // true,