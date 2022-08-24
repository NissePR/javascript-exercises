const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    
    let fNum1 = 0;
    let fNum2 = 0;
    let fNum3 = 0;
    for (let i = 0; i < num; ++i) {
        fNum3 = fNum1 + fNum2;
        if (i === 0) fNum3++;

        fNum1 = fNum2;
        fNum2 = fNum3;
    }

    return fNum3;
};

// Do not edit below this line
module.exports = fibonacci;
