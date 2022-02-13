// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function (cardNumber) {
  var isPrefix4 = cardNumber.slice(0, 1) === '4';
  var isPrefix34 = cardNumber.slice(0, 2) === '34';
  var isPrefix37 = cardNumber.slice(0, 2) === '37';
  var isPrefix38 = cardNumber.slice(0, 2) === '38';
  var isPrefix39 = cardNumber.slice(0, 2) === '39';
  var isPrefix51 = cardNumber.slice(0, 2) === '51';
  var isPrefix52 = cardNumber.slice(0, 2) === '52';
  var isPrefix53 = cardNumber.slice(0, 2) === '53';
  var isPrefix54 = cardNumber.slice(0, 2) === '54';
  var isPrefix55 = cardNumber.slice(0, 2) === '55';
  var isPrefix65 = cardNumber.slice(0, 2) === '65';
  var isPrefix644 = cardNumber.slice(0, 3) === '644';
  var isPrefix645 = cardNumber.slice(0, 3) === '645';
  var isPrefix646 = cardNumber.slice(0, 3) === '646';
  var isPrefix647 = cardNumber.slice(0, 3) === '647';
  var isPrefix648 = cardNumber.slice(0, 3) === '648';
  var isPrefix649 = cardNumber.slice(0, 3) === '649';
  var isPrefix4903 = cardNumber.slice(0, 4) === '4903';
  var isPrefix4905 = cardNumber.slice(0, 4) === '4905';
  var isPrefix4911 = cardNumber.slice(0, 4) === '4911';
  var isPrefix4936 = cardNumber.slice(0, 4) === '4936';

  var isPrefix5018 = cardNumber.slice(0, 4) === '5018';
  var isPrefix5020 = cardNumber.slice(0, 4) === '5020';
  var isPrefix5038 = cardNumber.slice(0, 4) === '5038';
  var isPrefix6011 = cardNumber.slice(0, 4) === '6011';
  var isPrefix6304 = cardNumber.slice(0, 4) === '6304';
  var isPrefix6333 = cardNumber.slice(0, 4) === '6333';
  var isPrefix6759 = cardNumber.slice(0, 4) === '6759';
  var isPrefix564182 = cardNumber.slice(0, 6) === '564182';
  var isPrefix633110 = cardNumber.slice(0, 6) === '633110';

  var isNumLen12 = cardNumber.length === 12;
  var isNumLen13 = cardNumber.length === 13;
  var isNumLen14 = cardNumber.length === 14;
  var isNumLen15 = cardNumber.length === 15;
  var isNumLen16 = cardNumber.length === 16;
  var isNumLen17 = cardNumber.length === 17;
  var isNumLen18 = cardNumber.length === 18;
  var isNumLen19 = cardNumber.length === 19;

  var isCU3DigRange =
    Number(cardNumber.slice(0, 3)) >= 624 &&
    Number(cardNumber.slice(0, 3)) <= 626;
  var isCU4DigRange =
    Number(cardNumber.slice(0, 4)) >= 6282 &&
    Number(cardNumber.slice(0, 4)) <= 6288;
  var isCU6DigRange =
    Number(cardNumber.slice(0, 6)) >= 622126 &&
    Number(cardNumber.slice(0, 6)) <= 622925;

  if (isPrefix38 || isPrefix39) {
    if (isNumLen14) {
      return "Diner's Club";
    }
  }

  if (isPrefix34 || isPrefix37) {
    if (isNumLen15) {
      return 'American Express';
    }
  }

  if (isPrefix4) {
    if (
      !cardNumber.startsWith('4903') &&
      !cardNumber.startsWith('4905') &&
      !cardNumber.startsWith('4911') &&
      !cardNumber.startsWith('4936')
    ) {
      if (isNumLen13 || isNumLen16 || isNumLen19) {
        return 'Visa';
      }
    }
  }

  if (isPrefix51 || isPrefix52 || isPrefix53 || isPrefix54 || isPrefix55) {
    if (isNumLen16) {
      return 'MasterCard';
    }
  }

  if (
    isPrefix6011 ||
    isPrefix644 ||
    isPrefix645 ||
    isPrefix646 ||
    isPrefix647 ||
    isPrefix648 ||
    isPrefix649 ||
    isPrefix65
  ) {
    if (isNumLen16 || isNumLen19) {
      return 'Discover';
    }
  }

  if (isPrefix5018 || isPrefix5020 || isPrefix5038 || isPrefix6304) {
    if (
      isNumLen12 ||
      isNumLen13 ||
      isNumLen14 ||
      isNumLen15 ||
      isNumLen16 ||
      isNumLen17 ||
      isNumLen18 ||
      isNumLen19
    ) {
      return 'Maestro';
    }
  }

  if (isCU6DigRange || isCU3DigRange || isCU4DigRange) {
    if (isNumLen16 || isNumLen17 || isNumLen18 || isNumLen19) {
      return 'China UnionPay';
    }
  }

  if (
    isPrefix4903 ||
    isPrefix4905 ||
    isPrefix4911 ||
    isPrefix4936 ||
    isPrefix564182 ||
    isPrefix633110 ||
    isPrefix6333 ||
    isPrefix6759
  ) {
    if (isNumLen16 || isNumLen18 || isNumLen19) {
      return 'Switch';
    }
  }
};
