class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const s_sort = s.split('').sort().join('');
        const t_sort = t.split('').sort().join('');

        return s_sort == t_sort;
    }
}
