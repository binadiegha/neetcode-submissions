class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        const output = [];

        let temp;

        for (let i = 0; i < nums.length; i++){

            temp = [...nums]

            temp.splice(i, 1);

            const solution = eval(temp.join('*').toString())

            console.log(solution)

            output.push(solution)

        }


        return output;
    }
}
