/*14. Check If a String Is a Valid URL
Given a string str, return true if str is a valid URL, otherwise return false.
Input: str = "http://www.example.com"
Output: true
 */
var myStr="http://www.example.com";
var urlRegex = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*/gi;
var newStr=urlRegex.test(myStr)
console.log(newStr)