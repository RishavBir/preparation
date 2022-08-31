
                                
                                // time complwxity is.......... O(N)

function searching(arr,value){

   for(let i=0; i<arr.length; i++){
    if(arr[i] === value){
        return i
    }
   }
   return -1
}

console.log(searching([2,7,9,5,6,1],6))    // 4