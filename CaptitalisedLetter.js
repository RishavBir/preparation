

// Capitalised the first letter of the word

function capitalised (arr){

   let result = []
   if(arr.length === 0){
    return []
   }

   let capital = arr[0][0].toUpperCase() + arr[0].slice(1)
   result.push(capital)
   return result.concat(capitalised(arr.slice(1)))
   
}
console.log(capitalised(["rishav","ricky","mitali"]))



//////////////////////////////////////////////////////////////////////////////////////////////////////

                    // Capitalise the first letter of the every word of the string.

function capitalisedAlgo (str){
    const arr= str.split(" ")         
    const emptyArr = []

    for (let i=0; i<arr.length; i++){
        const word  = arr[i]             
        emptyArr.push(word[0].toUpperCase() + word.slice(1).toLowerCase())     
    }
return emptyArr.join(" ")
}

console.log(capitalisedAlgo("rishav is a good boy"))


////////////////////////////////////////////////////////////////////////////////////////////////////////////


