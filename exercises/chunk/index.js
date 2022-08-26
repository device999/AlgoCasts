// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    var sizeArr = array.length;
    var resp = []; 
    var temporal = [];
    for(let x=0;x < sizeArr; x++){
        if((x+1) % size === 0){
            temporal.push(array[x]);
            resp.push([temporal]);
            temporal = [];
            continue;
        }
        temporal.push(array[x]);
    }
    if(temporal.length > 0){
        resp.push(temporal);
    }    
    return resp;
}

module.exports = chunk;
