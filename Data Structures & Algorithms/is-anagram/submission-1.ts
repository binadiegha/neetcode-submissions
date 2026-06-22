class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const s_sort = Array.from(s).sort().join('');
        const t_sort = Array.from(t).sort().join('');

        return s_sort == t_sort;
    }
}
