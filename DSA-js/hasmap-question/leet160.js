// checking the interesection of the twolinked list at the same time
var getIntersectionNode = function(headA, headB) {
    let curra = headA
    let currb = headB
    let store = new Set();
    while(currb)
    {
        store.add(currb);
        currb = currb.next;
    }
    while(curra)
    {
        if(store.has(curra))
        {
            return curra;
        }
        curra = curra.next;
    }
    return null;
};