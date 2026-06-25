/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;

    const reverse = (left, right) => {
        while (left < right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    };

    // Step 1: Reverse the entire array
    reverse(0, n - 1);
    // Step 2: Reverse the first k elements
    reverse(0, k - 1);
    // Step 3: Reverse the remaining n - k elements
    reverse(k, n - 1);
};