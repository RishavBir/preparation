

// SWAPPING TWO NUMBERS WITHOU USING EXTRA VARIABLE....

function swapping (arr){

    for(let i= 0; i<arr.length; i++){
        for(let j = 0; j<arr.length-1; j++){
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    return arr
}

console.log(swapping([2,3]))



