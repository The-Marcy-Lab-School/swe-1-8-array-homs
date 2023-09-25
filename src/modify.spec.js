const path = require('path');
const ScoreCounter = require('score-tests');
const { filterVipUsers, multiplicativeAverage } = require('./modify');

const testSuiteName = 'Modify Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

/*
const filterVipUsers = (users, vipUserIdsSet) => {
  return users.filter((user) => vipUserIdsSet.has(user.id));
};

const multiplicativeAverage = (nums) => {
  return nums.reduce((total, num) => total * num, 1) / nums.length;
};
*/

describe(testSuiteName, () => {
  it('filterVipUsers - returns array of only vip users from given array without using a loop', () => {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Jim' },
    ];

    const vipUserIdsSet = new Set([1, 3, 5]);

    const actual = filterVipUsers(users, vipUserIdsSet);
    const vips1 = [{ id: 1, name: 'John' }, { id: 3, name: 'Jim' }];

    expect(actual).toEqual(vips1);

    const moreUsers = [
      { id: 7, name: 'John' },
      { id: 4, name: 'Jill' },
      { id: 5, name: 'Jack' },
    ];

    const vips2 = [{ id: 5, name: 'Jack' }];
    const actual2 = filterVipUsers(moreUsers, vipUserIdsSet);

    expect(actual2).toEqual(vips2);

    expect(filterVipUsers([], vipUserIdsSet)).toEqual([]);

    // make sure you aren't looping anymore
    expect(filterVipUsers.toString().includes('for')).toBe(false);
    expect(filterVipUsers.toString().includes('while')).toBe(false);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('multiplicativeAverage - returns the average of all numbers multiplied together without using a loop', () => {
    const nums1 = [2, 5];
    const actual1 = multiplicativeAverage(nums1);
    const expected1 = 5;

    expect(actual1).toBe(expected1);

    const nums2 = [2, 2, 2, 2];
    const actual2 = multiplicativeAverage(nums2);
    const expected2 = 4;

    expect(actual2).toBe(expected2);

    const nums3 = [10, 20, 30, 40, 50, 0];
    const actual3 = multiplicativeAverage(nums3);
    const expected3 = 0;

    expect(actual3).toBe(expected3);

    // make sure you aren't looping anymore
    expect(multiplicativeAverage.toString().includes('for')).toBe(false);
    expect(multiplicativeAverage.toString().includes('while')).toBe(false);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
