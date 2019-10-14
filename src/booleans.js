const negate = a => {
  return !a;
};

const both = (a, b) => {
  if (a && b) {
    return true;
  } else {
    return false;
  }
};

const either = (a, b) => {
  if (a || b) {
    return true;
  } else {
    return false;
  }
};

const none = (a, b) => {
  if (!a && !b) {
    return true;
  } else {
    return false;
  }
};


const one = (a, b) => {
  if (a !== b) {
    return true
  } else {
    return false;
  }
};

const truthiness = a => {
  return Boolean(a);
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

const isOdd = a => {
  // your code here
};

const isEven = a => {
  // your code here
};

const isSquare = a => {
  // your code here
};

const startsWith = (char, string) => {
  // your code here
};

const containsVowels = string => {
  // your code here
};

const isLowerCase = string => {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
