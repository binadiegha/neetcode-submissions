class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        const output = new Array(nums.length)
        const len = nums.length;
        let fix = 1;

        for (let i = 0; i < len; i++)

        {
            output[i] = fix;
            fix *= nums[i];
        }
        fix = 1;
        for (let i = nums.length - 1; i >= 0; i--)
        {
            output[i] *= fix;
            fix *= nums[i];
        }

        return output;
    }
}
