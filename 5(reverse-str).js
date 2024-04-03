/*5. Reverse a String Without Using the reverse() Method
Given a string str, return a new string that is the reverse of str without using the reverse() method.
Input: str = "hello"
Output: "olleh"
 */
var str="hello"
var reverse=""
for(i=str.length-1;i>=0;i--){
    reverse += str[i];
   
} console.log(reverse)
