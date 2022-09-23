

                                    // Find the Unique Element from the array

 function uniqueEle(arr) {

   let obj = {}, result =[]

   for(let i in arr){
    obj[arr[i]] = (obj[arr[i]] || 0) + 1
   }

   for(let i in obj){
    if(obj[i] === 1){
        result.push(i)
    }
   }
   return result
}

console.log(uniqueEle([1, 3, 4, 3, 5, 6, 6]))    // [1,4,5]







