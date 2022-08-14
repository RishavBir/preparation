
// Find the maximum number from the array

function secondMax (arr){
    let first = -1, second = -1

    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] > first){
            second = first
            first = arr[i]
        } else if(arr[i] > second && arr[i] != first){
            second = arr[i]
        }
    }
   return second
    
}
console.log(secondMax([2,4,5,8,9]))   // 8




