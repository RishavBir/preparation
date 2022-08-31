
// Find the maximum frequency element from the array


function maxFreqElement(arr) {

    let obj = {}, maxCount = 0

    for (let i in arr) {
        if (obj[arr[i]] == null) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
        if (obj[arr[i]] > maxCount) {
            arr[0] = arr[i]
            maxCount = obj[arr[0]]
        }
    }
    return arr[0]
    // return maxCount
}

console.log(maxFreqElement([2, 2, 3, 4, 4, 4, 4, 4, 5, 6, 6]))  // 4




