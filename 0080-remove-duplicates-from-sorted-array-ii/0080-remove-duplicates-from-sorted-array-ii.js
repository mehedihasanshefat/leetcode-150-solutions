/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length;
    
    let k = 2; // Start from index 2, as the first two elements are always allowed

    for (let i = 2; i < nums.length; i++) {
        // Compare the current element with the element two positions before the insertion point k
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};