const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',')
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const array2 = array.concat(element);
  return array2;
};

const removeNthElement = (index, array) => {
  let removedArray = array.splice(index, 1);
  return removedArray;
};

const numbersToStrings = numbers => {
  return numbers.map(String)
};

const uppercaseWordsInArray = strings => {
  const newArray = strings.map(element => element.toUpperCase());
  return newArray;
};

const reverseWordsInArray = strings => {
  // code goes here
};

const onlyEven = numbers => {
  const evenNumbers = numbers.filter(element => {
    if (element % 2 === 0) // returning zero here means we are even.
      return element;
  });
  return evenNumbers;
}

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(str => /^[aeiou]/i.test(str));
};

const removeSpaces = string => {
  return string.replace(/\s/g, "");
};

const sumNumbers = numbers => {
  return numbers.reduce(function (a, b) {
    return a + b
  }, 0);
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
