/*11. Count the Number of Occurrences of a Specific Character in a String
Given a string str and a specific character ch, return the number of times ch occurs in str.
Input: str = "hello", ch = "l"
Output: 2
 */
function countOccurrences(str, ch) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            count++;
        }
    }
    return count;
}
var str = "hello";
var ch = "l";
console.log(countOccurrences(str, ch)); 
