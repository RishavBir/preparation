
//                           sort the array using BUBBLE SORT method

function sorting(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //SWAPPING
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
               //  [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

console.log(sorting([6, 3, 7, -2, -6, 9]))    // [-6,-2,3,6,7,9]



