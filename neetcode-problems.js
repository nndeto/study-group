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

    //Given two strings s and t, return true if t is an anagram of s, and false otherwise. 
        // Link: https://leetcode.com/problems/valid-anagram/submissions/
    var isAnagram = function(s, t) {
        //     if anagram, return true
        //     if not, return false
        //     make sure both words lowercase --> action
        //     compare both words --> if/else statement
        //         probably going to sort them alphabetically to get the same order
        //     return based on the result of the comparison --> action/ return statement
            if (s.length != t.length) { //if they are not the same length, they are not an anagram
                return false;
            }
        //     anagram --> aaagmnr
        //     nagaram --> aaagmnr
        //     bat --> abt
        //     tab --> abt 
        //     taking out the possibility of failing b/c cases don't match
            let a = s.toLowerCase()
            let b = t.toLowerCase()
            a = a.split("").sort().join("") //NOTE TO SELF: STORE YOUR VALUES, DUH
            b = b.split("").sort().join("")
            if (a === b) {
                return true
            } else {
                return false
            }
            
        };

    // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    // You may assume that each input would have exactly one solution, and you may not use the same element twice.
        // Link: https://www.educative.io/blog/data-strucutres-hash-table-javascript
