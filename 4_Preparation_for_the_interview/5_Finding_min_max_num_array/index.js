const minMax = (arr) => {
    console.log([Math.min(...arr), Math.max(...arr)]);
}

minMax([2, 9, 10, 25, 47, 4, 1]); //[ 1, 47 ]
minMax([2, 1]); //[ 1, 2 ]
minMax([1]); //[ 1, 1 ]