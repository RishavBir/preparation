
// count the number of elements......the duplicate will consider only one time

function countElement (arr){

    let count = 0
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i + 1]){
            count++
        }
    }
    
  return count
}
console.log(countElement([1,1,2,3,4,4]))  // 4 .... [1,2,3,4]



