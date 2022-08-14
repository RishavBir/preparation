
function buzzing(arr){

    let array = []
    for(let i=1; i<=arr.length; i++){
     if(i%2 ===0 && i%5 ===0){
        array.push("Fizbuzz")
     }
      else if(i%2 === 0){
        array.push("Fizz")
     }
     else if(i%5 === 0){
        array.push("buzz")
     }else{
        array.push(i)
     }
}
return array
}
console.log(buzzing([1,2,3,4,5,6,7,8,9,10]))








