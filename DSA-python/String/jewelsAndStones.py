# this is the solution for the brute force approach

class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        """
        :type jewels: str
        :type stones: str
        :rtype: int
        """
        count = 0
        for i in range(len(stones)):
            if stones[i] in jewels:
                count+=1
        return count

# another updated better solution would be

class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        """
        :type jewels: str
        :type stones: str
        :rtype: int
        """
        count = 0
        jewel = set(jewels)
        for i in range(len(stones)):
            if stones[i] in jewel :
                count+=1
        return count

        