class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        const regex = /[^A-Za-z0-9]/g;

        const processed = s.toLowerCase().replace(regex, '');

        let counter = 0;

        const len = processed.length

        const half = Math.ceil(len / 2);

        while (counter <= half)
        {

            if (processed[counter] !== processed[(len - 1) - counter])
            {
                return false
            }

            counter++;
        }

        return true;
    }
}
