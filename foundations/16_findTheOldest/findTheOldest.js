const findTheOldest = function (array) {
  const sortedPeople = array.sort((a, b) => {
    if (typeof a.yearOfDeath === "undefined") {
      a.yearOfDeath = new Date().getFullYear();
    }
    if (typeof b.yearOfDeath === "undefined") {
      b.yearOfDeath = new Date().getFullYear();
    }
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });
  return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
