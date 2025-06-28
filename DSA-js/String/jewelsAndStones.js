/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let jewelss = new Set()
     for(let i=0;i<jewels.length;i++)
     {
        jewelss.add(jewels[i]);
     }
     for(let j=0;j<stones.length;j++)
     {
        if(jewelss.has(stones[j]))
        {
            count++;
        }
     }
     return count

};
// hello