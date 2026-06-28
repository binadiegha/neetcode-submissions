class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        let output = 0;

        const store = new Set(nums);

        for (let num of nums) {

            let curr = num;

            let reps = 0;
            
            while (store.has(curr))
            {
                curr++;

                reps++;
            }

            output = reps >= output ? reps : output;

        }

        return output;
    }
}
