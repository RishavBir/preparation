
// Find the maximum number from the array

function findMax(arr) {
    let max = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(findMax([1, 4, 6, -8]))