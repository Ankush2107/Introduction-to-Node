function linerSearch(arr, x) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x)
            return i
    }
    return NaN
}

function binarySearch(arr, x) {
    // Some codes
}

export default{
    linerSearch,
    binarySearch
}