

                                    // Find the ODD elements from the array


function oddElements (arr){

    let result = []

    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            result.push(arr[i])
        }
    }
    return result
}

console.log(oddElements([2,8,4,1,3,9,6]))