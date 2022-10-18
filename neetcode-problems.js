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
    //Solution 1
    var twoSum = function(nums, target) {
        //  nested for loop and for every value we create a variable difference, which stores the target 
        //  minus that value and compare difference to all other values, and if difference is equal to any other 
        //  value in the array and return indices if value is equal to another item in array
            let difference =  null;
            let ans = [];
            for (let i = 0; i < nums.length; i++) {
                difference = target - nums[i]   
                for (let j = i+1; j < nums.length; j++) {
                    if (difference === nums[j]) {
                        ans.push([i])
                        ans.push([j])
                        return ans
                    }
                }
            }
        };

        //Solution 2
        var twoSum = function(nums, target) {
            let ans = [];
            for (let i = 0; i < nums.length; i++) {
                for (let j = i+1; j < nums.length; j++) {
                    if (nums[i] +nums[j] ===target) {
                        ans.push([i])
                        ans.push([j])
                        return ans
                    }
                }
            }
        };


        /* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
        determine if the input string is valid.

        An input string is valid if:
        
            Open brackets must be closed by the same type of brackets.
            Open brackets must be closed in the correct order.
            Every close bracket has a corresponding open bracket of the same type.
        
            https://leetcode.com/problems/valid-parentheses/ 
        */
         
        var isValid = function(s) {
            // converts string s to an array of characters
            let arr = s.split("")
            let stack = [];
            //console.log(stack)
        
          /*  ([)]  [()]
        
            push (
            push [
            pop )
            pop ]
        
            */
        
            for (let i = 0; i < arr.length; i++) {
                let curr = arr[i];
                if (curr === "(" || curr === "{" || curr === "[") {
                    stack.push(curr)
                } else {
                    let peekIndx = stack.length - 1;
                    if (curr === ")" && stack[peekIndx] === "(" ||
                        curr === "}" && stack[peekIndx] === "{" || 
                        curr === "]" && stack[peekIndx] === "[") {
                        stack.pop()
                    } else {
                        return false;
                    }
                } 
            }
        
            if (stack.length === 0) {
                return true;
            }
            return false;
        }       