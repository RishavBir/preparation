
// Check whether they are anagram or not

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let obj1 = {}, obj2 = {}
    
    for (let i in str1) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1
    }
    for (let i in str2) {
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1
    }
    for (let i in obj1) {
        if (obj1[i] !== obj2[i]) {
            return "They are not Anagram"
        }
    }
    return "They are Anagram"
}
console.log(isAnagram("heart", "earth"))




