/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

// function sort(nums, sorted = []) {

//     if (nums.length === 0) return sorted

//     for (let i = 0; i < nums.length; i ++) {
//         // let num = nums[i]
//         if (nums[i+1] < nums[i]) {

//         }
//     }

// }

function swap(arr, firstIndex, secondIndex) {
    let firstNum = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = firstNum;
    return arr;
}

function sort(arr, index = 0) {
    // base case:
    if (index == arr.length) return arr;
    // * necessary
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            // We are setting our second index to our first index:
            //   we are getting an array:
            arr = swap(arr, i, i + 1);
        }
    }
    // recursive case:
    return sort(arr, index + 1);
}

debugger
console.log(sort([4, 1, 6, 3, 1, 7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([])); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
