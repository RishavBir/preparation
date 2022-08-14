

// COUNT unique elements

function countUniqueEle (arr) {
    
    let obj = {}, count =0

    for(let i in arr){
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
    }

    for(let i in obj){
        if(obj[i] == 1){
            count++
        }
    }
    return count
}

console.log(countUniqueEle([1,3,5,5,3,6,7,7]))   // 2 ....[1,6]