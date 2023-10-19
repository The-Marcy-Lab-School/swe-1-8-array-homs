# Assignment 1.2.1 - Array Higher Order Methods
- [Assignment 1.2.1 - Array Higher Order Methods](#assignment-121---array-higher-order-methods)
  - [Before You Start](#before-you-start)
- [From Scratch](#from-scratch)
  - [Question 1: logEachValue](#question-1-logeachvalue)
  - [Question 2: getUserById](#question-2-getuserbyid)
  - [Question 3: getEvenNumbers](#question-3-getevennumbers)
  - [Question 4: getSquaredTotal](#question-4-getsquaredtotal)
  - [Question 5: makePeopleHappy](#question-5-makepeoplehappy)
  - [Question 6: hasOnlyEvenNumbers](#question-6-hasonlyevennumbers)
  - [Question 7: doubleEveryNumber](#question-7-doubleeverynumber)
  - [Question 8: getIndexOfApple](#question-8-getindexofapple)
  - [Question 9: convertToBooleans](#question-9-converttobooleans)
  - [Question 10: numberOfCharacters](#question-10-numberofcharacters)
  - [Question 11: anyGreaterThan10](#question-11-anygreaterthan10)
  - [Question 12: roundAll](#question-12-roundall)
  - [Question 13: removeJerkFromCompany](#question-13-removejerkfromcompany)
  - [Question 14: onlyStrings](#question-14-onlystrings)
  - [Question 15: chosenCoordinates](#question-15-chosencoordinates)
  - [Question 16: stringsToLength](#question-16-stringstolength)
  - [Question 17: totalGreaterThanGiven](#question-17-totalgreaterthangiven)
  - [Question 18: numberOfLongWords](#question-18-numberoflongwords)
- [Modify](#modify)
- [Short answers](#short-answers)


## Before You Start
This assignment is all about training you to recognize the types of situations that will call for specific array methods. **DO NOT USE ANY LOOPS HERE**. Loops can obviously be used in the real world, but we want you to recognize when an array method would be more readable/handy.

Every question should be answered with one of the array methods you learned today. Some might even require more methods that you learned last week (like splice or push). But this assignment is all about building familiarity with the array methods. Fluency is the goal here.

_**REMEMBER: NOT A SINGLE LOOP SHOULD BE USED IN THIS ASSIGNMENT. ONLY ARRAY METHODS.**_

*All* of these can be answered in about one or two lines. That's how powerful these methods are!


# From Scratch
These prompts should be pretty straightforward, but they are getting a little vague. That's because we want you to start relying not on these prompts, but the actual tests themselves in `from-scratch.spec.js`. We know they look scarier than prompts, but that how you code at a company. The better you get at reading tests, the more you'll stand out from the Jr. Dev crowd.

## Question 1: logEachValue
Given an array of values, you must console log the value and the index in a single string like: `Value: [VALUE], index: [INDEX].`

Do not modify the original array.

## Question 2: getUserById
Given and array of user objects and a number, return the object with the given `id` property. If an object isn't found, return `undefined`.

Do not modify the original array.

## Question 3: getEvenNumbers
Given an array of numbers, return a new array of only the even numbers from the array.

Do not modify the original array.

## Question 4: getSquaredTotal
Given an array of numbers, return the sum of all the numbers squared. Meaning, square each number before adding it to the total.

Do not modify the original array.

## Question 5: makePeopleHappy
Given an array of people objects, mutate it so that each object has their `isHappy` property set to `true`. return nothing.

## Question 6: hasOnlyEvenNumbers
Given an array of numbers, return `true` if every number is even, otherwise return `false`.

Do not modify the original array.

## Question 7: doubleEveryNumber
Given an array of numbers, return a new array where every element is doubled.

Do not modify the original array.

## Question 8: getIndexOfApple
Given an array of food objects, return the number index of the food item with a `name` of "apple". If it is not found, return `-1`.

Do not modify the original array.

## Question 9: convertToBooleans
Given an array of values, return a new array where each value is converted to a boolean. That means that if the value is truthy, the new value should be `true` and if the value is falsy, the new value should be `false`.

Do not modify the original array.

## Question 10: numberOfCharacters
Given a string return an object with the count of each character in the string. All characters must be tracked, even spaces. Meaning, don't skip over spaces. Be sure to check the tests on this one to make sure you're getting the right object output.

## Question 11: anyGreaterThan10
Given an array of numbers, return `true` if any of the numbers are greater than 10. Otherwise, return `false`.

Do not modify the original array.

## Question 12: roundAll
Given an array of numbers, return a new array where every number is rounded to the nearest integer.

Do not modify the original array.

## Question 13: removeJerkFromCompany
Given an array of people objects, mutate it so that the person with the `personality` property of "jerk" is removed from the array. Return nothing.

## Question 14: onlyStrings
Given an array of values, return a new array where only strings are kept.

Do not modify the original array.

## Question 15: chosenCoordinates
Given an array of coordinate arrays and a number, select the first coordinate pair that adds up to the specified number. Return `undefined` if no pair adds up to the number.

Do not modify the original array.

## Question 16: stringsToLength
Given an array of strings, return a new array where each string is replaced by its length.

Do not modify the original array.

## Question 17: totalGreaterThanGiven
Given an array of numbers and a number, return `true` if the sum of the array is greater than the given number. Otherwise, return `false`.

Do not modify the original array.

## Question 18: numberOfLongWords
Given an array of words, return the number of words that are longer than 4 characters. If no words are longer than 4 characters, return 0.

Do not modify the original array.


# Modify
Looks like someone didn't get the memo about the new array methods in `modify.js`. They've written some code that uses loops. Refactor the code to use the array methods you learned today. Make sure to use the right one though!

Your only guide for this section is the existing code and the tests in `modify.spec.js`. This is very much how real world refactors work, take the opportunity to practice!

# Short answers
The questions are about what situations are best for which methods. The better you get at this now, the faster you can code in a stressful interview!
