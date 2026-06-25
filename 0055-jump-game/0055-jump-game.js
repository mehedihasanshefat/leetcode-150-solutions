/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReachable = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReachable) {
            return false;
        }
        
        maxReachable = Math.max(maxReachable, i + nums[i]);

        if (maxReachable >= nums.length - 1) {
            return true;
        }
    }

    return true;
};