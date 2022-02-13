/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
describe('Introduction to Mocha Tests - READ ME FIRST', function () {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it("Doesn't throw an error, so it doesn't fail", function () {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function (num) {
      return num / 2 === 0;
    };
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function () {
    var even = function (num) {
      return num % 2 === 0;
    };

    if (even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe("Diner's Club", function () {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function () {
    if (detectNetwork('38345678901234') !== "Diner's Club") {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function () {
    if (detectNetwork('39345678901234') !== "Diner's Club") {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function () {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function (isTrue) {
    if (isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function () {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function () {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function () {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/

  var should = chai.should();

  it('has a prefix of 4 and a length of 13', function () {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function () {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function () {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function () {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function () {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 52 and a length of 16', function () {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 53 and a length of 16', function () {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function () {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 55 and a length of 16', function () {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
});

describe('Discover', function () {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();
  var cardLengths = [16, 19];
  cardLengths.forEach(function (cardLength) {
    var DiscoverPrefixes = [
      '6011',
      '644',
      '645',
      '646',
      '647',
      '648',
      '649',
      '65',
    ];

    DiscoverPrefixes.forEach(function (prefix) {
      it(
        'has a prefix of ' + prefix + ' and a length of ' + cardLength,
        function () {
          // console.log('i is:', cardLength);
          // console.log(prefix + (Array(cardLength - prefix.length).fill(0)).join(''));
          detectNetwork(
            prefix +
              Array(cardLength - prefix.length)
                .fill(0)
                .join('')
          ).should.equal('Discover');
        }
      );
    });
  });
});

describe('Maestro', function () {
  // Write full test coverage for the Maestro card
  var should = chai.should();
  var cardLengths = [12, 13, 14, 15, 16, 17, 18, 19];

  cardLengths.forEach(function (cardLength) {
    var maestroPrefixes = ['5018', '5020', '5038', '6304'];

    maestroPrefixes.forEach(function (prefix) {
      it(
        'has a prefix of ' + prefix + ' and a length of ' + cardLength,
        function () {
          // console.log('i is:', cardLength);
          // console.log(prefix + (Array(cardLength - prefix.length).fill(0)).join(''));
          detectNetwork(
            prefix +
              Array(cardLength - prefix.length)
                .fill(0)
                .join('')
          ).should.equal('Maestro');
        }
      );
    });
  });
});

describe('China UnionPay', function () {
  var should = chai.should();
  var cardLengths = [16, 17, 18, 19];
  var chinaPrefixesArr = [];

  for (var i = 622126; i <= 622925; i++) {
    chinaPrefixesArr.push(i.toString());
  }

  for (var j = 624; j <= 626; j++) {
    chinaPrefixesArr.push(j.toString());
  }

  for (var k = 6282; k <= 6288; k++) {
    chinaPrefixesArr.push(k.toString());
  }

  cardLengths.forEach(function (cardLength) {
    chinaPrefixesArr.forEach(function (prefix) {
      it(
        'has a prefix of ' + prefix + ' and a length of ' + cardLength,
        function () {
          detectNetwork(
            prefix +
              Array(cardLength - prefix.length)
                .fill(0)
                .join('')
          ).should.equal('China UnionPay');
        }
      );
    });
  });
});
describe('Switch', function () {
  var should = chai.should();
  var cardLengths = [16, 18, 19];

  cardLengths.forEach(function (cardLength) {
    var switchPrefixes = [
      '4903',
      '4905',
      '4911',
      '4936',
      '564182',
      '633110',
      '6333',
      '6759',
    ];

    switchPrefixes.forEach(function (prefix) {
      it(
        'has a prefix of ' + prefix + ' and a length of ' + cardLength,
        function () {
          // console.log('i is:', cardLength);
          // console.log(prefix + (Array(cardLength - prefix.length).fill(0)).join(''));
          detectNetwork(
            prefix +
              Array(cardLength - prefix.length)
                .fill(0)
                .join('')
          ).should.equal('Switch');
        }
      );
    });
  });
});
