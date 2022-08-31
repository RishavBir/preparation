

                            // Find the EVEN ELEMENTS from the array.


function evenElements (arr){

    let result = []

    for(let i = 0; i< arr.length; i++){
        if(arr[i] % 2 === 0){
            result.push(arr[i])
        }
    }
    return result
}

console.log(evenElements([2,8,3,6,5,1]))