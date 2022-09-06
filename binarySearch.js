

// find the value from the array using binary search ........ O(logN)

function search(arr, value) {

    arr.sort((a,b)=>{
        return a-b
    })

    let left = 0, right = arr.length - 1

    while (left <= right) {

        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === value) {
            return mid
        } else if (arr[mid] < value) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

console.log(search([1, 2, 6, 3, 7], 6))   // 3

