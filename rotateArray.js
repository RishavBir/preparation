
                                            
                                            // ROTATE ARRAY
                                            

function rotateArr (arr,size){
let  j = arr.length - size % arr.length
let array = [...arr]

for(let i = 0; i< arr.length; i++){
    if( j === arr.length){
        j = 0
    }
    arr[i] = array[j]
    j++
}
return arr
}

console.log(rotateArr([2,7,9,4,8,6], 3))