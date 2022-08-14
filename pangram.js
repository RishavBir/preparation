
// Check whether the str is pangram or not

/*
function isPangram(str) {

    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    
    for (let i of alphabets) {
        if (!str.includes(i)) {
            return false
        }
    }
    return true
}
console.log(isPangram("the quick brown fox jumps over the lazy dog"))   
*/

function pangram(str) {

    let arr = new Array(...str.toLowerCase())
    let set = new Set()
    for (let i of arr) {
        if (i.match(/^[a-z]+$/)) {
            if (!set.has(i))
                set.add(i)
        }
    }
    return set.size === 26 ? true : false
}

console.log(pangram("the quick brown fox jumps over the lazy dog"))