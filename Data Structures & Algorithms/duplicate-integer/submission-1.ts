class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let count = 0;
        const seen = new Set();
        while( count < nums.length){
            if (seen.has(nums[count])) {
                    return true;
                };

                console.log('added');
                seen.add(nums[count]);
                 count++;
        }
       

        return false;
    }
}