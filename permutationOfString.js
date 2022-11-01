
// print all the combination of string having same length

 function Permutations (string){

    if (string.length < 2 ){
      return string
    }
  
    let result = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  
      for (let i of Permutations(remainingChars)){
        result.push(char + i) }
    }
    return result
  }

  console.log(Permutations("let"))







