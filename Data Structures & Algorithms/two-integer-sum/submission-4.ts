class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        let numbers: number[] = [];
        let balance: number = target;
        let active = 0;
        let pass: boolean = false;

        while (pass == false){
            for (let i = active; i < nums.length; i++){
                if(i == active){
                    balance = target - nums[i];
                    continue;
                }

                if ((nums[i] - balance) == 0) {
                    if (active > i){
                        numbers = [i, active]
                    } else {
                        numbers = [active, i]
                    }
                    pass = true;
                    break;
                } 
            }

            // Reset the balance and target
            balance = target;
            active++;
        }
        
        return numbers;
    }
}
