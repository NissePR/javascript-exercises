// my solution ---
// const removeFromArray = function(array, ...args) {
//     for (let i = array.length; i >= 0; --i) {
//         for (let j = 0; j < args.length; ++j) {
//             if (array[i] === args[j]) {
//                 array.splice(i, 1);
//             }
//         }
//     }

//     return array;
// };

// pro solution ---
const removeFromArray = function(...args) {
    array = args[0];
    newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    })

    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
