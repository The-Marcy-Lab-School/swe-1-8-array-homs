# Assignment 1.2.1 - Array Higher Order Methods
- [Before You Start](#before-you-start)
- [From Scratch](#from-scratch)
  - [Question 1: getUserById — find](#question-1-getuserbyid--find)
  - [Question 2: getIndexOfApple — findIndex](#question-2-getindexofapple--findindex)
  - [Question 3: getSquaredTotal — reduce](#question-3-getsquaredtotal--reduce)
  - [Question 4: hasOnlyEvenNumbers — every](#question-4-hasonlyevennumbers--every)
  - [Question 5: anyGreaterThan10 — some](#question-5-anygreaterthan10--some)
  - [Question 6: roundAll](#question-6-roundall)
  - [Question 7: onlyStrings](#question-7-onlystrings)
  - [Question 8: stringsToLength](#question-8-stringstolength)
  - [Question 9: totalGreaterThanGiven](#question-9-totalgreaterthangiven)
  - [Question 10: numberOfLongWords](#question-10-numberoflongwords)
  - [Question 11: numberOfCharacters](#question-11-numberofcharacters)
  - [Question 12: removeJerkFromCompany](#question-12-removejerkfromcompany)
  - [Question 13: chosenCoordinates](#question-13-chosencoordinates)
- [From Scratch Sorting Functions](#from-scratch-sorting-functions)
  - [Question 14: sortWords](#question-14-sortwords)
  - [Question 15: sortNumbers](#question-15-sortnumbers)
  - [Question 16: sortNumbersBetter](#question-16-sortnumbersbetter)
  - [Question 17: sortUsersByOrder](#question-17-sortusersbyorder)
  - [Question 18: sortUsersByName](#question-18-sortusersbyname)
- [Modify](#modify)


## Before You Start
This assignment is all about training you to recognize the types of situations that will call for specific array methods. **DO NOT USE ANY LOOPS HERE**. Loops can obviously be used in the real world, but we want you to recognize when an array method would be more readable/handy.

Every question should be answered with one of the following array methods:
* `array.forEach`
* `array.filter`
* `array.map`
* `array.find`
* `array.findIndex`
* `array.reduce`
* `array.every`
* `array.some`

Some might even require more methods that you learned last week (like splice or push). But this assignment is all about building familiarity with the array methods. Fluency is the goal here.

Challenge yourself by seeing if you can implement these in one or two lines using chaining.

## From Scratch

_**REMEMBER: NOT A SINGLE LOOP SHOULD BE USED IN THIS ASSIGNMENT. ONLY ARRAY METHODS.**_

For the first few, we'll give you a hint. For the last few, you'll need to figure it out on your own!

### Question 1: getUserById — find
Given an array of user objects and a number representing an "id", return the object with the given `id` property. If an object isn't found, return `undefined`.

`find` is the best choice here because we want to return the first value in the array that matches a particular criteria.

**Usage Example:**  
```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

getUserById(users, 2);
// → { id: 2, name: "Bob" }

getUserById(users, 3);
// → undefined
```

### Question 2: getIndexOfApple — findIndex
Given an array of food objects, return the number index of the food item with a `name` of "apple". If it is not found, return `-1`.

`findIndex` is the best choice here because we want to return the index of the first value in the array that matches a particular criteria (and not the value itself).

**Usage Example:**  
```js
const foods = [
  { name: "banana" },
  { name: "apple" },
  { name: "orange" }
];

getIndexOfApple(foods);
// → 1

getIndexOfApple([{ name: "pear" }]);
// → -1
```

### Question 3: getSquaredTotal — reduce
Given an array of numbers, return the sum of all the numbers squared. Meaning, square each number before adding it to the total.

Do not modify the original array.

`reduce` is the best choice here because we want to return a single value that we generate through the process of looking at every value in the array. You _could_ use `forEach` as well with a `sum` variable but `reduce` is more elegant.

**Usage Example:**  
```js
getSquaredTotal([1, 2, 3]);
// → 14 (1*1 + 2*2 + 3*3)
```


### Question 4: hasOnlyEvenNumbers — every
Given an array of numbers, return `true` if every number is even, otherwise return `false`.

Do not modify the original array.

**Usage Example:**  
```js
hasOnlyEvenNumbers([2, 4, 6]);
// → true

hasOnlyEvenNumbers([2, 3, 4]);
// → false
```

### Question 5: anyGreaterThan10 — some

Given an array of numbers, return `true` if any of the numbers are greater than 10. Otherwise, return `false`.

Do not modify the original array.

**Usage Example:**  
```js
anyGreaterThan10([1, 5, 7, 12]);
// → true

anyGreaterThan10([1, 2, 3]);
// → false
```
### Question 6: roundAll

**For the remaining questions, you must identify which array method to use!**

Given an array of numbers, return a new array where every number is rounded to the nearest integer.

Do not modify the original array.

**Usage Example:**  
```js
roundAll([1.2, 3.5, 4.8]);
// → [1, 4, 5]
```

### Question 7: onlyStrings
Given an array of values, return a new array where only strings are kept.

Do not modify the original array.

**Usage Example:**  
```js
onlyStrings([1, "hello", true, "world"]);
// → ["hello", "world"]
```

### Question 8: stringsToLength
Given an array of strings, return a new array where each string is replaced by its length.

Do not modify the original array.

**Usage Example:**  
```js
stringsToLength(["apple", "hi", "banana"]);
// → [5, 2, 6]
```

### Question 9: totalGreaterThanGiven
Given an array of numbers and a number, return `true` if the sum of the array is greater than the given number. Otherwise, return `false`.

Do not modify the original array.

**Usage Example:**  
```js
totalGreaterThanGiven([1, 2, 3], 5);
// → true  (sum is 6)

totalGreaterThanGiven([1, 1, 1], 5);
// → false (sum is 3)
```

### Question 10: numberOfLongWords
Given an array of words, return the number of words that are longer than 4 characters. If no words are longer than 4 characters, return 0.

Do not modify the original array.

**Usage Example:**  
```js
numberOfLongWords(["hi", "hello", "world", "js"]);
// → 2  ("hello" and "world")

numberOfLongWords(["cat", "dog"]);
// → 0
```

### Question 11: numberOfCharacters
Given a string return an object with the count of each character in the string. All characters must be tracked, even spaces. Meaning, don't skip over spaces. Be sure to check the tests on this one to make sure you're getting the right object output.

**Usage Example:**  
```js
numberOfCharacters("hello world");
// → { h: 1, e: 1, l: 3, o: 2, " ": 1, w: 1, r: 1, d: 1 }
```

### Question 12: removeJerkFromCompany
Given an array of people objects, mutate it so that the person with the `personality` property of "jerk" is removed from the array. Return nothing.

**Usage Example:**  
```js
const company = [
  { name: "Alice", personality: "nice" },
  { name: "Bob", personality: "jerk" }
];

removeJerkFromCompany(company);

console.log(company);
// → [ { name: "Alice", personality: "nice" } ]
```

### Question 13: chosenCoordinates

Given an array of coordinate arrays and a number, select the first coordinate pair that adds up to the specified number. Return `undefined` if no pair adds up to the number.

Do not modify the original array.

**Usage Example:**  
```js
chosenCoordinates([[1, 2], [3, 7], [4, 5]], 10);
// → [3, 7]

chosenCoordinates([[1, 2], [2, 2]], 10);
// → undefined
```

## From Scratch Sorting Functions

Let's switch it up. Let's work with a built in HOF (`array.sort`) and pass in (or not pass in) the callbacks ourselves!

### Question 14: sortWords
`sortWords` takes in an array of words and must sort them in ascending order (remember: ascend => start small get big, descending => start big get small). For the purposes of letters, ascending alphabetical means start with "a." You must return the new sorted array.

Do not modify the passed in array! Be careful, is that `.sort`'s default behavior?

**Usage Example**

```js
const unsortedNames = ['Charlie', 'Debbie', 'Alice', 'Bob'];
const sortedNames = sortWords(unsortedNames);

console.log(sortedNames); // ['Alice', 'Bob', 'Charlie', 'Debbie']
console.log(unsortedNames); // ['Charlie', 'Debbie', 'Alice', 'Bob']
```

### Question 15: sortNumbers
`sortNumbers` takes in an array of numbers and returns an array with the numbers sorted in ascending order. Do not modify the original array!

**Usage Example**

```js
const unsortedNums = [1, 100, 14, 3, 2, 11];
const sortedNums = sortNumbers(unsortedNums);

console.log(sortedNums); // [1, 2, 3, 11, 14, 100]
console.log(unsortedNums); // [1, 100, 14, 3, 2, 11]
```

### Question 16: sortNumbersBetter
`sortNumbersBetter` is just like the above function, but now we can pass in a second boolean argument, `isDescending`. It will determine if we want to sort in ascending or descending order. If the second argument is `true`, sort descending. If the second argument is `false`, sort ascending (this is the default behavior). Do not modify the original array!

**Usage Example**

```js
const unsortedNums = [1, 100, 14, 3, 2, 11];
const bigToSmall = sortNumbersBetter(unsortedNums, true);
console.log(bigToSmall); // [100, 14, 11, 3, 2, 1]

const smallToBig = sortNumbersBetter(unsortedNums); // default param
console.log(smallToBig); // [1, 2, 3, 11, 14, 100]
```

### Question 17: sortUsersByOrder
Let's make something a little more interesting. Now instead of sorting primitives, let's sort an array of objects! You will do this a bunch in the real world, often data is more complex than simple primitives can convey. But let's start simple! You'll have to sort an array of users that look like this:

```js
const users = [ { name: 'Alice', order: 1 }, /* .. */ ];
```

You must sort them by the `order` property, always ascending. Do not modify the original array!

```js
const users = [
  { name: 'Alice', order: 1 },
  { name: 'Bob', order: 3 },
  { name: 'Charlie', order: 2 },
  { name: 'Debbie', order: 4 },
];

const sortedUsers = sortUsersByOrder(users);
console.log(sortedUsers);
// [
//   { name: 'Alice', order: 1 },
//   { name: 'Charlie', order: 2 },
//   { name: 'Bob', order: 3 },
//   { name: 'Debbie', order: 4 },
// ]

```

### Question 18: sortUsersByName
And finally, `sortUsersByName`, which uses the same user objects from the previous function, but sorts by the `name` property instead. This is tricky! The default `.sort` behavior does do alphabetical orders, but you're comparing objects! You can't just use the default behavior, you have to use a callback. Keep your wits about you, and remember how `.sort`'s callback actually sorts things (negative, 0, positive). And of course, do not modify the original array!

## Modify
Looks like someone didn't get the memo about the new array methods in `modify.js`. They've written some code that uses loops. Refactor the code to use the array methods you learned today. Make sure to use the right one though!

Your only guide for this section is the existing code and the tests in `modify.spec.js`. This is very much how real world refactors work, take the opportunity to practice!
