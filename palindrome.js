
// Check whether the given word is palindrome or not

function isPalindrome (str){
    let middle = Math.floor(str.length/2)

    for(let i=0 ; i<middle; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false
        }
    }
    return true
}
console.log(isPalindrome("madam"))




