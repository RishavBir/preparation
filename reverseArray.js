

                                            // REVERSE OF AN ARRAY


function reverseArr (arr){

    let result = []

    while(arr.length){
        result.push(arr.pop())
    }
    return result
}
console.log(reverseArr([1,3,4,5,2]))


