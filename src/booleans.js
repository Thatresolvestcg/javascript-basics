const negate = a => {
  return !a;
};

const both = (a, b) => {
  if (a && b) {
    return true;
  }
  return false;
};

const either = (a, b) => {
  if (a || b) {
    return true;
  }
  return false;
};

const none = (a, b) => {
  if (!a && !b) {
    return true;
  }
  return false;
};

const one = (a, b) => {
  if (a !== b) {
    return true;
  }
  return false;
};

const truthiness = a => {
  return Boolean(a);
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  return false;
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  }
  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  }
  return false;
};

const isOdd = a => {
  if (a % 2 === 1) {
    return true;
  }
  return false;
};

const isEven = a => {
  if (a % 2 === 0) {
    return true;
  }
  return false;
};

const isSquare = a => {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }
  return false;
};

const startsWith = (char, string) => {
  if (string.startsWith(char)) {
    return true;
  }
  return false;
};

const containsVowels = string => {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  vowels.forEach(vowel => {
    if (string.toLowerCase().includes(vowel)) {
      vowelCount += 1;
    }
  });
  return vowelCount > 0;
};

const isLowerCase = string => {
  const lowerString = string.toLowerCase();
  if (string === lowerString) {
    return true;
  }
  return false;
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
