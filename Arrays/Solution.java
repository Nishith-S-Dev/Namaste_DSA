
import java.util.HashMap; 
    public class Solution {
        public int singleNumber(int[] nums) {
            HashMap<Integer, Integer> hash = new HashMap<>();
            for (int num : nums) {
                hash.put(num, hash.getOrDefault(num, 0) + 1);
            }
            for (int num : nums) {
                if (hash.get(num) == 1) {
                    return num;
                }
            }
            return -1;
        }
    }
