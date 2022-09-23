/*ARRAYS and HASHING*/
    // Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
        // Link: https://leetcode.com/problems/contains-duplicate/
    // Solution 1 -> brute force O(n^2) solution
    var containsDuplicate = function(nums) {
        for (i = 0; i < nums.length; i++) {
            for (j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    return true;
                }
            }
        }
        return false;
    };

    // Solution 2 -> optimized O(n) solution
    var containsDuplicate = function(nums) {
        let testArray = nums
        let distinct = [...new Set(testArray)]
        if (JSON.stringify(testArray) == JSON.stringify(distinct)) {
            return false
        } 
            return true
    };