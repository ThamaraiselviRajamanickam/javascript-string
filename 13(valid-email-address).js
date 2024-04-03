/*13. Check If a String Is a Valid Email Address
Given a string str, return true if str is a valid email address, otherwise return false.
Input: str = "example@example.com"
Output: true
 */
var str="example@example.com";
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var newStr=emailRegex.test(str);
console.log(newStr)