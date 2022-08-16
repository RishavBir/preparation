

// find the value from the array using binary search ........ O(logN)

function Search (arr, value){

 arr.sort((a,b)=>{
    return a-b
 })

 let mid = Math.floor(arr.length/2)
 let left = 0, right = arr.length-1

 while(left <= right){
    if(arr[mid] < value){
        left = mid + 1
    }else if(arr[mid] > value){
        right = mid + 1
    }else{
        return mid
    }
 }
 return arr
}

console.log(Search([1,5,2,3,6,7], 5))   // 3