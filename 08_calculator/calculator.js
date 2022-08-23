const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
    return nums.reduce((total, num) => total + num, 0);
};

const multiply = function(nums) {
    return nums.reduce((total, num) => total * num, 1);
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
    if (num === 0) return 1;

    let sum = num;
	for (let i = 1; i < num; i++) {
        sum *= num - i;
    }

    return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
