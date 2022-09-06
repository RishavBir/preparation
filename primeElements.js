

// find the PRIME ELEMENTS from the array


function primeEle(arr) {

    let result = []

    arr.forEach(element => {

        let factor = 0
        for (let i = 0; i <= element; i++) {
            if (element % i === 0) {
                factor++
            }
        }
        if (factor === 2) {
            result.push(element)
        }
    })
    return result
}

console.log(primeEle([3, 7, 5, 6, 8, 4, 11]))   // [3,7,5,11]