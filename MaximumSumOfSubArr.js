

                                        // Find the Largest sum of subarray.

function largestSumOfSubArr (arr, size){

 let tempSum = 0, maxSum = 0
 
 if(arr.length < size){
   return null
 }
 for(let i = 0; i<size; i++){
   maxSum = maxSum + arr[i]
 }
 tempSum  = maxSum
 
 for(let i = size; i< arr.length; i++){
   tempSum = tempSum - arr[i - size] + arr[i]
   maxSum = Math.max(tempSum, maxSum)
 }
 return maxSum
}

console.log(largestSumOfSubArr([1,2,3,4,5,6,7,8,9],3))  // 24 ..... [7,8,9] 







