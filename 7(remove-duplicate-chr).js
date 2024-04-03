/*7. Remove Duplicate Characters From a String
Given a string str, return a new string that has all duplicate characters removed.
Input: str = "hello"
Output: "helo"
 */
var str="hello"
var newStr=""
for(i=0;i<=str.length-1;i++){
    if(!newStr.includes(str[i])){
        newStr+=str[i]
       
    }
} console.log(newStr);