class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const map = new Map();

        nums.sort().forEach( (n, i) => {

            let v = map.get(n) ?? 0;

            map.set(n, v + 1);

        })

        const res = [...map.entries()]

                    .sort((a,b) => b[1] - a[1])

                    .slice(0, k)
                    
                    .map(([key]) => key)

        console.log(res)

        return res;

    }
}
