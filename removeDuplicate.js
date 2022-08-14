
// Remove Duplicate

                                  // USING NAIVE SOLUTION  ( NOT OPTIMIZED ONE)

/*
function removeDuplicates (arr){
 let result = []
 
 for(let i =0; i<arr.length; i++){
    if(result.indexOf(arr[i]) == -1){
        result.push(arr[i])
    }
 }
 return result
}

console.log(removeDuplicates([1,2,2,3,3,3,4,5,6,7,7]))   // [1,2,3,4,5,6,7]
*/

//////////////////////////////////////////////////////////////////////////////////////////

                             // USING OPTIMIZED SOLN OR WITHOUT IN-BUILT METHODS


function removeDuplicates(array) {
    let result = [], obj = {};
     
    for (let i = 0; i < array.length; i++) {
      if (obj[array[i]]) {
        continue;
      } else {
        result.push(array[i]);   // if it get new element , it will push it in result and set its value as true
        obj[array[i]] = true;
      }
    }
    return result;
  }
console.log(removeDuplicates([1,2,2,3,3,3,4,5,6,7,7]))      // [1,2,3,4,5,6,7]


///////////////////////////////////////////////////////////////////////////////////////////////////////

                              // REMOVE DUPLICATE USING IN-BUILT FUNCTIONS

/*
function removeDuplicates(arr){
return [...new Set(arr)]
}
console.log(removeDuplicates([1,2,2,3,3,3,4,5,6,7,7]))       // [1,2,3,4,5,6,7]
*/




