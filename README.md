# Assignment 1.2.1 - Array Higher Order Methods
- [Before You Start](#before-you-start)
- [Question 1: logEachValue — forEach](#question-1-logeachvalue--foreach)
- [Question 2: getEvenNumbers — filter](#question-2-getevennumbers--filter)
- [Question 3: getUserById — find](#question-3-getuserbyid--find)
- [Question 4: getIndexOfApple — findIndex](#question-4-getindexofapple--findindex)
- [Question 5: doubleEveryNumber — map](#question-5-doubleeverynumber--map)
- [Question 6: convertToBooleans — map](#question-6-converttobooleans--map)
- [Question 7: getSquaredTotal — reduce](#question-7-getsquaredtotal--reduce)
- [Question 8: makePeopleHappy — forEach](#question-8-makepeoplehappy--foreach)
- [Question 9: hasOnlyEvenNumbers — every](#question-9-hasonlyevennumbers--every)
- [Question 10: anyGreaterThan10](#question-10-anygreaterthan10)
- [Question 11: roundAll](#question-11-roundall)
- [Question 12: onlyStrings](#question-12-onlystrings)
- [Question 13: stringsToLength](#question-13-stringstolength)
- [Question 14: totalGreaterThanGiven](#question-14-totalgreaterthangiven)
- [Question 15: numberOfLongWords](#question-15-numberoflongwords)
- [Question 16: numberOfCharacters](#question-16-numberofcharacters)
- [Question 17: removeJerkFromCompany](#question-17-removejerkfromcompany)
- [Question 18: chosenCoordinates](#question-18-chosencoordinates)
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

# From Scratch

_**REMEMBER: NOT A SINGLE LOOP SHOULD BE USED IN THIS ASSIGNMENT. ONLY ARRAY METHODS.**_

For the first few, we'll give you a hint. For the last few, you'll need to figure it out on your own!

## Question 1: logEachValue — forEach
Given an array of values, you must print each value next to it's index in a single string like: `Value: [VALUE], index: [INDEX].`

`forEach` is the best choice here because we want to execute a side-effect (printing) for every single value in the array

**Usage Example:**  
```js
logEachValue(["a", "b", "c"]);
// Console output:
// Value: a, index: 0
// Value: b, index: 1
// Value: c, index: 2
```

## Question 2: getEvenNumbers — filter
Given an array of numbers, return a new array of only the even numbers from the array.

`filter` is the best choice here because we want to return all of the values in the array that match a particular criteria.

**Usage Example:**  
```js
getEvenNumbers([1, 2, 3, 4, 5, 6]);
// → [2, 4, 6]
```

## Question 3: getUserById — find
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

## Question 4: getIndexOfApple — findIndex
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

## Question 5: doubleEveryNumber — map
Given an array of numbers, return a _new_ array where every element is doubled.

Do not modify the original array.

`map` is the best choice here because we want to return a new array containing a changed version of every value in the original array.

**Usage Example:**  
```js
doubleEveryNumber([1, 2, 3]);
// → [2, 4, 6]
```


## Question 6: convertToBooleans — map
Given an array of values, return a new array where each value is converted to a boolean. That means that if the value is truthy, the new value should be `true` and if the value is falsy, the new value should be `false`.

Do not modify the original array.

`map` is again the best choice here because we want to return a new array containing a changed version of every value in the original array.

**Usage Example:**  
```js
convertToBooleans([0, 1, "", "hello", null]);
// → [false, true, false, true, false]
```

## Question 7: getSquaredTotal — reduce
Given an array of numbers, return the sum of all the numbers squared. Meaning, square each number before adding it to the total.

Do not modify the original array.

`reduce` is the best choice here because we want to return a single value that we generate through the process of looking at every value in the array. You _could_ use `forEach` as well with a `sum` variable but `reduce` is more elegant.

**Usage Example:**  
```js
getSquaredTotal([1, 2, 3]);
// → 14 (1*1 + 2*2 + 3*3)
```

## Question 8: makePeopleHappy — forEach
Given an array of people objects, mutate it so that each object has their `isHappy` property set to `true`. return nothing.

`forEach` is the best choice here because we DO want to mutate each value in the original array. If we were to use `map`, the original array would remain unchanged. 

Remember, `forEach` is best when we want a side effect to occur for every value in the array.

**Usage Example:**  
```js
const people = [
  { name: "Alice", isHappy: false },
  { name: "Bob", isHappy: false }
];

makePeopleHappy(people);

console.log(people);
// → [
//   { name: "Alice", isHappy: true },
//   { name: "Bob", isHappy: true }
// ]
```

## Question 9: hasOnlyEvenNumbers — every
Given an array of numbers, return `true` if every number is even, otherwise return `false`.

Do not modify the original array.

**Usage Example:**  
```js
hasOnlyEvenNumbers([2, 4, 6]);
// → true

hasOnlyEvenNumbers([2, 3, 4]);
// → false
```

## Question 10: anyGreaterThan10

**For the remaining questions, you must identify which array method to use!**

Given an array of numbers, return `true` if any of the numbers are greater than 10. Otherwise, return `false`.

Do not modify the original array.

**Usage Example:**  
```js
anyGreaterThan10([1, 5, 7, 12]);
// → true

anyGreaterThan10([1, 2, 3]);
// → false
```
## Question 11: roundAll
Given an array of numbers, return a new array where every number is rounded to the nearest integer.

Do not modify the original array.

**Usage Example:**  
```js
roundAll([1.2, 3.5, 4.8]);
// → [1, 4, 5]
```

## Question 12: onlyStrings
Given an array of values, return a new array where only strings are kept.

Do not modify the original array.

**Usage Example:**  
```js
onlyStrings([1, "hello", true, "world"]);
// → ["hello", "world"]
```

## Question 13: stringsToLength
Given an array of strings, return a new array where each string is replaced by its length.

Do not modify the original array.

**Usage Example:**  
```js
stringsToLength(["apple", "hi", "banana"]);
// → [5, 2, 6]
```

## Question 14: totalGreaterThanGiven
Given an array of numbers and a number, return `true` if the sum of the array is greater than the given number. Otherwise, return `false`.

Do not modify the original array.

**Usage Example:**  
```js
totalGreaterThanGiven([1, 2, 3], 5);
// → true  (sum is 6)

totalGreaterThanGiven([1, 1, 1], 5);
// → false (sum is 3)
```

## Question 15: numberOfLongWords
Given an array of words, return the number of words that are longer than 4 characters. If no words are longer than 4 characters, return 0.

Do not modify the original array.

**Usage Example:**  
```js
numberOfLongWords(["hi", "hello", "world", "js"]);
// → 2  ("hello" and "world")

numberOfLongWords(["cat", "dog"]);
// → 0
```

## Question 16: numberOfCharacters
Given a string return an object with the count of each character in the string. All characters must be tracked, even spaces. Meaning, don't skip over spaces. Be sure to check the tests on this one to make sure you're getting the right object output.

**Usage Example:**  
```js
numberOfCharacters("hello world");
// → { h: 1, e: 1, l: 3, o: 2, " ": 1, w: 1, r: 1, d: 1 }
```

## Question 17: removeJerkFromCompany
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

## Question 18: chosenCoordinates

Given an array of coordinate arrays and a number, select the first coordinate pair that adds up to the specified number. Return `undefined` if no pair adds up to the number.

Do not modify the original array.

**Usage Example:**  
```js
chosenCoordinates([[1, 2], [3, 7], [4, 5]], 10);
// → [3, 7]

chosenCoordinates([[1, 2], [2, 2]], 10);
// → undefined
```

## Modify
Looks like someone didn't get the memo about the new array methods in `modify.js`. They've written some code that uses loops. Refactor the code to use the array methods you learned today. Make sure to use the right one though!

Your only guide for this section is the existing code and the tests in `modify.spec.js`. This is very much how real world refactors work, take the opportunity to practice!
