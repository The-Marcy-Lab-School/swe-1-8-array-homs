const path = require('path');
const ScoreCounter = require('score-tests');
const {
  logEachValue,
  getUserById,
  getEvenNumbers,
  getSquaredTotal,
  makePeopleHappy,
  hasOnlyEvenNumbers,
  doubleEveryNumber,
  getIndexOfApple,
  convertToBooleans,
  numberOfCharacters,
  anyGreaterThan10,
  roundAll,
  removeJerkFromCompany,
  onlyStrings,
  chosenCoordinates,
  stringsToLength,
  totalGreaterThanGiven,
  numberOfLongWords,
} = require('../src/from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('logEachValue - logs out each value of the given array with the right string, return nothing', () => {
    const letters = ['a', 'b', 'c'];
    const spy = jest.spyOn(console, 'log');
    const result = logEachValue(letters);
    expect(result).toBeUndefined();

    expect(spy).toHaveBeenNthCalledWith(1, 'Value: a, index: 0.');
    expect(spy).toHaveBeenNthCalledWith(2, 'Value: b, index: 1.');
    expect(spy).toHaveBeenNthCalledWith(3, 'Value: c, index: 2.');

    expect(letters).toEqual(['a', 'b', 'c']);

    const names = ['Zo', 'Maya', 'Carms'];
    const result2 = logEachValue(names);
    expect(result2).toBeUndefined();

    expect(spy).toHaveBeenNthCalledWith(4, 'Value: Zo, index: 0.');
    expect(spy).toHaveBeenNthCalledWith(5, 'Value: Maya, index: 1.');
    expect(spy).toHaveBeenNthCalledWith(6, 'Value: Carms, index: 2.');

    expect(names).toEqual(['Zo', 'Maya', 'Carms']);

    spy.mockRestore();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

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

  it('getEvenNumbers - returns a new array with only the even numbers from the given array', () => {
    expect(getEvenNumbers([])).toEqual([]);
    expect(getEvenNumbers([1])).toEqual([]);
    expect(getEvenNumbers([1, 0, -3])).toEqual([0]);
    expect(getEvenNumbers([2])).toEqual([2]);
    expect(getEvenNumbers([2, 4, 6])).toEqual([2, 4, 6]);
    expect(getEvenNumbers([2, 4, 6, 8, 10, 11])).toEqual([2, 4, 6, 8, 10]);
    expect(getEvenNumbers([-12, -2, 6, 8, 10, 12])).toEqual([-12, -2, 6, 8, 10, 12]);

    const untouched = [10, 21, 83];
    getEvenNumbers(untouched);
    expect(untouched).toEqual([10, 21, 83]);

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

  it('makePeopleHappy - sets the isHappy property of each person to true, returns nothing', () => {
    const people = [
      { name: 'Zo', isHappy: false },
      { name: 'Maya', isHappy: false },
      { name: 'Carms', isHappy: false },
    ];

    const result = makePeopleHappy(people);
    expect(result).toBeUndefined();

    expect(people).toEqual([
      { name: 'Zo', isHappy: true },
      { name: 'Maya', isHappy: true },
      { name: 'Carms', isHappy: true },
    ]);

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

  it('doubleEveryNumber - returns a new array with each number doubled', () => {
    expect(doubleEveryNumber([])).toEqual([]);
    expect(doubleEveryNumber([1])).toEqual([2]);
    expect(doubleEveryNumber([1, 0, 3])).toEqual([2, 0, 6]);
    expect(doubleEveryNumber([2, 4, -6])).toEqual([4, 8, -12]);
    expect(doubleEveryNumber([2, -4, 6, 8, 10])).toEqual([4, -8, 12, 16, 20]);

    const untouched = [10, 21, 83];
    doubleEveryNumber(untouched);
    expect(untouched).toEqual([10, 21, 83]);

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

  it('convertToBooleans - returns a new array with each value converted to a boolean', () => {
    expect(convertToBooleans([])).toEqual([]);
    expect(convertToBooleans([1])).toEqual([true]);
    expect(convertToBooleans([1, 0, -3])).toEqual([true, false, true]);
    expect(convertToBooleans(['', true, NaN, 'Hello', 0]))
      .toEqual([false, true, false, true, false]);
    expect(convertToBooleans([undefined, 0, null, '']))
      .toEqual([false, false, false, false]);
    expect(convertToBooleans([!true, !false, !false, !true]))
      .toEqual([false, true, true, false]);

    const untouched = [10, 21, 83];
    convertToBooleans(untouched);
    expect(untouched).toEqual([10, 21, 83]);

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

  it('chosenCoordinates - returns the first pair of coordinates that add up to the given total', () => {
    const coordinates = [[1, 2], [3, 4], [2, 1], [9, 15], [6, 5]];

    expect(chosenCoordinates(coordinates, 3)).toEqual([1, 2]);
    expect(chosenCoordinates(coordinates, 7)).toEqual([3, 4]);
    expect(chosenCoordinates(coordinates, 11)).toEqual([6, 5]);
    expect(chosenCoordinates(coordinates, 12)).toBeUndefined();

    expect(coordinates).toEqual([[1, 2], [3, 4], [2, 1], [9, 15], [6, 5]]);

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

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
