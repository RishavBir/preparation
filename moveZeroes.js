

// Move all the zeroes to the end of the array.

function moveZeroes(arr) {

    let left = 0, right = 1

    while (left < arr.length && right < arr.length) {

        if (arr[left] === 0 && arr[right] !== 0) {
            // swapping occurs

            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp  
            left++
            right++
        } else if (arr[left] === 0 && arr[right] === 0) {
            right++
        } else {
            left++
            right++
        }
    }
    return arr
}

console.log(moveZeroes([1, 4, 2, 0, 6, 7, 0, 5, 7]))   // [1,4,2,6,7,5,7,0,0]