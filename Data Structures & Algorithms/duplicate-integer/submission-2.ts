class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        

    const seen = [];
    let res = false

    for (let i = 0; i < nums.length; i++){

        if ( seen.includes(nums[i]) ){
            
            res = true;
            break;  
        }

        seen.push(nums[i]);
    }

    return res;

    }

}