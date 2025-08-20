const path = require('path');
const ScoreCounter = require('score-tests');
const {
  getUserById,
  getSquaredTotal,
  hasOnlyEvenNumbers,
  getIndexOfApple,
  numberOfCharacters,
  anyGreaterThan10,
  roundAll,
  removeJerkFromCompany,
  onlyStrings,
  chosenCoordinates,
  stringsToLength,
  totalGreaterThanGiven,
  numberOfLongWords,
  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
} = require('../src/from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('getUserById - returns the user with the given id or undefined', () => {
    const users = [
      { id: 1, name: 'Zo' },
      { id: 2, name: 'Maya' },
      { id: 3, name: 'Carms' },
    ];

    expect(getUserById(users, 1)).toEqual({ id: 1, name: 'Zo' });
    expect(getUserById(users, 2)).toEqual({ id: 2, name: 'Maya' });
    expect(getUserById(users, 3)).toEqual({ id: 3, name: 'Carms' });
    expect(getUserById(users, 4)).toBeUndefined();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getIndexOfApple - returns the index of the apple object or -1', () => {
    const fruits = [
      { name: 'banana', price: 5 },
      { name: 'orange', price: 2 },
      { name: 'apple', price: 1 },
      { name: 'pear', price: 3 },
    ];

    expect(getIndexOfApple(fruits)).toBe(2);

    const moreFruits = [
      { name: 'banana', price: 5 },
      { name: 'orange', price: 2 },
      { name: 'pear', price: 3 },
    ];

    expect(getIndexOfApple(moreFruits)).toBe(-1);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getSquaredTotal - returns the sum of the squares of the given numbers', () => {
    expect(getSquaredTotal([1])).toBe(1);
    expect(getSquaredTotal([2, 3, 4])).toBe(29);
    expect(getSquaredTotal([3, 4, 5])).toBe(50);
    expect(getSquaredTotal([4, 5, 6])).toBe(77);
    expect(getSquaredTotal([10, 10, 10])).toBe(300);
    expect(getSquaredTotal([-10, -10, -10, -10, -1])).toBe(401);

    const untouched = [1, 2, 3];
    getSquaredTotal(untouched);
    expect(untouched).toEqual([1, 2, 3]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('hasOnlyEvenNumbers - returns true if all numbers are even, false otherwise', () => {
    expect(hasOnlyEvenNumbers([2])).toBe(true);
    expect(hasOnlyEvenNumbers([2, 4, 6])).toBe(true);
    expect(hasOnlyEvenNumbers([2, 4, 6, 8, 10])).toBe(true);
    expect(hasOnlyEvenNumbers([2, 4, 6, 8, 10, 12])).toBe(true);

    expect(hasOnlyEvenNumbers([])).toBe(false); // watch out!
    expect(hasOnlyEvenNumbers([2, 4, 3, 6])).toBe(false);
    expect(hasOnlyEvenNumbers([2, 4, 6, 8, 10, 11])).toBe(false);
    expect(hasOnlyEvenNumbers([2, 4, 6, 8, -3, 10, 12])).toBe(false);

    const untouched = [1, 2, 3];
    hasOnlyEvenNumbers(untouched);
    expect(untouched).toEqual([1, 2, 3]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('anyGreaterThan10 - returns true if any number is greater than 10, false otherwise', () => {
    expect(anyGreaterThan10([])).toBe(false);
    expect(anyGreaterThan10([1])).toBe(false);
    expect(anyGreaterThan10([1, 0, -3])).toBe(false);
    expect(anyGreaterThan10([11, 0, -3])).toBe(true);
    expect(anyGreaterThan10([10, 0, 3])).toBe(false);
    expect(anyGreaterThan10([14])).toBe(true);

    const untouched = [100];
    anyGreaterThan10(untouched);
    expect(untouched).toEqual([100]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('roundAll - returns a new array with each number rounded', () => {
    expect(roundAll([])).toEqual([]);
    expect(roundAll([1])).toEqual([1]);
    expect(roundAll([1, 0, -3])).toEqual([1, 0, -3]);
    expect(roundAll([1.2, 0.5, -3.8])).toEqual([1, 1, -4]);
    expect(roundAll([1.8, 0.5, -3.2])).toEqual([2, 1, -3]);
    expect(roundAll([100.1, 30.5, 0, 0, 0, 0.1, 12.5]))
      .toEqual([100, 31, 0, 0, 0, 0, 13]);

    const untouched = [10, 21, 83];
    roundAll(untouched);
    expect(untouched).toEqual([10, 21, 83]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('onlyStrings - returns a new array with only the strings from the given array', () => {
    const untouched = [10, 'Ha ha', 83];
    onlyStrings(untouched);
    expect(untouched).toEqual([10, 'Ha ha', 83]);

    expect(onlyStrings([])).toEqual([]);
    expect(onlyStrings([100.1, 30.5, 0, 0, 0, 0.1, 12.5]))
      .toEqual([]);
    expect(onlyStrings(['', true, NaN, 'Alright', 0, '']))
      .toEqual(['', 'Alright', '']);
    expect(onlyStrings([undefined, 0, null, '']))
      .toEqual(['']);
    expect(onlyStrings([12, 'Hello', false, 'there']))
      .toEqual(['Hello', 'there']);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('stringsToLength - returns a new array with the length of each string', () => {
    expect(stringsToLength([])).toEqual([]);
    expect(stringsToLength(['', 'Alright', '']))
      .toEqual([0, 7, 0]);
    expect(stringsToLength(['', 'Hello', 'there']))
      .toEqual([0, 5, 5]);
    expect(stringsToLength(['How', 'have', 'you', 'been', '?']))
      .toEqual([3, 4, 3, 4, 1]);

    const untouched = ['', 'Hello', 'there'];
    stringsToLength(untouched);
    expect(untouched).toEqual(['', 'Hello', 'there']);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('totalGreaterThanGiven - returns true if the total of the given numbers is greater than the given total, false otherwise', () => {
    expect(totalGreaterThanGiven([], 0)).toBe(false);
    expect(totalGreaterThanGiven([1], 0)).toBe(true);
    expect(totalGreaterThanGiven([1, 0, -3], 1)).toBe(false);
    expect(totalGreaterThanGiven([1, 1, 3, 5], 9)).toBe(true);
    expect(totalGreaterThanGiven([10, 10, 10, 10, 10], 10)).toBe(true);

    const untouched = [10, 21, 83];
    totalGreaterThanGiven(untouched, 0);
    expect(untouched).toEqual([10, 21, 83]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('numberOfLongWords - returns the number of words longer than 4 characters', () => {
    expect(numberOfLongWords([])).toBe(0);
    expect(numberOfLongWords(['', 'wow', 'ok'])).toBe(0);
    expect(numberOfLongWords(['Hello'])).toBe(1);
    expect(numberOfLongWords(['Hello', 'there'])).toBe(2);
    expect(numberOfLongWords(['Hello', 'there', 'friend'])).toBe(3);
    expect(numberOfLongWords(['Hello', 'there', 'friend', 'of', 'a', 'friend'])).toBe(4);
    expect(numberOfLongWords(['Hello', 'there', 'friend', 'of', 'a', 'friend', 'of', 'a', 'friend']))
      .toBe(5);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('numberOfCharacters - returns an object with the number of times each character appears', () => {
    expect(numberOfCharacters('')).toEqual({});
    expect(numberOfCharacters('a')).toEqual({ a: 1 });
    expect(numberOfCharacters('aa')).toEqual({ a: 2 });
    expect(numberOfCharacters('ab')).toEqual({ a: 1, b: 1 });
    expect(numberOfCharacters('ab ba')).toEqual({ a: 2, b: 2, ' ': 1 });
    expect(numberOfCharacters('abbab')).toEqual({ a: 2, b: 3 });
    expect(numberOfCharacters('Hello there!'))
      .toEqual({ H: 1, e: 3, l: 2, o: 1, ' ': 1, t: 1, h: 1, r: 1, '!': 1 });
    expect(numberOfCharacters('You good?'))
      .toEqual({ Y: 1, o: 3, u: 1, ' ': 1, g: 1, d: 1, '?': 1 });

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('removeJerkFromCompany - removes the jerk from the given array of people', () => {
    const people = [
      { name: 'Zo', personality: 'nice' },
      { name: 'Maya', personality: 'nice' },
      { name: 'Carms', personality: 'nice' },
      { name: 'Mike', personality: 'jerk' },
    ];

    removeJerkFromCompany(people);

    expect(people).toEqual([
      { name: 'Zo', personality: 'nice' },
      { name: 'Maya', personality: 'nice' },
      { name: 'Carms', personality: 'nice' },
    ]);

    const morePeople = [
      { name: 'Zo', personality: 'nice' },
      { name: 'Craig', personality: 'jerk' },
      { name: 'Travis', personality: 'nice' },
      { name: 'Joanna', personality: 'nice' },
    ];

    removeJerkFromCompany(morePeople);

    expect(morePeople).toEqual([
      { name: 'Zo', personality: 'nice' },
      { name: 'Travis', personality: 'nice' },
      { name: 'Joanna', personality: 'nice' },
    ]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('chosenCoordinates - returns the first pair of coordinates that add up to the given total', () => {
    const coordinates = [[1, 2], [3, 4], [2, 1], [9, 15], [6, 5]];

    expect(chosenCoordinates(coordinates, 3)).toEqual([1, 2]);
    expect(chosenCoordinates(coordinates, 7)).toEqual([3, 4]);
    expect(chosenCoordinates(coordinates, 11)).toEqual([6, 5]);
    expect(chosenCoordinates(coordinates, 12)).toBeUndefined();

    expect(coordinates).toEqual([[1, 2], [3, 4], [2, 1], [9, 15], [6, 5]]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('sortWords - returns a sorted list of words alphabetically', () => {
    const words1 = ['banana', 'apple', 'orange', 'strawberry'];
    const sortedWords = sortWords(words1);
    expect(sortedWords).toEqual(['apple', 'banana', 'orange', 'strawberry']);

    const words2 = ['b', 'd', 'a', 'c'];
    const sortedLetters = sortWords(words2);
    expect(sortedLetters).toEqual(['a', 'b', 'c', 'd']);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('sortWords - does not modify the original array', () => {
    const words1 = ['banana', 'apple', 'orange', 'strawberry'];
    sortWords(words1);
    expect(words1).toEqual(['banana', 'apple', 'orange', 'strawberry']);

    const words2 = ['b', 'd', 'a', 'c'];
    const sorted = sortWords(words2);
    expect(words2).toEqual(['b', 'd', 'a', 'c']);
    expect(sorted).toEqual(['a', 'b', 'c', 'd']);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('sortNumbers - returns a sorted a list of numbers in ascending order', () => {
    const nums1 = [10, 2, 5, 110, 1, 9, 11];
    const sortedNums1 = sortNumbers(nums1);
    expect(sortedNums1).toEqual([1, 2, 5, 9, 10, 11, 110]);

    const nums2 = [100, 50, 10, 5, 1];
    const sortedNums2 = sortNumbers(nums2);
    expect(sortedNums2).toEqual([1, 5, 10, 50, 100]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('sortNumbersBetter - sorts a list of numbers in ascending order by default', () => {
    const nums1 = [100, 20, 5, 10, 84];
    const sortedNums1 = sortNumbersBetter(nums1);
    expect(sortedNums1).toEqual([5, 10, 20, 84, 100]);

    const nums2 = [21, 82, 19, 10000, 12];
    const sortedNums2 = sortNumbersBetter(nums2);
    expect(sortedNums2).toEqual([12, 19, 21, 82, 10000]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('sortNumbersBetter - sorts a list of numbers in descending order if specified', () => {
    const nums1 = [100, 20, 5, 10, 84];
    const sortedNums1 = sortNumbersBetter(nums1, true);
    expect(sortedNums1).toEqual([100, 84, 20, 10, 5]);

    const nums2 = [21, 82, 19, 10000, 12];
    const sortedNums2 = sortNumbersBetter(nums2, true);
    expect(sortedNums2).toEqual([10000, 82, 21, 19, 12]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('sortUsersByOrder - sorts a list of users by "order" property', () => {
    const users = [
      { name: 'Alice', order: 2 },
      { name: 'Bob', order: 4 },
      { name: 'Charlie', order: 1 },
      { name: 'Diana', order: 3 },
    ];

    const usersSortedByOrder = sortUsersByOrder(users);
    expect(usersSortedByOrder).toEqual([
      { name: 'Charlie', order: 1 },
      { name: 'Alice', order: 2 },
      { name: 'Diana', order: 3 },
      { name: 'Bob', order: 4 },
    ]);

    // original users still unaffected
    expect(users).toEqual([
      { name: 'Alice', order: 2 },
      { name: 'Bob', order: 4 },
      { name: 'Charlie', order: 1 },
      { name: 'Diana', order: 3 },
    ]);

    const users2 = [{ name: 'Jason', order: 2 }];
    const usersSortedByOrder2 = sortUsersByOrder(users2);
    expect(usersSortedByOrder2).toEqual([{ name: 'Jason', order: 2 }]);

    const users3 = [{ name: 'Sara', order: 100 }];
    const usersSortedByOrder3 = sortUsersByOrder(users3);
    expect(usersSortedByOrder3).toEqual([{ name: 'Sara', order: 100 }]);

    const users4 = [];
    const usersSortedByOrder4 = sortUsersByOrder(users4);
    expect(usersSortedByOrder4).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('sortUsersByName - sorts a list of users by name', () => {
    const users = [
      { name: 'Alice', order: 22 },
      { name: 'Charlie', order: 28 },
      { name: 'Diana', order: 40 },
      { name: 'Bob', order: 32 },
    ];

    const usersSortedByName = sortUsersByName(users);
    expect(usersSortedByName).toEqual([
      { name: 'Alice', order: 22 },
      { name: 'Bob', order: 32 },
      { name: 'Charlie', order: 28 },
      { name: 'Diana', order: 40 },
    ]);

    // original users still unaffected
    expect(users).toEqual([
      { name: 'Alice', order: 22 },
      { name: 'Charlie', order: 28 },
      { name: 'Diana', order: 40 },
      { name: 'Bob', order: 32 },
    ]);

    const users2 = [{ name: 'Jason', order: 2 }];
    const usersSortedByName2 = sortUsersByName(users2);
    expect(usersSortedByName2).toEqual([{ name: 'Jason', order: 2 }]);

    const users3 = [{ name: 'Sara', order: 2 }, { name: 'sara', order: 1 }];
    const usersSortedByName3 = sortUsersByName(users3);
    expect(usersSortedByName3).toEqual([
      { name: 'Sara', order: 2 },
      { name: 'sara', order: 1 },
    ]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
