
// Find the maximum number from the array

function secondMax (arr){
  let first = -1, second = -1

  for(let i = 0; i < arr.length; i++){
    if(first < arr[i]){
        second = first
        first = arr[i]
    }else if(second < arr[i] && first != arr[i]){
        second  = arr[i]
    }
  }
  return second
}
console.log(secondMax([2,4,5,10,9]))   // 8




