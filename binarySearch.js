

// find the value from the array using binary search

function Search (arr, value){

 arr.sort((a,b)=>{
    return a-b
 })
 let left = 0, right = arr.length-1
 
 while(left <= right){
    let mid = Math.floor((left+right)/2)

    if(arr[mid] < value){
        left = mid + 1
    }else if(arr[mid] > value){
        right = mid - 1
    }else{
        return mid
    }
 }
 return -1
}

console.log(Search([1,5,2,3,6,7], 5))   // 3