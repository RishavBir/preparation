

// find SUBARRAY WITH EQUAL SUM....



function findSubArrWithEqualSum (arr){

    let present = new Set()

    for(let i = 1; i<arr.length; i++){
        let sum = arr[i] + arr[i - 1]

        if(present.has(sum)){
            return true
        }else{
            present.add(sum)
        }
    }
    return false
}

console.log(findSubArrWithEqualSum([1,2,3,4,5,6]))

