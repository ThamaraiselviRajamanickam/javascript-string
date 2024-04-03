/*12. Convert a String to camelCase
Given a string str, return a new string where spaces are replaced by camel case.
Input: str = "hello world"
Output: "helloWorld"
 */
var str = "hello world";
var newStr=str.split(" ")
for(i=0;i<newStr.length;i++){
    newStr[i]=newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1)
}
var str1=newStr.join('')
console.log(str1)