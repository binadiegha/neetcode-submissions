class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {

        const encoded = encodeURI(JSON.stringify(strs.reverse()));

        console.log(encoded)
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {

        const decoded = JSON.parse(decodeURI(str)).reverse()

        return decoded
    }
}
