class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        

    const seen = new Set();
    let res = false

    for (let i = 0; i < nums.length; i++){

        if ( seen.has(nums[i]) ){
            
            res = true;
            break;  
        }

        seen.add(nums[i]);
    }

    return res;

    }

}