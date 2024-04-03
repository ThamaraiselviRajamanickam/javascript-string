/*3. Determine If a String Is a Palindrome
Given a string str, return true if str is a palindrome, otherwise return false.
Input: str = "racecar"
Output: true
 */
var str="hello";
var revStr="";
function check(){
for(var i=str.length-1;i>=0;i--){
   // console.log(i)
    revStr+=str[i]
   // console.log(revStr)
    if(i==0 && revStr==str){
     console.log(true) ;
    }else if(i==0 && revStr!=str ){
        console.log(false)
    }
}
}
check()