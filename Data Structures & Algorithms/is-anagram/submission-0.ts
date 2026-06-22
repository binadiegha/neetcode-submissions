class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length != t.length) return false;

        // count occurances
        function Counter(string_){
            const hash = {};
            Array.from(string_).sort().forEach( (l:string) => {
                if (!hash[l]) {
                    hash[l] = 1;
                    return
                }
                hash[l]++  
            });

            return hash;
        }

        const s_hash = Counter(s);
        const t_hash = Counter(t);

        return JSON.stringify(s_hash) == JSON.stringify(t_hash)

    }
}
