
// Find the missing num from the array

function missingNum (arr){

    let result = [] 
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    for(let i = min; i < max; i++){
        if(arr.indexOf(i) < 0){
            result.push(i)
        }
    }
return result
}

console.log(missingNum([4,7,9,10,14]))
 

