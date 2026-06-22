class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        const hash = {};

        strs.forEach(_string => {

            var sorted = JSON.stringify(_string.split('').sort());
            hash[sorted]  = !hash[sorted] ? [_string] : [...hash[sorted], _string]

        })
        return Object.values(hash)
    }
}
