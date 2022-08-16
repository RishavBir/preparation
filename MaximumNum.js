
// Find the maximum number from the array

function findMax(arr) {
   let largest = -Infinity

   for(let i = 0; i<arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i]
    }
   }
   return largest
}
console.log(findMax([1, 4, 6, -8]))