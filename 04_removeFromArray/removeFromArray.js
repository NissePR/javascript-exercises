const removeFromArray = function(array, ...params) {
    for (let i = array.length; i >= 0; --i) {
        for (let j = 0; j < params.length; ++j) {
            if (array[i] === params[j]) {
                array.splice(i, 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
