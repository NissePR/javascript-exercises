const palindromes = function (string) {
    let newString = '';
    for (let i = 0; i < string.length; ++i) {
        const char = string.charAt(i);
        if (char.toLowerCase() != char.toUpperCase() || char.codePointAt(0) > 127) {
            newString += char.toLowerCase();
        }
    }

    const reversed = newString.split('').reverse().join('');    
    return newString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
