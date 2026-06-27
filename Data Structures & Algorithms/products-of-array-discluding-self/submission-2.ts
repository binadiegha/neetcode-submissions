class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        const output = new Array(nums.length)

        let Prefix = 1;

        let Postfix = 1;


        for (let i = 0; i < nums.length; i++)

        {
            output[i] = Prefix;

            Prefix *= nums[i];

        }

        for (let i = nums.length - 1; i >= 0; i--)

        {
            output[i] *= Postfix;

            Postfix *= nums[i];
        }


        return output;
    }
}
