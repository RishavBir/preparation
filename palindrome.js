
// Check whether the given word is palindrome or not

function isPalindrome (str){
   
    let mid = Math.floor(str.length/2)

    for(let i=0; i < mid; i++){
        if(str[i] !== str[str.length - i -1]){
            return false
        }
    }
    return true
}
console.log(isPalindrome("madam"))




