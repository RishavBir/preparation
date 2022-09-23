

// CONVERT 2D ARRAY INTO 1D ARRAY


function flatternArray(arr) {

    let result = []

    for (let i of arr) {
        if (Array.isArray(i) === false) {
            result.push(i)
        } else {
            result = result.concat(flatternArray(i))
        }
    }
    return result
}

console.log(flatternArray([2, 4, 5, [6, 7], 8, [9, 11]]))    // [2,4,5,6,7,8,9,11]  








