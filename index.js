/***
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return array of indices of the two numbers such that they add up to the target, where index1 must be less than index2.

if no matched pairs exists; output should be a null value

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
 
Example 1:
  Input: numbers = [2,7,11,15], target = 9
  Output: [1,2]
  Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

Example 2:
  Input: numbers = [2,3,4], target = 6
  Output: [1,3]

Example 3
  Input: numbers = [-1,0], target = -1
  Output: [1,2]

Example 4 
  Input: numbers = [11, 19, 78], target = 8
  Output: null

 Note:
  Desired time complexity is O(n), space complexity O(1)

 Note: your comments, in addition to your code are also evaluated
*/

// This code uses Bubble Sort Algorithm to get
// the best possible in time complexity is O(n)
// and the worst possibility in space complexity is O(1)

// input value initialization
let numbers = [2, 7, 11, 2];
let target = 9;

const findIndices = () => {
  // first loop to determine index1
  for (let a = 0; a < numbers.length; a++) {
    let index1 = numbers[a];

    // second loop to determine index2
    for (let b = 1; b < numbers.length; b++) {
      let index2 = numbers[b];

      // sum index1 and index2
      let twoSum = index1 + index2;

      // checks whether the target value
      // is the same as the sum value
      if (target === twoSum) {
        // return non-zero index value
        return [a + 1, b + 1];
      }
    }
  }
  // returns null if nothing matches
  return null;
};

console.log(findIndices());