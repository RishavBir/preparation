
                              // Find the subarr whose sum is zero.............. 


 function sumZero(arr) {

  arr.sort((a,b)=>{
    return a-b
  })
  
  let left = 0, right = arr.length-1

  while(left <= right){
    let sum = arr[left] + arr[right]
    if(sum === 0){
      return [arr[left], arr[right]]
    }else if(sum > 0){
      right--
    }else{
      left++
    }
  }

 }
  console.log(sumZero([3, 8, 5, 1, 0, -3]))  // [-3,3]



