import java.lang.*;

public class Solutions {
    public static int longestCommonSubsequence(String string2, String string1) {

        int [][] cache = new int[string1.length() + 1][string2.length() + 1];

        for (int row = 0; row < string1.length() + 1; row++) { //string1 indexed by row
            for (int col = 0; col < string2.length() + 1; col++) { //string2 indexed by col

                if (row == 0 || col == 0) { // (0,0) represents empty string
                    cache[row][col] = 0;    //lcs of empty string compared to empty string is 0
                } else {
                    char char1 = string1.charAt(row - 1);
                    char char2 = string2.charAt(col - 1);
                
                    if (char1 == char2) {
                        cache[row][col] = 1 + cache[row - 1][col - 1];  //end characters deleted
                    } else {
                        cache[row][col] = Math.max(cache[row - 1][col], cache[row][col - 1]); //need to find the longest length given two cases
                    }
                }
            }
        }

        return cache[string1.length()][string2.length()];
    }

    public static void main(String args[]) {
        System.out.println(longestCommonSubsequence("aab","azb"));
        System.out.println(longestCommonSubsequence("",""));
        System.out.println(longestCommonSubsequence("asadada","cdcdcdce"));
        System.out.println(longestCommonSubsequence("asadada","xrt"));

    }
}
