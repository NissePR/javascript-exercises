const findTheOldest = function(array) {
    const oldest = array.reduce((oldest, current) => {
        if (oldest.yearOfDeath == undefined) {
            oldest.yearOfDeath = (new Date().getFullYear());
        }

        if (current) {
            const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
            const currentAge = current.yearOfDeath - current.yearOfBirth;

            if (oldestAge < currentAge) oldest = current;
        }

        return oldest;
    })

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
